const TVPage = () => {
    const tvShows = [
        { id: 1, title: "TV Show 1", thumbnail: "link-to-thumbnail-1" },
        { id: 2, title: "TV Show 2", thumbnail: "link-to-thumbnail-2" },
        { id: 3, title: "TV Show 3", thumbnail: "link-to-thumbnail-3" },
        // Add more shows...
    ];

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">TV Shows</h1>
            <div className="grid grid-cols-4 gap-4">
                {tvShows.map((show) => (
                    <div
                        key={show.id}
                        className="bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg"
                    >
                        <img
                            src={show.thumbnail}
                            alt={show.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-2">
                            <h2 className="text-lg font-semibold">{show.title}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TVPage;