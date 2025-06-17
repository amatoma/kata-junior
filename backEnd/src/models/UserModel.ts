export interface User {
  id?: number;

  nombre: string;
  correo: string;
  estado: 'pendiente' | 'aprobado' | 'rechazado';
  fechaIngreso: string;
  onboardingBienvenida: boolean;
  onboardingTecnico: boolean;
  fechaOnboardingTecnico?: string;
}