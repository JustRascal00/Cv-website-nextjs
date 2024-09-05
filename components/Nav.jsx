"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import useGoogleTranslate from "@/components/useGoogleTranslate";
import { useState } from "react";

const links = [
  {
    name: "home",
    path: "/",
  },

  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];
const Nav = () => {
  const pathname = usePathname();
  const { toggleLanguage, currentLanguage } = useGoogleTranslate();
  const [translated, setTranslated] = useState(false);

  const handleTranslate = () => {
    toggleLanguage();
    setTranslated(!translated);
  };

  return (
    <nav className="flex gap-8 items-center">
      {links.map((link, index) => (
        <Link
          href={link.path}
          key={index}
          className={`${
            link.path === pathname && "text-accent border-b-2 border-accent"
          } capitalize font-medium hover:text-accent transition-all`}
        >
          {link.name}
        </Link>
      ))}
      <button
        onClick={handleTranslate}
        className="ml-auto text-black bg-gray-800 p-2 rounded-md"
      >
        {translated ? "Original" : "Translate"}
      </button>
      <div id="google_translate_element" style={{ display: "none" }}></div>
    </nav>
  );
};

export default Nav;
