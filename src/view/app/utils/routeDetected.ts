export function routeDetected() {
  const locationDetected = window.location.hostname;
  const isComAr = window.location.hostname.endsWith(".com.ar");
  const urlProd = window.location.origin === "https://mitramed.com.ar";

  const inLocalhost = locationDetected.includes("localhost");
  const inVercel = locationDetected.includes("vercel");
  const inTest = locationDetected.includes("novagestion");

  if (inLocalhost || inVercel || inTest) {
    localStorage.setItem("_e", "20");
    localStorage.setItem("_m", "homo");
    localStorage.setItem("_env", "des");
  } else if (isComAr && !inLocalhost && !inVercel && !inTest && urlProd) {
    localStorage.setItem("_e", "20");
    localStorage.setItem("_m", "prod");
    localStorage.setItem("_env", "prod");
  }

  if (inLocalhost) {
    return {
      hostname: "localhost",
      menssage: "Estas en localhost",
      entorno: localStorage.getItem("_env"),
      modo: localStorage.getItem("_m"),
      code: 4,
      entornoApi:
        localStorage.getItem("_env") === "prod" ? "apinova" : "apinovades",
      modoApi: localStorage.getItem("_m") === "prod" ? "prod" : "homo",
    };
  } else if (inVercel) {
    return {
      hostname: "vercel",
      menssage: "Estas en vercel",
      entorno: localStorage.getItem("_env"),
      modo: localStorage.getItem("_m"),
      code: 3,
      entornoApi:
        localStorage.getItem("_env") === "prod" ? "apinova" : "apinovades",
      modoApi: localStorage.getItem("_m") === "prod" ? "prod" : "homo",
    };
  } else if (inTest) {
    return {
      hostname: "novagestion",
      menssage: "Estas en novagestion",
      entorno: localStorage.getItem("_env"),
      modo: localStorage.getItem("_m"),
      code: 2,
      entornoApi:
        localStorage.getItem("_env") === "prod" ? "apinova" : "apinovades",
      modoApi: localStorage.getItem("_m") === "prod" ? "prod" : "homo",
    };
  } else if (isComAr && !inLocalhost && !inVercel && !inTest && urlProd) {
    return {
      hostname: "mitramed.com.ar",
      menssage: "Estas en mitramed.com.ar",
      entorno: localStorage.getItem("_env"),
      modo: localStorage.getItem("_m"),
      code: 1,
      entornoApi:
        localStorage.getItem("_env") === "prod" ? "apinova" : "apinovades",
      modoApi: localStorage.getItem("_m") === "prod" ? "prod" : "homo",
    };
  }

  return {};
}
