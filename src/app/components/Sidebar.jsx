"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaUser, FaLaptopCode, FaEnvelope, FaHome } from "react-icons/fa";

export default function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", icon: <FaHome />, label: "Home" },
    { href: "/about", icon: <FaUser />, label: "About" },
    { href: "/portfolio", icon: <FaLaptopCode />, label: "Portfolio" },
    { href: "/contact", icon: <FaEnvelope />, label: "Contact" },
  ];

  return (
    <aside className="w-20 h-screen p-4 fixed right-0 top-0 flex flex-col items-center justify-center space-y-8 z-50">
      {navItems.map(({ href, icon, label }) => {
        const isActive = pathname === href;

        return (
          <Link
            key={href}
            href={href}
            className={`group relative flex items-center justify-center rounded-full p-4 transition-all
              ${
                isActive
                  ? "bg-green-500 text-gray-900"
                  : "bg-gray-600 text-gray-100 hover:bg-green-600 dark:hover:bg-green-700 dark:text-white"
              }`}
          >
            <span
              className={`text-2xl transition-all ${
                isActive ? "text-3xl" : ""
              }`}
            >
              {icon}
            </span>

            
            <span className="absolute right-full mr-3 w-max bg-green-600 text-white text-md font-medium px-5 py-3 rounded-l-3xl opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transform translate-x-2 transition duration-200 whitespace-nowrap pointer-events-none">
              {label}
            </span>
          </Link>
        );
      })}
    </aside>
  );
}
