import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Poppins } from 'next/font/google'

// const poppins = Poppins({
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-poppins',
//   weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
// });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main >
      {/* <style jsx global>
        {`
          .font-100 { font-weight: 100; }
          .font-200 { font-weight: 200; }
          .font-300 { font-weight: 300; }
          .font-400 { font-weight: 400; }
          .font-500 { font-weight: 500; }
          .font-600 { font-weight: 600; }
          .font-700 { font-weight: 700; }
          .font-800 { font-weight: 800; }
          .font-900 { font-weight: 900; }
        `}
      </style> */}
      <Component {...pageProps} />
    </main>
  );
}
