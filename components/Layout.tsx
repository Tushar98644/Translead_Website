import Footer from "./Footer";
import Navbar from "./Navbar";
import { ReactNode } from 'react';

const Layout = ({children}:{children:ReactNode}) => {
    return ( 
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
     );
}
 
export default Layout;