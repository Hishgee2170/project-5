import Logo from "./block/logo";
export default function SignUpSelectValut() {
  return (
    <div className="flex flex-col items-center gap-[40px]">
      <Logo />
      <div className="flex justify-center items-center">
        <div className="flex flex-col items-center">
          <div className="w-[24px] h-[24px] rounded-[50%] bg-[#0166FF] flex items-center justify-center text-[#fff]">
            1
          </div>
          <div className="text-[14px]">Currency</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-[24px] h-[24px] rounded-[50%] bg-[#0166FF] flex items-center justify-center text-[#fff]">
            2
          </div>
          <div className="text-[14px]">Balance</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-[24px] h-[24px] rounded-[50%] bg-[#0166FF] flex items-center justify-center text-[#fff]">
            3
          </div>
          <div className="text-[14px]">Finish</div>
        </div>
      </div>
    </div>
  );
}
