import Topbar from "./components/topbar/index";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <Topbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
