import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex justify-evenly py-8 bg-amber-200">
            <h1><Link href={"/"}>Home</Link></h1>
            <ul className="flex items-center justify-center gap-3">
                <li>
                    <Link href={"/page1"}>Page 1</Link>
                </li>
                <li>
                    <Link href={"/page2"}>Page 2</Link>
                </li>
                <li>
                    <Link href={"/page3"}>Page 3</Link>
                </li>
            </ul>
        </nav>
    )
}