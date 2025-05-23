import Logo from "@/public/asstes/Logo.png";
import MyLogo from "@/public/asstes/MyLogo.png";
import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

export function NavbarDemo({children}) {
  return (
    <div className=" w-full px-4 md:mx-0 my-1">
      <div className="max-w-7xl mx-auto ">
        <div className="flex justify-between items-center">
          <Image src={Logo} alt="logo" width={100} height={100} />
          {children}
          {/* <div className="hidden sm:block">
            <ul className="flex items-center gap-4 text-lg font-medium">
              <Link href="/">Home</Link>
              <Link href="/">About</Link>
              <Link href="/">Contact</Link>
            </ul>
          </div> */}
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
