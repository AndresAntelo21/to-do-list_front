import { Button } from "../ui/button"

export const ProgressDay = () => {
    return (
        <div className="flex w-full h-50 px-7 items-center gap-6 bg-primary rounded-2xl shadow-[0_0_80px_#0058CB] overflow-hidden">
            <div className="w-40 py-10 flex flex-col gap-10">
                <span className="font-poppins text-xl">Your today task almost done!</span>
                <Button className="bg-blue-500 w-40"><span className="text-xl font-poppins">View task</span></Button>
            </div>
            <div className="">
                {/* <img src="/notification/percentage.svg" alt="QUITAR ESTA IMAGEN" className="size-60" /> */}
            </div>
        </div>
    )
}
