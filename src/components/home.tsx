export const Home = () => {
  return (
    <div className="w-full h-[100svh] flex flex-col items-center justify-center gap-20 overflow-hidden ">
      <div className="relative">
        <div className="size-80 bg-blue-950 rounded-full absolute top-50 -left-10 -z-100 blur-3xl"></div>
        <div className="size-80 bg-blue-950 rounded-full absolute -bottom-10 -right-10 -z-100 blur-2xl"></div>
      </div>
        <h1 className="text-4xl font-bold tracking-widest uppercase">To-Do List</h1>
        <div className="text-center px-4 font-poppins">
          <p className="text-base">Stay organized and boost your productivity with our simple and intuitive <strong>To-Do List</strong></p>
        </div>
        <a 
        href="" 
        className=" inline-block bg-blue-900 w-60 p-4 rounded-2xl text-center font-poppins font-bold tracking-widest shadow-[0_0_40px_rgba(255,255,255,0.4)]">
          START
        </a>
    </div>
  );
};
