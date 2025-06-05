export interface AccessRequest {
  id?: number;
  nombre: string;
  correo: string;
  accesosSolicitados: string[];
  estado: string;
}
