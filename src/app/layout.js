import "./globals.css";

export const metadata = {
  title: "Portfolio Breno Lima",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
