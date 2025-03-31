
export const InProgressCard = () => {
    return (
        <div className="bg-blue-950/60 w-full h-45 rounded-2xl p-4 overflow-hidden">
            <div className="flex justify-between items-center">
                <h1 className="font-semibold font-poppins text-2xl text-white/40">Office Work</h1>
                <div className="size-10 bg-gray-600/50 rounded-xl items-center justify-center flex">
                    <img src="/test/test-icon.svg" alt="" className="size-8" />
                </div>
            </div>
            <p className="line-clamp-3 font-poppins w-70">Lorem ipsum dolor sit amet consectetur adipisicing elit. A rem illum, voluptas architecto iure autem impedit quibusdam ipsam soluta commodi incidunt nisi ipsum voluptatum, maiores cupiditate voluptates iste minima mollitia.</p>
            <div className="w-full h-3 bg-gray-500/40 rounded-3xl mt-5 z-3"></div>
        </div>
    )
}
