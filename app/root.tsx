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
// import { ThemeProvider } from "./providers/themeProvider";
import Footer from "./components/Footer";

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
    {
      rel: "icon",
      href: "/favicon-16x16.png",
      type: "image/png",
      sizes: "16x16",
    },
    {
      rel: "icon",
      href: "/favicon-32x32.png",
      type: "image/png",
      sizes: "32x32",
    },
    {
      rel: "icon",
      href: "/favicon-96x96.png",
      type: "image/png",
      sizes: "96x96",
    },
    {
      rel: "icon",
      href: "/favicon-128x128.png",
      type: "image/png",
      sizes: "128x128",
    },
    {
      rel: "icon",
      href: "/favicon-196x196.png",
      type: "image/png",
      sizes: "196x196",
    },
  ];
}

function setColorsByTheme() {
  const colorModeKey = "🔑";
  // const colorModeCssProp = "⚡️";
  const persistedPreference = localStorage.getItem(colorModeKey);

  let colorMode: any = "dark";

  const hasUsedToggle = typeof persistedPreference === "string";

  if (hasUsedToggle) {
    colorMode = persistedPreference;
  } else {
    colorMode = "dark";
  }
  document.documentElement.className = `${colorMode}`;
}

//github.com/joshwcomeau/dark-mode-minimal
const MagicThemePlaceholder = () => {
  const boundFn = String(setColorsByTheme);

  const calledFunction = `(${boundFn})()`;

  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: calledFunction }} />;
};

export default function App() {
  return (
    // <ThemeProvider>
    <html lang="en">
      <head>
        <Meta />
        <Links />
        {typeof document === "undefined" ? "__STYLES__" : null}
        {typeof document === "undefined" ? <MagicThemePlaceholder /> : null}
      </head>
      <body>
        <GlobalReset />
        <GlobalStyles />
        <GlobalHeader />
        <Outlet />
        <Footer />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
    // </ThemeProvider>
  );
}
