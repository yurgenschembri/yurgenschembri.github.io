import Image from "next/image";
import Link from "next/link";

export default function AppNav() {
  return (
    <div className="fixed h-0 w-full">
      <div className="flex justify-between items-center p-6 h-16 bg-onyx shadow-md">
        <div className="flex flex-row items-center">
          <Link
            href="/"
            className={
              "w-max h-max flex items-center justify-center gap-2 rounded-md p-2 text-sm font-medium"
            }
          >
            <Image src="img/logo.png" width={40} height={40} alt={"Logo"} />
            <span className="inline-block text-wheat">@yurgenschembri</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
