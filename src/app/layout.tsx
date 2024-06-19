import './globals.scss';
import Header from './components/Header';
import Footer from './components/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <title>Zespół Szkół Nr 1 im. Krzysztofa Kamila Baczyńskiego w Sokołowie Podlaskim</title>
      <meta name="description" content='Zespół Szkół Nr 1 im. Krzysztofa Kamila Baczyńskiego w Sokołowie Podlaskim'></meta>
      <body>
        <Header />
        <main className="container">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
