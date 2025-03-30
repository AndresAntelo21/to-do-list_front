import { IoNotifications } from "react-icons/io5";

export const Navigator = () => {
    return (
        <nav className="w-full bg-primary h-30 p-4 flex items-center gap-4 justify-between ">
            <div className="flex gap-5 items-center">
                <div className="size-20 rounded-full overflow-hidden shadow-[0_0_50px_#0058CB]">
                    <img src="/image-test/test.png" alt="imagen de perfil" />
                </div>
                <div className="flex flex-col">
                    <span className="font-poppins text-lg font-semibold text-blue-400">Hello!</span>
                    <span className="font-poppins text-xl font-bold">Andres Antelo </span>
                </div>
            </div>
            <div className="">
                <IoNotifications className="text-4xl" />
                <span className="absolute top-9 right-1 rounded-full size-8 bg-blue-500 flex font-bold items-center justify-center text-base">+99</span>
            </div>
        </nav>
    )
}
