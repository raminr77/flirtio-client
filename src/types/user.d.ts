export {};

declare global {
  interface GUser {
      email: string;
      credit: number;
      lastName: string;
      firstName: string;
      isAuthenticated: boolean;
  }
}
