export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <div className="w-full h-full flex justify-center align-center">
          {children}
        </div>
      </body>
    </html>
  );
}
