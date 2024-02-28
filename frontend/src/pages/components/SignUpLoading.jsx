import Logo from "./block/logo";
export default function SignUpLoading() {
  return (
    <div className=" h-[100vh] flex flex-col justify-center items-center gap-[40px]">
      <Logo />
      <div className="flex flex-col items-center">
        <div className="w-[32px] h-[32px] rounded-[50%] border-[3px]"></div>
        <p>loading...</p>
      </div>
    </div>
  );
}
