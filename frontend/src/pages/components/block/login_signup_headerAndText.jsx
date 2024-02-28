export default function login_signup_headerAndText({ headerText, paraText }) {
  return (
    <>
      <h1 className="text-black text-[24px]">{headerText}</h1>
      <p className="text-[#334155] text-sm">{paraText}</p>
    </>
  );
}
