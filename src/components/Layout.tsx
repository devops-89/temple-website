import { LAYOUTPROPS } from "@/utils/types";
import Header from "./Header";
import Footer from "./Footer";
import SubFooter from "./sub-Footer";
const Layout = ({ children }: LAYOUTPROPS) => {
  return (
    <div>
      <Header />
      {children}
      <SubFooter />
      <Footer />
    </div>
  );
};

export default Layout;
