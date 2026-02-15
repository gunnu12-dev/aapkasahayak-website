import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://aapkasahayak.com'),
  title: {
    default: 'Aapka Sahayak - AI Tools, Calculators & Growth Resources',
    template: '%s | Aapka Sahayak'
  },
  description:
    'Discover curated AI tools, calculators, and practical guides for finance, productivity, and marketing.',
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: 'Aapka Sahayak',
    description:
      'Modern tool directory with interactive calculators, blog insights, and admin CMS workflows.',
    url: 'https://aapkasahayak.com',
    siteName: 'Aapka Sahayak',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aapka Sahayak',
    description:
      'Explore tools, categories, blog posts, calculators, and ratings in one performance-first platform.'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
