import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'products list',
  description: 'list of product',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
