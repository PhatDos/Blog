import Header from "~/layouts/components/Header";
import Footer from "~/layouts/components/Footer";

function UploadLayout({ children }) {
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
