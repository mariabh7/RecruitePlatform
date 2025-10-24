import Image from "next/image";
import './globals.css'
import UserForm from "./(components)/apply/applicantForm";
import Main from "./(components)/main/main";

export default function Home() {
  return (
    <div className="flex bgs min-h-screen items-center  justify-center   font-sans dark:bg-black">
      <Main />
    </div>
  );
}
