import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import Navitems from "./Navitems";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <div className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-36">
          <Image
            src="/assets/images/logo.svg"
            width={70}
            height={38}
            alt="Event Management Logo"
          />
        </Link>

        <div>
          <nav className="md:flex-between hidden w-full max-w-xs">
          <Navitems/>
          </nav>
        </div>
        <div className="flex w-32 justify-end gap-3">
          <div>
            <MobileNav/>
          </div>
          <Button className="rounded-full" size="lg">
            <Link href="/sign-in">Login</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
