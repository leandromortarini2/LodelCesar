import { apiBase } from "../lib/axiosBase";

interface ILocalityProps {
  entornoApi: string;
  modoApi: string;
  empresa: string;
}

export default async function getLocality({
  entornoApi,
  empresa,
  modoApi,
}: ILocalityProps) {
  try {
    const response = await apiBase.get(
      `/${entornoApi}/mitramed/obtenerLocalidades.php?_i={"_e":"${empresa}","_m":"${modoApi}"}`
    );
    return response.data;
  } catch (error) {
    console.log("error:", error);
    throw new Error("Error al obtener las localidades");
  }
}
