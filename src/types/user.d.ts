export {};

declare global {
  interface GUser {
      email: string;
      isAuthenticated: boolean;
  }
}
