import Link from 'next/link';
import './globals.css';

export const metadata = {
    title: 'Labdash',
    description: 'A simple dashboard for your homelab',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="flex bg-gray-900 min-h-screen">
                <nav className="w-48 p-4 flex flex-col gap-2">
                    <Link href="/pihole">Pi-hole</Link>
                </nav>
                {children}
            </body>
        </html>
    );
}