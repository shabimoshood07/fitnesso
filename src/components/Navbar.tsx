import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="h-[80px] fixed flex items-center top-0 w-screen">
      <nav className="flex justify-between items-center w-[95%] max-w-[1450px] mx-auto">
        <Link href="/">
          <Image
            src="https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e808ce7dc544553a7f1b1e4_Black.svg"
            height={90}
            width={90}
            alt="fitnesso"
          />
        </Link>
        <div className="border border-red-500 flex">
          <ul className=" justify-end items-center  hidden lg:flex">
            <li className="nav-links">
              <Link href="#">About</Link>
            </li>
            <li className="nav-links">
              <Link href="#">Free Workouts</Link>
            </li>
            <li className="nav-links">
              <Link href="#">Shop</Link>
            </li>
            <li className="nav-links">
              <Link href="#">
                <button className="py-[12px] pl-[20px] pr-[20px] bg-[#081158] font-[500] min-w-[160px] uppercase rounded-[6px] font-['Sato'] text-white tracking-[2px] flex items-center justify-start hover:duration-500 hover:pl-[40px] hover:-translate-y-[2px] hover:ease-out hover:opacity-80">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                  book a call
                </button>
              </Link>
            </li>
          </ul>
          <div className="flex justify-between items-center">
            <button className="p-[10px] lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 text-[#081158] font-extrabold"
              >
                <path
                  fillRule="evenodd"
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <button className="p-[10px] flex items-center justify-center">
              <svg
                xmlns="https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e80894f63c557f524ed96d1_Icon%20%2313.svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 text-[#081158]"
              >
                <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
              </svg>
              <span className="px-[6px] h-[18px] min-w[18px] text-[11px] font-[700] tracking-[0.5px] ">
                3
              </span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
