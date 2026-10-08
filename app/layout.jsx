import { Plus_Jakarta_Sans, Inter } from 'next/font/google';
import './globals.css';

const displayFont = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-gt-walsheim',
  display: 'swap',
});

const bodyFont = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  title: 'Uwase Sonia – Full Stack Engineer & UI/UX Designer',
  description: 'Portfolio of Uwase Sonia, a Full Stack Engineer and UI/UX Designer crafting intuitive, high-performance web applications, scalable architecture, and secure digital products.',
  keywords: 'Uwase Sonia, Full Stack Engineer, UI/UX Designer, Kigali, Rwanda, Next.js, React, Spring Boot, NestJS',
  openGraph: {
    title: 'Uwase Sonia – Full Stack Engineer & UI/UX Designer',
    description: 'Curious by nature, I build digital experiences that blend design, development, and smart solutions.',
    images: ['/assets/images/sonia_portrait.jpg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          rel="stylesheet" 
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap" 
        />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220%22%20width=%22100%22%20height=%22100%22><circle cx=%2250%22 cy=%2250%22 r=%2250%22 fill=%22%23483831%22/><text y=%2265%22 font-size=%2250%22 font-family=%22sans-serif%22 font-weight=%22bold%22 fill=%22%23f4f0f1%22 text-anchor=%22middle%22 x=%2250%22>S</text></svg>" />
      </head>
      <body className={`${displayFont.variable} ${bodyFont.variable}`}>
        {children}
      </body>
    </html>
  );
}
