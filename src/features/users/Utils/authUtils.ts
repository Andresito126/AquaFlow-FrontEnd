import { jwtDecode, type JwtPayload } from "jwt-decode";

export function isTokenExpired(token: string): boolean {
  try {
    const decoded = jwtDecode<JwtPayload>(token); 
    const now = Math.floor(Date.now() / 1000);

    if (!decoded.exp) return true; 
    return decoded.exp < now;
  } catch {
    return true; 
  }
}