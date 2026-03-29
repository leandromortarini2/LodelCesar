/* eslint-disable @typescript-eslint/no-explicit-any */

import { apiBase } from "../../../lib/axiosBase";

export interface GrabarTablaProps {
  empresa: string;
  modoApi: string;
  entornoApi: string;
}

export async function affectationPerson(
  { empresa, modoApi, entornoApi }: GrabarTablaProps,
  tabla: string,
  data: any,
) {
  const rows = Array.isArray(data) ? data : [data];

  try {
    const response = await apiBase.post(
      `${entornoApi}/comunes/grabarTabla.php?_i={"_e":"${empresa}","_m":"${modoApi}","_r":"json","_t":2}`,
      {
        tablas: tabla,
        [tabla]: rows,
      },
    );

    return response.data;
  } catch (error) {
    console.log("postGrabarTabla error:", error);
    throw new Error(`Error al grabar tabla ${tabla}`);
  }
}
