import { useEffect } from 'react';
import ReactPlayer from 'react-player/youtube';

type TVideoPlayerProps = {
    videoUrl: string;  // URL for the video to be played
    onClose: () => void;  // Function to handle closing the popup
}

export default function CustomVideoPlayer({ videoUrl, onClose }: TVideoPlayerProps) {
    // Effect to handle closing the popup when 'Escape' is pressed
    useEffect(() => {
        const handleEscKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose(); // Close the popup when Escape is pressed
            }
        };

        document.addEventListener('keydown', handleEscKey);

        // Clean up the event listener when the component is unmounted
        return () => {
            document.removeEventListener('keydown', handleEscKey);
        };
    }, [onClose]);

    return (
        <div className={"fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"}>
            <div className={"relative w-full max-w-4xl bg-white rounded-lg shadow-lg h-[calc(80dvh)]"}>
                <button
                    className={"absolute top-2 right-2 h-10 w-10 text-white bg-red-600 hover:bg-red-800 rounded-full p-2"}
                    onClick={onClose}
                >
                    X
                </button>
                <ReactPlayer
                    url={videoUrl}
                    controls
                    width="100%"
                    height="100%"
                />
            </div>
        </div>
    )
}