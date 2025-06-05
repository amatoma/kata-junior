export interface User {
  id?: number;
  nombre: string;
  correo: string;
  area: string;
  rol: string;
  estado: 'pendiente' | 'aprobado' | 'rechazado';
}