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

export interface UserForgetPasswordResponse {
  success: boolean;
  message: string;
}

export interface UserForgetPasswordReguest {
  email: string;
}
