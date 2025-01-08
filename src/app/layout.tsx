import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "픽셀커넥트 | 홈페이지 제작 전문",
  applicationName: "픽셀커넥트 | 홈페이지 제작 전문",
  openGraph: {
    description: "픽셀 커넥트는 1:1 맞춤 웹제작을 통해 여러분들의 브랜드 가치를 연결해줍니다.",
    images: "https://cdn.imweb.me/upload/S20241220403c4ccaefebe/790c91cb0364a.png",
  },
  keywords: ["홈페이지제작", "아임웹", "웹제작"],
  description: "픽셀 커넥트는 1:1 맞춤 웹제작을 통해 여러분들의 브랜드 가치를 연결해줍니다. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
