import { FaPlus } from "react-icons/fa6";

export const ActionBar = () => {
    return (
        <nav className="w-full h-20 bg-primary border-2 border-blue-800 fixed bottom-5 rounded-full flex items-center px-10">
            <div className="flex w-full">
                <div className="w-full flex gap-10">
                    <img src="/action-bar-icons/home.svg" alt="" />
                    <img src="/action-bar-icons/date.svg" alt="" />
                </div>
                <div className="w-full flex gap-10 justify-end">
                    <img src="/action-bar-icons/notes.svg" alt="" />
                    <img src="/action-bar-icons/user.svg" alt="" />
                </div>
            </div>
            <div className="absolute size-18 bg-blue-500 rounded-full left-1/2 transform -translate-x-1/2 -top-10 flex items-center justify-center text-4xl shadow-[0_0_30px_#0058CB]">
                <FaPlus />
            </div>

        </nav>
    )
}
