import './globals.css';

export const metadata = {
  title: 'Appscrip Store - Plain CSS',
  description: 'Frontend task with plain CSS, no frameworks.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
