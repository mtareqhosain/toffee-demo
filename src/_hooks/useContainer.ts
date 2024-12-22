import {useCallback, useEffect, useState} from "react";
import {menuwise_response, sidebar_menus, logo} from "../assets";

type TData = {
    title: string
    description: string
    releaseYear: number
    thumbnail: string
}

type TContent = {
    id: 'movies' | 'series'
    title: string
    data: TData[]
}

export default function useContainer() {
    const [selected, set_selected] = useState({ type: 'sidebar', index: 0 }) // Sidebar or grid focus
    const [content, set_content] = useState<TContent>(menuwise_response[0]) // Default to movies

    const [is_video_popup_open, set_video_popup_open] = useState(false)

    const handleKeyDown = useCallback((event: KeyboardEvent) => {
        console.log({ky: event.key, selected: selected.type, index: selected.index})
        if(!is_video_popup_open) {
            set_selected((prev) => {
                const { type, index } = prev;
                const gridItems = content?.data?.length ?? 0; // Dynamic grid item count
                const gridColumns = 4; // Number of columns in the grid

                if (type === 'sidebar') {
                    if (event.key === 'ArrowDown') return { type: 'sidebar', index: Math.min(index + 1, 1) }; // Movies (0) and Series (1)
                    if (event.key === 'ArrowUp') return { type: 'sidebar', index: Math.max(index - 1, 0) };
                    if (event.key === 'ArrowRight') return { type: 'grid', index: 0 };
                } else if (type === 'grid') {
                    if (event.key === 'ArrowLeft') {
                        console.log('clicked left', index, gridColumns)
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
            })
        }
        if(selected.type === 'grid' && event.key === 'Enter') {
            console.log('Enter key pressed on grid item', selected.index)
            set_video_popup_open(true)
        }

        if(selected.type === 'grid' && event.key === 'Escape') {
            set_video_popup_open(false)
        }
    }, [])

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [handleKeyDown])

    useEffect(() => {
        // Update content and ensure sidebar and grid content match
        if (selected.type === 'sidebar') {
            set_content(menuwise_response[selected.index]);
        }
    }, [selected])

    const is_selected = (type: string, idx: number) => selected.type === type && selected.index === idx;

    const get_random_youtube_video = () => {
        const videoIds = [
            "yiaMJbEXMDo", // Example YouTube video ID
            "qyIgkTS0Ods",
            "ZjLzZ7iWrkc",
            "d7Vs1DUbXnE",
            "WCJ170BVMJI"
        ];

        const randomIndex = Math.floor(Math.random() * videoIds.length);
        const randomVideoId = videoIds[randomIndex];

        return `https://www.youtube.com/watch?v=${randomVideoId}`;
    }

    return {
        is_selected,
        set_selected,
        is_video_popup_open,
        set_video_popup_open,
        content,
        get_random_youtube_video,
        sidebar_menus,
        logo
    }
}