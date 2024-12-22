import { useEffect, useState } from 'react';
import clsx from 'clsx';

// import icons
import { sidebar_menus, logo, movies, series } from '../assets';

export default function TestingLayout() {
    const [selected, setSelected] = useState({ type: 'sidebar', index: 0 }); // Sidebar or grid focus
    const [content, setContent] = useState(movies); // Default to movies

    const handleKeyDown = (event: KeyboardEvent) => {
        setSelected((prev) => {
            const { type, index } = prev;
            const gridItems = content.length; // Dynamic grid item count
            const gridColumns = 4; // Number of columns in the grid

            if (type === 'sidebar') {
                if (event.key === 'ArrowDown') return { type: 'sidebar', index: Math.min(index + 1, 1) }; // Movies (0) and Series (1)
                if (event.key === 'ArrowUp') return { type: 'sidebar', index: Math.max(index - 1, 0) };
                if (event.key === 'ArrowRight') return { type: 'grid', index: 0 };
            } else if (type === 'grid') {
                if (event.key === 'ArrowLeft') {
                    if (index % gridColumns === 0) return { type: 'sidebar', index: selected.index }; // Back to sidebar
                    return { type: 'grid', index: Math.max(index - 1, 0) };
                }
                if (event.key === 'ArrowRight') return { type: 'grid', index: Math.min(index + 1, gridItems - 1) };
                if (event.key === 'ArrowUp') {
                    if (index < gridColumns) return prev; // Prevent moving up from the first row
                    return { type: 'grid', index: index - gridColumns };
                }
                if (event.key === 'ArrowDown') {
                    const nextIndex = index + gridColumns;
                    if (nextIndex >= gridItems) return prev; // Prevent moving down beyond the last row
                    return { type: 'grid', index: nextIndex };
                }
            }

            return prev;
        });
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [content]);

    useEffect(() => {
        // Update content and ensure sidebar and grid content match
        if (selected.type === 'sidebar') {
            if (selected.index === 0 && content !== movies) setContent(movies);
            if (selected.index === 1 && content !== series) setContent(series);
        }
    }, [content, selected]);

    const isSelected = (type: string, idx: number) => selected.type === type && selected.index === idx;

    return (
        <div className={'bg-gradient-to-r from-[#000000] to-[#3E003B] w-full h-full flex'}>
            {/* Sidebar */}
            <div className={'w-[74px] h-dvh fixed flex flex-col gap-3 justify-center items-center bg-gradient-to-r from-[#130016] to-[#130016]/10'}>
                {sidebar_menus.map((sidebar_menu, idx) => (
                    <div
                        key={sidebar_menu.id}
                        className={clsx(
                            'px-2 cursor-pointer w-full flex justify-center items-center h-6',
                            {
                                'border-r-4 border-[#FF3988]': isSelected('sidebar', idx),
                                'text-white': !isSelected('sidebar', idx),
                            }
                        )}
                        onClick={() => setSelected({ type: 'sidebar', index: idx })} // Handle click for sidebar
                    >
                        <img
                            src={isSelected('sidebar', idx) ? sidebar_menu.activeIcon : sidebar_menu.icon}
                            alt={sidebar_menu.id}
                        />
                    </div>
                ))}
            </div>
            {/* Main Content */}
            <div className={'flex flex-col py-8 px-10 w-full ml-[74px]'}>
                {/* Header */}
                <div className={'flex justify-end'}>
                    <div className="text-white text-xl font-bold">
                        <img src={logo} alt={'toffee_logo'} />
                    </div>
                </div>
                <div className={'flex flex-col gap-3 flex-1 w-full h-full'}>
                    <div className={'text-left text-white text-2xl'}>{selected.index === 0 ? 'Movies' : 'Series'}</div>
                    {/* Grid Content */}
                    <div className={'flex-1 h-full w-full'}>
                        <div className="flex-1 grid grid-cols-4 gap-3">
                            {content.map((item, idx) => (
                                <div
                                    key={idx}
                                    className={`flex flex-col p-4 rounded border ${
                                        isSelected('grid', idx) ? 'bg-gray-600' : 'bg-gray-800'
                                    }`}
                                >
                                    <img
                                        src={item.thumbnail}
                                        alt={item.title}
                                        className="h-32 object-cover rounded-t-md"
                                    />
                                    <div className="p-2">
                                        <h2 className="text-lg font-semibold text-white">{item.title}</h2>
                                        <p className="text-sm text-gray-300">{item.description}</p>
                                        <span className="text-xs text-gray-400">{`Release Year: ${item.releaseYear}`}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}