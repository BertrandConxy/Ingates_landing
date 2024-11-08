import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/ingates_logo.svg";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex shrink-0 text-blue-500" aria-label="Cruip">
      <Image src={logo} alt="Cruip Logo" color="blue" width={182} height={182} />
    </Link>
  );
}
