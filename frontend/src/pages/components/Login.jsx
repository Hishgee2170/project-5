import Signup from "./block/signup_login_Button";
import Logo from "./block/logo";
import AskQuestion from "./block/hava_a_account";
import HeaderTexts from "./block/login_signup_headerAndText";
import Link from "next/link";
export default function login() {
  return (
    <div className="flex ">
      <div className="w-[50%] h-[100vh] bg-[#fff] flex justify-center items-center ">
        <div className="flex flex-col items-center justify-center gap-[40px]">
          <Logo />
          <HeaderTexts
            headerText={"Welcome back"}
            paraText={"Welcome back,Please enter your details"}
          />
          <div className="flex flex-col  items-center "></div>
          <div className="flex flex-col gap-[16px]">
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
            <button className="bg-[#0166FF] h-[48px] rounded-[20px] text-[#fff]">
              Login
            </button>
          </div>
          <div className="flex items-center">
            <AskQuestion askQuastionText={"Don’t have account?"} />
            <Link href="./components/SignUp">
              <Signup signup_login_Button_text={"Sign up"} />
            </Link>
          </div>
        </div>
      </div>
      <div className="w-[50%] h-[100vh] bg-[#0166FF]"></div>
    </div>
  );
}
