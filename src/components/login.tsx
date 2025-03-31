import { Button } from "./ui/button"

export const Login = () => {
    return (
        <div className=" relative flex flex-col gap-40 items-center justify-center h-[100svh] overflow-hidden">
            <div className="relative" >
                <div className="absolute size-96 -z-10 blur-3xl bg-blue-700 rounded-full -bottom-60 -right-10"></div>
                <div className="absolute size-96 -z-10 blur-3xl bg-blue-700 rounded-full  top-50 -left-20"></div>
            </div>
            <div>
                <h1 className="text-5xl font-poppins font-semibold">TO-DO LIST</h1>
            </div>
            <div className="flex flex-col gap-4">
                <Button className="w-80 p-7 bg-white flex gap-7 rounded-3xl hover:bg-white">
                    <img src="/icons/google.svg" alt="logo de google" className="size-8" />
                    <span className="text-gray-800 font-poppins text-lg">Login with Google</span>
                </Button>

                <Button className="w-80 p-7 bg-black flex gap-7 rounded-3xl hover:bg-black">
                    <img src="/icons/github.svg" alt="logo de github" className="size-8" />
                    <span className="text-white-800 font-poppins text-lg ">Login with GitHub</span>
                </Button>
            </div>
        </div>
    )
}
