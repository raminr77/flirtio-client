export {};

declare global {
  interface GUser {
      email: string;
      credit: number;
      picture: string;
      lastName: string;
      firstName: string;
      isAuthenticated: boolean;
  }
}
