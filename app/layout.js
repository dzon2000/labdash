export const metadata = {
  title: 'Labdash',
  description: 'A simple dashboard for your homelab',
};
 
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}