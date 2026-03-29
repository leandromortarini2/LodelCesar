import { apiBase } from "../../app/lib/axiosBase";

interface Props {
  usuario: string;
  password: string;
  operador: string;
  _e: string;
  _m: string;
  entornoApi: string;
}

export async function login({
  usuario,
  password,
  _e,
  _m,
  entornoApi,
  operador,
}: Props) {
  try {
    const response = await apiBase.post(
      `${entornoApi}/codesades/loginInformes.php`,
      {
        _e,
        _m,
        usuario,
        operador,
        password,
      },
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
