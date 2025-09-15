import { ReactNode } from "react";
import Header from "~/layouts/components/Header";
import Footer from "~/layouts/components/Footer";

interface UploadLayoutProps {
  children: ReactNode;
}

function UploadLayout({ children }: UploadLayoutProps) {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="content">{children}</div>
      </div>
      <Footer />
    </div>
  );
}

export default UploadLayout;
