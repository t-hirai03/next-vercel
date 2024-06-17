import "./scss/globals.scss";
import Header from "@/components/header";
import NextAuthProvider from "@/providers/NextAuth";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Meta from "@/components/meta";
import { GoogleAnalytics } from "@next/third-parties/google";
config.autoAddCss = false;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Meta />
      <NextAuthProvider>
        <GoogleAnalytics gaId="G-M0MJH6RXT3" />
        <Header />
        <main>{children}</main>
      </NextAuthProvider>
    </>
  );
}
