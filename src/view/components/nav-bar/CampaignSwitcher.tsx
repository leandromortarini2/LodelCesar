import { useRef } from "react";
import useCampaignStore, { isLocalhost } from "../../../themes/campaignStore";
import type { Campaign } from "../../../themes/campaigns";

const OPTIONS: { value: Campaign; label: string }[] = [
  { value: "default", label: "Normal" },
  { value: "halloween", label: "Halloween" },
  { value: "navidad", label: "Navidad" },
  { value: "pascua", label: "Pascuas" },
];

// Herramienta de desarrollo: no se renderiza fuera de localhost.
export default function CampaignSwitcher() {
  const current = useCampaignStore((s) => s.current);
  const setOverride = useCampaignStore((s) => s.setOverride);
  const detailsRef = useRef<HTMLDetailsElement>(null);

  if (!isLocalhost()) return null;

  return (
    <details ref={detailsRef} className="relative">
      <summary
        aria-label="Cambiar temática"
        className="list-none flex justify-center items-center w-10 h-10 rounded-full bg-colorTres text-lg border-2 border-colorTres shadow-md cursor-pointer select-none [&::-webkit-details-marker]:hidden"
      >
        🎨
      </summary>
      <fieldset className="absolute right-0 top-12 z-20 min-w-36 flex flex-col gap-2 rounded-lg bg-white p-3 shadow-lg">
        <legend className="sr-only">Temática</legend>
        {OPTIONS.map(({ value, label }) => (
          <label
            key={value}
            className="flex items-center gap-2 text-sm text-default-text cursor-pointer"
          >
            <input
              type="radio"
              name="campaign"
              value={value}
              checked={current === value}
              onChange={() => {
                setOverride(value);
                detailsRef.current?.removeAttribute("open");
              }}
            />
            {label}
          </label>
        ))}
      </fieldset>
    </details>
  );
}
