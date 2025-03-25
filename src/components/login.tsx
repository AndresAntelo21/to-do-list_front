import { Link } from "react-router-dom";
export const Login = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-[100svh] overflow-hidden">
      <div className="bg-primary w-96 h-[522px] rounded-full blur-3xl absolute top-10 -left-40 -z-10"></div>
      <div className="bg-primary w-96 h-96 rounded-full blur-3xl absolute -bottom-30 -right-40 -z-10"></div>
      <div className="flex items-center flex-col gap-30">
        <div className="flex items-center flex-col ">
          <img src="/logo/personal-logo.svg" alt="Logo Andres Antelo Figueroa" />
          <h1 className="font-poppins text-5xl text-center font-bold">TO-DO LIST</h1>
        </div>
        {/* aqui es la parte de abajo */}
        <div className="flex items-center flex-col gap-30">
          <div className="w-80">
            <p className="font-poppins text-center text-lg">Stay organized and boost your productivity with our simple and intuitive <strong>To-Do List</strong></p>
          </div>
          <div className="">
            <Link to="/" className="p-4 bg-secondary w-70 h-16 rounded-2xl flex items-center justify-center shadow-[0_0_40px_rgba(255,255,255,0.4)]" >
              <span className=" absolute font-poppins text-xl font-bold tracking-[7px] text-white">START</span>
              <div className="flex justify-end w-full">
                <img src="/utils/arrow.svg" alt="" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
