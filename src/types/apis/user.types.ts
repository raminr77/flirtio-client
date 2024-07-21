export interface UserLoginReguest {
  email: string;
  password: string;
}

export interface UserLoginResponse extends GUser {}

export interface UserRegisterReguest {
  email: string;
  password: string;
  lastName: string;
  firstName: string;
}

export interface UserRegisterResponse extends GUser {}
