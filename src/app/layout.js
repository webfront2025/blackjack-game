import "./globals.css";

export const metadata = {
  title: "Blackjack",
  description: "Modern Blackjack game",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex items-center justify-center  w-full
            overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
