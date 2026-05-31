'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const [search, setSearch] = useState('');
  const navigate = useRouter();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (search.trim()) {
        navigate.push(`/?search=${search}`);
      } else {
        navigate.push(`/`);
      }
    }, 700);

    return () => clearTimeout(timer);
  }, [search, navigate]);

  return (
    <header className={`text-center pt-[10px] pb-1 text-white rounded-br-[20px] flex justify-between items-center gap-5 px-[15px] fixed top-0 left-0 w-full z-50 transition-all duration-300 print:hidden ${
      scrolled
        ? "bg-black/10 backdrop-blur-md shadow-lg"
        : "bg-gradient-to-b from-indigo-950 via-black to-purple-950"
    }`}>

      <div
        className="min-w-[100px]"
        onClick={() => navigate.push('/')}
      >
        <Image src="/logo/ask.png" width={100} height={50} alt="logo" />
      </div>

      <div className="relative">
        <input
          type="text"
          placeholder="Поиск..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-[#fff] rounded-2xl text-black px-[10px] py-[5px]"
        />

        <Image
          src="/search-521.png"
          width={20}
          height={20}
          alt="search"
          className="absolute top-1/4 right-1/18 bg-amber-50"
        />
      </div>

    </header>
  );
}