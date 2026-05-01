export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <header>Topbar. . .</header>
        <main>{children}</main>
      </body>
    </html>
  );
}
