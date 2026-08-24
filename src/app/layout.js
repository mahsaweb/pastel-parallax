import "./globals.css";

export const metadata = {
  title: "Parallax Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* لود مستقیم فونت Montserrat نازک با ضخامت 100 و 200 */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400&family=Vazirmatn:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}