import "./header.scss"
import Link from "next/link"
import Image from "next/image"

export default function Header() {
    return <header className="header">
        <div className="header__logo">
            <Link href="/" title="Hi Interactive">
                Hi Interactive
            </Link>
        </div>
        <nav className="header__menu">
            <div className="header__menu-social-networks">
                <Link href="/" title="Home">Home</Link>
                <Link href="/what-we-do" title="What we do">What we do</Link>
                <Link href="/our-work" title="Our work">Our work</Link>
                <Link href="/about-us"  title="About us">About us</Link>
                <Link href="/hi-knowledge"  title="Hi knowledge">Hi knowledge</Link>
                <Link href="/blog"  title="Blog">Blog</Link>
                <Link href="/join-us"  title="Join us">Join us</Link>
                <Link href="/contacts"  title="Blog">Contacts</Link>
            </div>
        </nav>
    </header>
}