
export const Home = () => {
  return (
    <div className="relative h-[100svh] w-full overflow-hidden">
      <div className="absolute -top-20 -left-0 w-96 h-[668px] bg-primary rounded-full blur-3xl"></div>
      <div className="absolute -bottom-50 -right-30 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      <div className="relative flex flex-col items-center justify-center h-full gap-2">
        <img src="/logo/personal-logo.svg" alt="Logo Andres Antelo Figueroa" />
        <h1 className="font-poppins font-bold text-5xl">TO-DO LIST</h1>
      </div>
    </div>
  );
};
