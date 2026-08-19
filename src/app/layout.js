import "./globals.css";

export const metadata = {
  title: "Pastel Parallax Studio",
  description: "Modern Pastel Parallax Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="antialiased selection:bg-[#FFE0F0]">
        {children}
      </body>
    </html>
  );
}