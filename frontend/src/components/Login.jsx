import Signup from "./block/signup_login_Button";
import Logo from "./block/logo";
import AskQuestion from "./block/hava_a_account";
import HeaderTexts from "./block/login_signup_headerAndText";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const API_DATABASE = "http://localhost:2000/signIn";
  const { route, push } = useRouter();
  const [account, setAccount] = useState({
    email: "",
    password: "",
  });
  const checkUser = async () => {
    try {
      const response = await fetch(`${API_DATABASE}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(account),
      });
      const newData = await response.json();
      console.log("newData:", newData);
      if (newData) push("./components/SignUpLoading");
    } catch (error) {
      console.log("Error:", error);
    }
  };

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
              value={account.email}
              onChange={(event) =>
                setAccount({ ...account, email: event.target.value })
              }
              className="w-[287px] h-[48px] px-[20px] rounded-lg border-[1px] border-[#D1D5DB] bg-[#F3F4F6]"
              placeholder="Email"
              type="text"
            />
            <div className="flex gap-[5px]">
              <input
                value={account.password}
                onChange={(event) =>
                  setAccount({ ...account, password: event.target.value })
                }
                className="w-[287px] h-[48px] px-[20px] rounded-lg border-[1px] border-[#D1D5DB] bg-[#F3F4F6]"
                placeholder="Password"
                type={showPassword ? "text" : "password"}
              />
              <div
                className="flex justify-center items-center hover:cursor-pointer hover:bg-slate-100"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </div>
            </div>

            <button
              onClick={checkUser}
              className="bg-[#0166FF] w-[287px] h-[48px] rounded-[20px] text-[#fff]"
            >
              Login
            </button>
          </div>
          <div className="flex items-center">
            <AskQuestion askQuastionText={"Don’t have account?"} />
            <Link href="sign-up">
              <Signup signup_login_Button_text={"Sign up"} />
            </Link>
          </div>
        </div>
      </div>
      <div className="w-[50%] h-[100vh] bg-[#0166FF]"></div>
    </div>
  );
}
