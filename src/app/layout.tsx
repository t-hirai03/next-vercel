import "./globals.css";
import Header from '@/components/header';
import NextAuthProvider from '@/providers/NextAuth';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main>
        <NextAuthProvider>{children}</NextAuthProvider>
      </main>
    </>
  );
}
