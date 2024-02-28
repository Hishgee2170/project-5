import Signup from "./block/signup_login_Button";
import Logo from "./block/logo";
import AskQuestion from "./block/hava_a_account";
import HeaderTexts from "./block/login_signup_headerAndText";
import Link from "next/link";
import { useState, useEffect } from "react";
export default function login() {
  const API_DATABASE = "http://localhost:2000/";
  const [unen, setUnen] = useState(false);
  const [account, setAccount] = useState({
    email: "",
    password: "",
  });
  const [datas, setDatas] = useState([]);
  const checkUser = async () => {
    try {
      const response = await fetch(`${API_DATABASE}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const newData = await response.json();
      setDatas(newData);
    } catch (error) {
      console.log("Error:", error);
    }
  };
  useEffect(() => {
    checkUser();
  }, []);
  function checkAccount() {
    datas.map((user) => {
      if (user.email === account.email && user.password === account.password) {
        setUnen(true);
      }
    });
  }
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
            <input
              value={account.password}
              onChange={(event) =>
                setAccount({ ...account, password: event.target.value })
              }
              className="w-[287px] h-[48px] px-[20px] rounded-lg border-[1px] border-[#D1D5DB] bg-[#F3F4F6]"
              placeholder="Password"
              type="text"
            />
            {unen ? (
              <Link href="./components/SignUpLoading">
                <button className="bg-[#0166FF] w-[287px] h-[48px] rounded-[20px] text-[#fff]">
                  Login
                </button>
              </Link>
            ) : (
              <button
                onClick={checkAccount}
                className="bg-[#0166FF] w-[287px] h-[48px] rounded-[20px] text-[#fff]"
              >
                Login
              </button>
            )}
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
