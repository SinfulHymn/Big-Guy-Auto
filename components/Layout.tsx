import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

type LayoutProps = {
    children: React.ReactNode;
};

const Layout = ({children}: LayoutProps) =>  {
    return (
        <div className="flex flex-col h-screen">
            <Header />
            
            <main className="flex-grow">{children}</main>

            <Footer />
        </div>
    );
};

export default Layout;