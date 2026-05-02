import Topbar from "./components/topbar/index";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Topbar />
      {children}
    </div>
  );
}
