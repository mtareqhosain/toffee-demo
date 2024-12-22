import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const navigate = useNavigate();

    const sidebarItems = [
        { id: 1, icon: "📺", label: "TV", path: "/tv" },
        { id: 2, icon: "🎬", label: "Movies", path: "/movies" },
        { id: 3, icon: "ℹ️", label: "Info", path: "/info" },
    ];

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "ArrowDown") {
            setActiveIndex((prev) => (prev + 1) % sidebarItems.length);
        } else if (e.key === "ArrowUp") {
            setActiveIndex((prev) =>
                prev === 0 ? sidebarItems.length - 1 : prev - 1
            );
        } else if (e.key === "Enter") {
            navigate(sidebarItems[activeIndex].path);
        }
    };

    return (
        <div
            className="flex flex-col items-center bg-gray-900 text-white w-20 h-screen p-4 space-y-6"
            tabIndex={0}
            onKeyDown={handleKeyDown}
        >
            {sidebarItems.map((item, index) => (
                <div
                    key={item.id}
                    className={`flex flex-col items-center p-2 cursor-pointer rounded-lg ${
                        activeIndex === index ? "bg-pink-500" : "hover:bg-gray-700"
                    }`}
                >
                    <span className="text-2xl">{item.icon}</span>
                    <p className="text-xs mt-1">{item.label}</p>
                </div>
            ))}
        </div>
    );
};

export default Sidebar;