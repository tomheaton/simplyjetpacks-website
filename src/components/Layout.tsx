import Footer from "@components/Footer";
import Header from "@components/Header";

const Layout = ({ children }: any) => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-between">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
