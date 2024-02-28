import Signup from "./block/signup_login_Button";
import Logo from "./block/logo";
import AskQuestion from "./block/hava_a_account";
import HeaderTexts from "./block/login_signup_headerAndText";
import Link from "next/link";
import { useState } from "react";
import { newUserDataCheck } from "@/pages/user/signUpUserDataCheck";
export default function signup() {
  const checker = newUserDataCheck;
  const API_DATABASE = "http://localhost:2000/";
  const [datas, setDatas] = useState([]);
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
      setDatas(newData);
    } catch (error) {
      console.log("Error:", error);
    }
  };
  const [unen, setUnen] = useState(false);
  const addAccount = async () => {
    console.log("New account:", newAccount);
    let isValid = false;
    isValid = await checker.isValid(newAccount);
    if (isValid && newAccount.password === newAccount.rePassword) {
      createAccount();
      setUnen(true);
    } else {
      console.log("Invalid data or passwords do not match");
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
            <input
              value={newAccount.name}
              onChange={(event) =>
                setNewAccount({ ...newAccount, name: event.target.value })
              }
              className="w-[287px] h-[48px] px-[20px] rounded-lg border-[1px] border-[#D1D5DB] bg-[#F3F4F6]"
              placeholder="Name"
              type="text"
            />
            <input
              value={newAccount.email}
              onChange={(event) =>
                setNewAccount({ ...newAccount, email: event.target.value })
              }
              className="w-[287px] h-[48px] px-[20px] rounded-lg border-[1px] border-[#D1D5DB] bg-[#F3F4F6]"
              placeholder="Email"
              type="text"
            />
            <input
              value={newAccount.password}
              onChange={(event) =>
                setNewAccount({ ...newAccount, password: event.target.value })
              }
              className="w-[287px] h-[48px] px-[20px] rounded-lg border-[1px] border-[#D1D5DB] bg-[#F3F4F6]"
              placeholder="Password"
              type="text"
            />
            <input
              value={newAccount.rePassword}
              onChange={(event) =>
                setNewAccount({ ...newAccount, rePassword: event.target.value })
              }
              className="w-[287px] h-[48px] px-[20px] rounded-lg border-[1px] border-[#D1D5DB] bg-[#F3F4F6]"
              placeholder="Re-Password"
              type="text"
            />

            {unen ? (
              <Link href="./SignUpLoading">
                <button className="bg-[#0166FF] w-[287px] h-[48px] rounded-[20px] text-[#fff]">
                  Sign up
                </button>
              </Link>
            ) : (
              <button
                onClick={addAccount}
                className="bg-[#0166FF] w-[287px] h-[48px] rounded-[20px] text-[#fff]"
              >
                Sign up
              </button>
            )}
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
