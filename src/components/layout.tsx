import Sidebar from "./sidebar";
import AppBar from "./appbar";
import React from "react";

const Layout = ({ children }: {children: React.ReactNode}) => {
    return (
        <div className="flex">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col bg-gray-900 text-white">
                {/* App Bar */}
                <AppBar />

                {/* Main Content */}
                <div className="p-4">{children}</div>
            </div>
        </div>
    );
};

export default Layout;