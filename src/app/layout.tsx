// import "./globals.scss";
import "./scss/globals.scss";
import Header from "@/components/header";
import NextAuthProvider from "@/providers/NextAuth";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Meta from "@/components/meta";
config.autoAddCss = false;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NextAuthProvider>
        <Meta />
        <Header />
        <main>{children}</main>
      </NextAuthProvider>
    </>
  );
}
