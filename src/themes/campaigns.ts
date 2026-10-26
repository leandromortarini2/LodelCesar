export type Campaign = "default" | "halloween" | "navidad" | "pascua";

// Argentina no usa horario de verano: America/Argentina/Buenos_Aires es UTC-3 fijo.
interface CampaignRange {
  campaign: Exclude<Campaign, "default">;
  start: number;
  end: number; // exclusivo
}

const AR = "-03:00";
const DAY_MS = 24 * 60 * 60 * 1000;

const arMidnight = (year: number, month: number, day: number): number =>
  Date.parse(
    `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}T00:00:00${AR}`
  );

// Domingo de Pascua (calendario gregoriano, algoritmo de Meeus/Jones/Butcher).
function easterSunday(year: number): number {
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31);
  const day = ((h + l - 7 * m + 114) % 31) + 1;
  return arMidnight(year, month, day);
}

const FIXED_RANGES: CampaignRange[] = [
  {
    campaign: "halloween",
    start: Date.parse(`2026-10-26T17:42:00${AR}`),
    end: Date.parse(`2026-11-05T00:00:00${AR}`),
  },
  {
    campaign: "navidad",
    start: Date.parse(`2026-12-01T00:00:00${AR}`),
    end: Date.parse(`2027-01-07T00:00:00${AR}`),
  },
];

// Pascuas: desde el Domingo de Ramos (7 días antes) hasta el lunes de Pascua inclusive.
function easterRange(year: number): CampaignRange {
  const easter = easterSunday(year);
  return {
    campaign: "pascua",
    start: easter - 7 * DAY_MS,
    end: easter + 2 * DAY_MS,
  };
}

function getRanges(now: number): CampaignRange[] {
  const year = new Date(now + -3 * 60 * 60 * 1000).getUTCFullYear();
  return [...FIXED_RANGES, easterRange(year), easterRange(year + 1)];
}

export function getCampaign(now: number = Date.now()): Campaign {
  const range = getRanges(now).find((r) => now >= r.start && now < r.end);
  return range ? range.campaign : "default";
}

/** Milisegundos hasta el próximo cambio de temática, o null si no hay más. */
export function msToNextChange(now: number = Date.now()): number | null {
  const boundaries = getRanges(now)
    .flatMap((r) => [r.start, r.end])
    .filter((t) => t > now);
  return boundaries.length ? Math.min(...boundaries) - now : null;
}
