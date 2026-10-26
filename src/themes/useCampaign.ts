import { useEffect, useState } from "react";
import useCampaignStore, { isLocalhost } from "./campaignStore";
import { getCampaign, msToNextChange, type Campaign } from "./campaigns";

// setTimeout no admite delays mayores a 2^31-1 ms.
const MAX_DELAY = 2_147_483_647;
// Red de seguridad: suspensión del equipo, reloj ajustado, pestañas en segundo plano.
const RECHECK_MS = 60_000;

export function useCampaign(): Campaign {
  const [scheduled, setCampaign] = useState<Campaign>(() => getCampaign());
  const override = useCampaignStore((s) => s.override);
  const setCurrent = useCampaignStore((s) => s.setCurrent);
  // El override manual solo existe en localhost; en producción manda el calendario.
  const campaign = isLocalhost() && override ? override : scheduled;

  useEffect(() => {
    const sync = () => setCampaign(getCampaign());

    const next = msToNextChange();
    const timeout =
      next === null ? undefined : window.setTimeout(sync, Math.min(next, MAX_DELAY));
    const interval = window.setInterval(sync, RECHECK_MS);
    const onVisible = () => {
      if (document.visibilityState === "visible") sync();
    };

    document.addEventListener("visibilitychange", onVisible);
    window.addEventListener("focus", sync);
    return () => {
      if (timeout !== undefined) window.clearTimeout(timeout);
      window.clearInterval(interval);
      document.removeEventListener("visibilitychange", onVisible);
      window.removeEventListener("focus", sync);
    };
  }, [scheduled]);

  useEffect(() => {
    setCurrent(campaign);
    const root = document.documentElement;
    if (campaign === "default") root.removeAttribute("data-campaign");
    else root.setAttribute("data-campaign", campaign);
  }, [campaign, setCurrent]);

  return campaign;
}
