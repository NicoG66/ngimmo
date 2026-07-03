import './globals.css';

export const metadata = {
  title: 'NG Immo – Immobilienbewertung Wiesloch',
  description: 'Verlässliche Gutachten für sichere Entscheidungen. Nico Gerold (DIA)'
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
