export type Gender = "Masculino" | "Femenino";

export const calculateCUIL = (dni: string, gender: Gender): string => {
  const paddedDni = dni.padStart(8, "0");

  const prefix = gender === "Masculino" ? "20" : "27";

  const calculateDV = (
    pre: string,
    document: string,
  ): { dv: number; finalPrefix: string } => {
    const fullSearch = pre + document;
    const multipliers = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2];

    let sum = 0;
    for (let i = 0; i < 10; i++) {
      sum += parseInt(fullSearch[i]) * multipliers[i];
    }

    const rest = sum % 11;

    if (rest === 0) return { dv: 0, finalPrefix: pre };
    if (rest === 1) {
      return {
        dv: gender === "Masculino" ? 9 : 4,
        finalPrefix: "23",
      };
    }
    return { dv: 11 - rest, finalPrefix: pre };
  };

  const { dv, finalPrefix } = calculateDV(prefix, paddedDni);

  return `${finalPrefix}${paddedDni}${dv}`;
};
