import Signup from "./block/signup_login_Button";
import Logo from "./block/logo";
import AskQuestion from "./block/hava_a_account";
import HeaderTexts from "./block/login_signup_headerAndText";
import Link from "next/link";
export default function signup() {
  return (
    <div className="flex ">
      <div className="w-[50%] h-[100vh] bg-[#fff] flex justify-center items-center ">
        <div className="flex flex-col items-center justify-center gap-[40px]">
          <Logo />
          <HeaderTexts
            headerText={"Create Geld account"}
            paraText={"Sign up below to create your Wallet account"}
          />
          <div className="flex flex-col  items-center "></div>
          <div className="flex flex-col gap-[16px]">
            <input
              className="w-[287px] h-[48px] px-[20px] rounded-lg border-[1px] border-[#D1D5DB] bg-[#F3F4F6]"
              placeholder="Name"
              type="text"
            />
            <input
              className="w-[287px] h-[48px] px-[20px] rounded-lg border-[1px] border-[#D1D5DB] bg-[#F3F4F6]"
              placeholder="Email"
              type="text"
            />
            <input
              className="w-[287px] h-[48px] px-[20px] rounded-lg border-[1px] border-[#D1D5DB] bg-[#F3F4F6]"
              placeholder="Password"
              type="text"
            />
            <input
              className="w-[287px] h-[48px] px-[20px] rounded-lg border-[1px] border-[#D1D5DB] bg-[#F3F4F6]"
              placeholder="Re-Password"
              type="text"
            />
            <Link href="./SignUpLoading">
              <button className="bg-[#0166FF] w-[287px] h-[48px] rounded-[20px] text-[#fff]">
                Sign up
              </button>
            </Link>
          </div>
          <div className="flex items-center">
            <AskQuestion askQuastionText={"Already have account?"} />
            <Link href="/">
              <Signup signup_login_Button_text={"Login"} />
            </Link>
          </div>
        </div>
      </div>
      <div className="w-[50%] h-[100vh] bg-[#0166FF]"></div>
    </div>
  );
}
