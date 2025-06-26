import Link from "next/link";

export default function Navbar() {
  return <nav className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
    <div className="flex items-center gap-2">
      <Link href="/" className="flex items-center gap-2">
        <span className="text-xl font-bold text-primary tracking-tight">
          🏠 Inversor
          <span className="text-secondary">House</span>
        </span>
      </Link>
    </div>
    <ul className="hidden sm:flex items-center gap-6 text-base font-medium">
      <li>
        <a
          href="#oportunidades"
          className="hover:text-primary transition"
        >
          Oportunidades
        </a>
      </li>
      <li>
        <a
          href="#conocenos"
          className="hover:text-primary transition"
        >
          Conócenos
        </a>
      </li>
      <li>
        <a
          href="/faqs"
          className="hover:text-primary transition"
        >
          FAQs
        </a>
      </li>
      <li>
        <a
          href="/login"
          className="bg-primary text-white px-4 py-2 rounded-full hover:bg-secondary transition"
        >
          Acceder
        </a>
      </li>
    </ul>
    <div className="sm:hidden flex items-center gap-2">
      <a
        href="/faqs"
        className="bg-white text-primary px-4 py-2 rounded-full text-sm border border-primary"
      >
        FAQs
      </a>
      <a
        href="/login"
        className="bg-primary text-white px-4 py-2 rounded-full text-sm"
      >
        Acceder
      </a>
    </div>
  </nav>

}