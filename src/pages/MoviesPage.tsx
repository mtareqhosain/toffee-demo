const MoviesPage = () => {
    const movies = [
        { id: 1, title: "Movie 1", thumbnail: "link-to-thumbnail-1" },
        { id: 2, title: "Movie 2", thumbnail: "link-to-thumbnail-2" },
        { id: 3, title: "Movie 3", thumbnail: "link-to-thumbnail-3" },
        // Add more movies...
    ];

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Movies</h1>
            <div className="grid grid-cols-4 gap-4">
                {movies.map((movie) => (
                    <div
                        key={movie.id}
                        className="bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg"
                    >
                        <img
                            src={movie.thumbnail}
                            alt={movie.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-2">
                            <h2 className="text-lg font-semibold">{movie.title}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MoviesPage;