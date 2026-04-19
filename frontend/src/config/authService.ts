/** Auth API base URL (no imports from app entry — avoids circular deps with `main.tsx`). */
export const authService =
  import.meta.env.VITE_AUTH_SERVICE_URL ?? "http://localhost:3000";
