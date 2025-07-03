
import Link from "next/link";
import ClerkButton from "./ClerkButton";

export default function Navbar() {
  return <nav className="mx-auto flex items-center justify-between px-4 py-3 bg-white shadow-md">
    <div className="flex items-center gap-2">
      <Link href="/" className="flex items-center gap-2">
        <span className="text-xl font-bold text-primary tracking-tight">
          🏠 Inversor House
        </span>
      </Link>
    </div>
    <ul className="hidden sm:flex items-center gap-6 text-base font-medium">
      <li>
        <Link
          href="/oportunidades"
          className="hover:text-primary transition"
        >
          Oportunidades
        </Link>
      </li>
      {/* <li>
        <Link
          href="#conocenos"
          className="hover:text-primary transition"
        >
          Conócenos
        </Link>
      </li> */}
      <li>
        <Link
          href="/faqs"
          className="hover:text-primary transition"
        >
          FAQs
        </Link>
      </li>
      <li>
        {/* <Link
          href="/login"
          className="bg-primary text-white px-4 py-2 rounded-full hover:bg-secondary transition"
        >
          Acceder2
        </Link> */}
        <ClerkButton />
      </li>
    </ul>
    <div className="sm:hidden flex items-center gap-2">
      <Link
        href="/oportunidades"
        className="bg-white text-primary px-4 py-2 rounded-full text-sm border border-primary"
      >
        Oportunidades
      </Link>
      {/* <Link
        href="/login"
        className="bg-primary text-white px-4 py-2 rounded-full text-sm"
      >
        Acceder1
      </Link> */}
      <ClerkButton />
    </div>
  </nav>

}