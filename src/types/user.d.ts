export {};

declare global {
  interface GUser {
      email: string;
      lastName: string;
      firstName: string;
      isAuthenticated: boolean;
  }
}
