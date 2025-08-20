import Header from "~/components/Layouts/components/Header";
import Footer from "~/components/Layouts/components/Footer";

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
