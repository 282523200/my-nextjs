import '@/app/ui/global.css'; //全局css
import { inter } from '@/app/ui/fonts'; //全局字体
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  //metadata <head> 头部 信息
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
