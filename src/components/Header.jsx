"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <header className="bg-[#1c1c28] shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="flex items-center space-x-4 ml-8">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="nft-logo"
              width={106}
              height={35}
              className="block dark:hidden"
            />
          </Link>
          <Link href="/">
            <Image
              src="/images/logo/NaijaChain.png"
              alt="nft-logo"
              width={106}
              height={35}
              className="hidden dark:block"
            />
          </Link>
          <span className="border-l border-gray-400 h-6"></span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden xl:flex space-x-6 mr-6">
          <Link
            href="/"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600"
          >
            About
          </Link>
          <Link
            href="#"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600"
          >
            Explore
          </Link>
          <Link
            href="/blog"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600"
          >
            Contact
          </Link>
        </nav>

        {/* Search Box, Wallet Button, Notification, Dark Mode Toggle */}
        <div className="hidden lg:flex items-center space-x-6 mr-12">
          <form className="relative">
            <input
              type="search"
              placeholder="Search Here"
              className="border border-gray-300 rounded-md px-3 py-1 dark:bg-gray-700 dark:text-white"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M9.539 15.23q-2.398 0-4.065-1.666Q3.808 11.899 3.808 9.5t1.666-4.065T9.539 3.77t4.064 1.666T15.269 9.5q0 1.042-.369 2.017t-.97 1.668l5.909 5.907q.14.14.15.345q.009.203-.15.363q-.16.16-.354.16t-.354-.16l-5.908-5.908q-.75.639-1.725.989t-1.96.35m0-1q1.99 0 3.361-1.37q1.37-1.37 1.37-3.361T12.9 6.14T9.54 4.77q-1.991 0-3.361 1.37T4.808 9.5t1.37 3.36t3.36 1.37"
                />
              </svg>
            </button>
          </form>

          <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
            Connect Wallet
          </button>

          {/* Notification Bell */}
          <Link href="/activity" className="relative flex items-center">
            <div className="w-10 h-10 flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.51 5.22c-.621.168-1.201.431-1.605.795c-1.103.995-1.552 2.343-1.552 4.773c0 1.732-.986 3.372-1.696 4.434c-.154.232-.202.453-.193.586c.004.06.018.088.024.098c.004.007.016.026.064.052c.692.37 1.736.64 2.943.811A26 26 0 0 0 12 17a1 1 0 1 1 0 2c-1.128 0-2.484-.065-3.786-.25c-1.282-.183-2.603-.493-3.605-1.028c-.737-.394-1.093-1.08-1.14-1.779c-.046-.659.177-1.31.525-1.831c.717-1.074 1.359-2.259 1.359-3.324c0-2.661.492-4.707 2.213-6.258c.725-.654 1.636-1.027 2.419-1.24A8 8 0 0 1 12 3a1 1 0 1 1 0 2c-.306 0-.876.052-1.49.22"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs px-1 rounded-full">
              6
            </span>
          </Link>

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex items-center justify-center w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full"
          >
            {theme === "dark" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 15q1.25 0 2.125-.875T15 12t-.875-2.125T12 9t-2.125.875T9 12t.875 2.125T12 15m0 1q-1.671 0-2.835-1.164Q8 13.67 8 12t1.165-2.835T12 8t2.836 1.165T16 12t-1.164 2.836T12 16m-7-3.5H1.5v-1H5zm17.5 0H19v-1h3.5zM11.5 5V1.5h1V5zm0 17.5V19h1v3.5zM6.746 7.404l-2.16-2.098l.695-.745l2.111 2.135zM18.72 19.439l-2.117-2.141l.652-.702l2.16 2.098zM16.596 6.745l2.098-2.16l.745.695l-2.135 2.111zM4.562 18.72l2.14-2.117l.664.652l-2.08 2.179zM12 12" />
              </svg>
            ) : (
              <span>🌙</span>
            )}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="xl:hidden text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="xl:hidden bg-gray-100 dark:bg-gray-800 py-4 px-6 space-y-4">
          <Link href="/" className="block">
            Home
          </Link>
          <Link href="/about" className="block">
            About
          </Link>
          <Link href="#" className="block">
            Explore
          </Link>
          <Link href="/blog" className="block">
            Blog
          </Link>
          <Link href="/contact" className="block">
            Contact
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
