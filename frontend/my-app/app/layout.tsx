import "./globals.css";

export const metadata = {
  title: "Fitness Pro",
  description: "Fitness website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        <nav className="flex justify-between p-6 bg-black text-white">
          <h1 className="text-2xl font-bold text-green-500">
            Fitness Pro
          </h1>

          <div className="flex gap-6">
            <a href="#">Home</a>
            <a href="#">Programs</a>
            <a href="#">Contact</a>
          </div>
        </nav>

        {children}

      </body>
    </html>
  );
}