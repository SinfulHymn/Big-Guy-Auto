import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col h-screen">
            <Header />
            
            <main className="flex-grow">{children}</main>

            <Footer />
        </div>
    );
};

export default Layout;