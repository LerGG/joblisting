import { NextFont } from "next/dist/compiled/@next/font";
import { ContentWrapper } from "./Basic/ContentWrapper";
import { PageContainer } from "./Basic/PageContainer";
import { Spacer } from "./Basic/Spacer";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export interface LayoutProps {
  children: React.ReactNode;
  customfont?: NextFont;
}

export default function Layout({ children, customfont }: LayoutProps) {
  return (
    <>
      <Navbar />
      <Spacer />
      <PageContainer>
        <ContentWrapper>
          <main className={customfont?.className}>{children}</main>
        </ContentWrapper>
      </PageContainer>
      <Spacer />
      <Footer />
    </>
  );
}
