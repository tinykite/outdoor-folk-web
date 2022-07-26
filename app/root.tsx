import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { GlobalStyles, GlobalReset } from "./styles/global";
import GlobalHeader from "~/components/GlobalHeader";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Outdoor Folk",
  viewport: "width=device-width,initial-scale=1",
  description: "Stories from the intersection of art and nature",
  // Tell the browser website supports light + dark themes
  // Dark is preferred by default
  // All browser-provided UI for the element should match the targeted theme
  // For exmaple, scroll bars, spellcheck underlines, and form controls
  // More info: https://web.dev/color-scheme/
  "color-scheme": "dark light",
});

export function links() {
  return [
    {
      rel: "stylesheet",
      href: "https://use.typekit.net/zdk6wcj.css",
    },
  ];
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        {typeof document === "undefined" ? "__STYLES__" : null}
      </head>
      <body>
        <GlobalReset />
        <GlobalStyles />
        <GlobalHeader />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
