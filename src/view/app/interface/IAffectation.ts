export interface IAffectation {
  idafectacion: number;
  nro_cred: number;
  dni: string;
  sexo: string;
  apellido: string;
  nombre: string;
  fecha_otorgado: string;
  importe: number;
  domicilio: string;
  localidad: string;
  provincia: string;
  cod_postal: string;
  tel: string;
  empleo: string;
  dom_empleo: string;
  loc_emp: string;
  cod_postal_emp: string;
  tel_emp: string;
  tipo: string;
  inha: number;
  f_alta: string;
  f_modi: string;
  f_baja: string;
  usuario_a: number;
  usuario_m: string;
  usuario_b: string;
}

export interface IPayloadAffect {
  tabla: "afectaciones";
  afectaciones: IAffectation[];
}
