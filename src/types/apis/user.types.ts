export interface UserLoginReguest {
  email: string;
  password: string;
}

export interface UserLoginResponse extends GUser {}

export interface UserRegisterReguest {
  email: string;
  lastName: string;
  password?: string;
  firstName: string;
  picture?: string | null;
}

export interface UserRegisterResponse extends GUser {}
