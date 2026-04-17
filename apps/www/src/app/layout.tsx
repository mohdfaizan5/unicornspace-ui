import './global.css';
import { RootProvider } from 'fumadocs-ui/provider/next';
import { Inter_Tight, Instrument_Serif, Source_Serif_4 } from 'next/font/google';

const inter = Inter_Tight({
  subsets: ['latin'],
});

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ['latin'],
  variable: '--font-instrument-serif',
});

const sourceSerif4 = Source_Serif_4({
  subsets: ['latin-ext'],
  variable: '--font-source-serif-4',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.className} ${instrumentSerif.variable} ${sourceSerif4.variable}`} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen" suppressHydrationWarning>
        <RootProvider >{children}</RootProvider>
      </body>
    </html>
  );
}
