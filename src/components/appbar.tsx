const AppBar = () => {
    return (
        <div className="flex items-center justify-between bg-gray-800 text-white p-4 sticky top-0 z-10">
            <div className="text-2xl font-bold">My App</div>
            <input
                type="text"
                placeholder="Search..."
                className="bg-gray-700 text-sm text-white p-2 rounded-lg outline-none"
            />
            <div className="flex items-center space-x-4">
                <button className="bg-pink-500 text-white px-4 py-2 rounded-lg">
                    Sign In
                </button>
            </div>
        </div>
    );
};

export default AppBar;