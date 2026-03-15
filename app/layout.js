import Link from 'next/link';
import './globals.css';
import { ThemeProvider } from './components/ThemeProvider';
import ThemeToggle from './components/ThemeToggle';

export const metadata = {
    title: 'Labdash',
    description: 'A simple dashboard for your homelab',
};

export default function RootLayout({ children }) {
  return (
          <html lang="en">
              <body className="flex  dark:bg-gray-900 bg-gray-50 min-h-screen">
                  <ThemeProvider>
                      <nav className="w-48 p-4 flex flex-col gap-2  dark:bg-gray-800 bg-white border-r  dark:border-gray-700 border-gray-200">
                          <Link
                              href="/"
                              className=" dark:text-gray-300 text-gray-700  dark:hover:text-white hover:text-gray-900 px-3 py-2 rounded transition-colors"
                          >
                              Home
                          </Link>
                          <Link
                              href="/pihole"
                              className=" dark:text-gray-300 text-gray-700  dark:hover:text-white hover:text-gray-900 px-3 py-2 rounded transition-colors"
                          >
                              Pi-hole
                      </Link>
                      <div className="flex-1"></div>

                          {/* Theme Toggle at Bottom */}
                          <div className="mt-auto pt-4 border-t  dark:border-gray-700 border-gray-200">
                              <ThemeToggle />
                          </div>
                      </nav>
                      {children}
                  </ThemeProvider>
              </body>
          </html>
      );
}
