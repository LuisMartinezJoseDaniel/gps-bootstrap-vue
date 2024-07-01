export interface User {
  role: string;
  username: string;
  name: string;
  phone: string;
  email: string;
  idCatProvider: string;
  idCatMvno: string;
}

export interface UserBackend {
  id: number;
  username: string;
  role: number;
  idCatStatus: number;
  name: Name;
  phone: string;
  email: Email;
  createdAt: Date;
  admin: boolean;
}

export enum Email {
  Empty = '',
  JoseLuisPuntoredMX = 'jose.luis@puntored.mx',
}

export enum Name {
  Empty = '',
  Test = 'Test',
  UsuarioDemo = 'Usuario Demo',
}
