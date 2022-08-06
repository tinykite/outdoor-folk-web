import { createCookie } from "@remix-run/node"; // or cloudflare/deno

export const userTheme = createCookie("user-theme", {
  theme: "dark",
});
