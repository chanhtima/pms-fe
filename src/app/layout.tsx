import "../styles/globals.css";
import "../styles/styles.css";
import { Prompt } from 'next/font/google'
import ThemeRegistry from '../components/Theme/ThemeRegistry';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import Navbar from "../layout/Navbar";
import Sidebar from "../layout/Sidebar";

const prompt = Prompt({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});
export const metadata = {
  title: "Example01",
  description: "Example01",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={prompt.className}>
        <ThemeRegistry>
          <Navbar />
          <div className="globals-layout">
            <div className="flex h-[calc(100vh-56px)] ">
              <div className="hidden md:block border-e pr-6 ">
                <Sidebar />
              </div>
              {/* ถ้ามี Sidebar ให้เพิ่ม md:px */}
              <div className="w-[100vw] md:px-6">
                {children}
              </div>
            </div>
          </div>
        </ThemeRegistry>
      </body>
    </html>
  );
}
