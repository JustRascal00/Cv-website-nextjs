import { JetBrains_Mono } from "next/font/google";
import dynamic from "next/dynamic";
import "./globals.css";

const Header = dynamic(() => import("@/components/Header"), { ssr: false });
const PageTransition = dynamic(() => import("@/components/PageTransition"), {
  ssr: false,
});
const StairTransition = dynamic(() => import("@/components/StairTransition"), {
  ssr: false,
});

const JetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrains-mono",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={JetBrainsMono.variable}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
