export {};

declare global {
  interface GUser {
    email: string;
    credit: number;
    lastName: string;
    firstName: string;
    created: string;
    updated: string;
    picture: string | null;
    isAuthenticated: boolean;
    accessToken?: string;
    id?: number;
  }
}
