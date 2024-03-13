import SignupToLogin from "./block/signup_login_Button";
import Logo from "./block/logo";
import AskQuestion from "./block/hava_a_account";
import Link from "next/link";
import HeaderTexts from "./block/login_signup_headerAndText";
import { useState } from "react";
import { useRouter } from "next/router";
import { SignUpUserDataCheck } from "@/pages/components/user/SignUpUserDataCheck";
export default function signup() {
  const { route, push } = useRouter();
  const checker = SignUpUserDataCheck;
  const API_DATABASE = "http://localhost:2000/signUp";
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);
  const [matchPassword, setMatchPassword] = useState(true);
  const [wrongData, setWrongData] = useState(true);
  const [emailRevise, setEmailRevise] = useState(true);
  const [newAccount, setNewAccount] = useState({
    name: "",
    email: "",
    password: "",
    rePassword: "",
  });
  const createAccount = async () => {
    try {
      const response = await fetch(`${API_DATABASE}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newAccount),
      });
      const newData = await response.json();
      console.log("newData:", newData);
      if (newData) {
        push("./signUpSelectValut");
      } else {
        setEmailRevise(newData);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };
  const addAccount = async () => {
    console.log("New account:", newAccount);
    let isValid = false;
    isValid = await checker.isValid(newAccount);
    if (isValid) {
      if (newAccount.password === newAccount.rePassword) {
        createAccount();
        setMatchPassword(true);
      } else {
        setMatchPassword(false);
        console.log("passwords do not match");
      }
    } else {
      setWrongData(false);
      console.log("Invalid data ");
    }
  };

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
            <div
              style={wrongData ? { display: "none" } : { display: "flex" }}
              className="text-red-500 text-[20px]"
            >
              Wrong data
            </div>
            <input
              value={newAccount.name}
              onChange={(event) =>
                setNewAccount({ ...newAccount, name: event.target.value })
              }
              className="w-[287px] h-[48px] px-[20px] rounded-lg border-[1px] border-[#D1D5DB] bg-[#F3F4F6]"
              placeholder="Name"
              type="text"
            />
            <div className="flex flex-col">
              <input
                value={newAccount.email}
                onChange={(event) =>
                  setNewAccount({ ...newAccount, email: event.target.value })
                }
                className="w-[287px] h-[48px] px-[20px] rounded-lg border-[1px] border-[#D1D5DB] bg-[#F3F4F6]"
                placeholder="Email"
                type="text"
              />
              <div
                style={emailRevise ? { display: "none" } : { display: "flex" }}
                className="text-red-500"
              >
                Email already registred
              </div>
            </div>
            <div className="flex gap-[5px]">
              <input
                type={showPassword ? "text" : "password"}
                value={newAccount.password}
                onChange={(event) =>
                  setNewAccount({
                    ...newAccount,
                    password: event.target.value,
                  })
                }
                className="w-[287px] h-[48px] px-[20px] rounded-lg border-[1px] border-[#D1D5DB] bg-[#F3F4F6]"
                placeholder="Re-Password"
              />
              <div
                className="flex justify-center items-center hover:cursor-pointer hover:bg-slate-100"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </div>
            </div>
            <div className="flex gap-[5px]">
              <div>
                <input
                  type={showRePassword ? "text" : "password"}
                  value={newAccount.rePassword}
                  onChange={(event) =>
                    setNewAccount({
                      ...newAccount,
                      rePassword: event.target.value,
                    })
                  }
                  className="w-[287px] h-[48px] px-[20px] rounded-lg border-[1px] border-[#D1D5DB] bg-[#F3F4F6]"
                  placeholder="Re-Password"
                />
                <div
                  style={
                    matchPassword ? { display: "none" } : { display: "flex" }
                  }
                  className="text-red-500"
                >
                  Password not matched
                </div>
              </div>

              <div
                className="flex justify-center items-center hover:cursor-pointer hover:bg-slate-100"
                onClick={() => setShowRePassword(!showRePassword)}
              >
                {showRePassword ? "Hide" : "Show"}
              </div>
            </div>

            <button
              onClick={addAccount}
              className="bg-[#0166FF] w-[287px] h-[48px] rounded-[20px] text-[#fff]"
            >
              Sign up
            </button>
          </div>
          <div className="flex items-center">
            <AskQuestion askQuastionText={"Already have account?"} />
            <Link href="/">
              <SignupToLogin signup_login_Button_text={"Login"} />
            </Link>
          </div>
        </div>
      </div>
      <div className="w-[50%] h-[100vh] bg-[#0166FF]"></div>
    </div>
  );
}
