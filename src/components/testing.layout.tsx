import clsx from 'clsx';

// import components and custom hooks
import CustomVideoPlayer from "./custom.video.player.tsx";
import useContainer from "../_hooks/useContainer.ts";


export default function TestingLayout() {
    const {
        content,
        is_video_popup_open,
        set_video_popup_open,
        get_random_youtube_video,
        is_selected,
        set_selected,
        sidebar_menus,
        logo
    } = useContainer()

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
                                'border-r-4 border-[#FF3988]': is_selected('sidebar', idx) || content?.id === sidebar_menu?.id,
                                'text-white': !is_selected('sidebar', idx),
                            }
                        )}
                        onClick={() => set_selected({ type: 'sidebar', index: idx })} // Handle click for sidebar
                    >
                        <img
                            src={(is_selected('sidebar', idx) || content?.id === sidebar_menu?.id) ? sidebar_menu.activeIcon : sidebar_menu.icon}
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
                    <div className={'text-left text-white text-2xl'}>{content?.title}</div>
                    {/* Grid Content */}
                    <div className={'flex-1 h-full w-full'}>
                        <div className="flex-1 grid grid-cols-4 gap-3">
                            {content?.data && content?.data?.map((item, idx) => (
                                <div
                                    key={idx}
                                    className={clsx(
                                        'flex flex-col rounded-xl overflow-hidden',
                                        {
                                            'border-4 border-red-500': is_selected('grid', idx)
                                        }
                                    )}
                                >
                                    <img
                                        src={'https://picsum.photos/200/300?random=' + item.releaseYear + idx}
                                        alt={item.title}
                                        className={"h-48 object-cover rounded-md"}
                                    />
                                    {/*<div className="p-2">*/}
                                    {/*    <h2 className="text-lg font-semibold text-white">{item.title}</h2>*/}
                                    {/*    <p className="text-sm text-gray-300">{item.description}</p>*/}
                                    {/*    <span className="text-xs text-gray-400">{`Release Year: ${item.releaseYear}`}</span>*/}
                                    {/*</div>*/}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {
                is_video_popup_open &&
                <CustomVideoPlayer
                    videoUrl={get_random_youtube_video()}
                    onClose={() => set_video_popup_open(false)}
                />
            }
        </div>
    );
}