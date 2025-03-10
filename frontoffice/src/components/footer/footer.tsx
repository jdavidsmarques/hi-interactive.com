import "./footer.scss"
import dribbbleImage from './../../../public/dribbble.svg'
import linkedingImage from './../../../public/linkeding.svg'
import instagramImage from './../../../public/instagram.svg'
import Image from 'next/image'

export default function Footer(){
    return <footer className="footer">
        <div className="footer__copyright">Biult with <a href="https://nextjs.org/" title="Next.js" target="_blank">Next.js</a> and <a href="https://strapi.io/" title="Strapi" target="_blank">Strapi</a>.</div>
        <div className="footer__social-networks">
            <a href="https://www.linkedin.com/in/jdavidsmarques/" target="_blank" title="Linkedin">
                <Image src={linkedingImage.src} alt="Linkedin profile" title="Linkedin" width="32" height="32"/>
            </a>
            <a href="https://www.instagram.com/david.marques.web.developer/" target="_blank" title="Instagram">
                <Image src={instagramImage.src} alt="Instagram profile" title="Instagramn" width="32" height="32"/>
            </a>
            <a href="https://dribbble.com/jdavidsmarques" target="_blank" title="Dribbble">
                <Image src={dribbbleImage.src} alt="Dribbble profile" title="Dribbble" width="32" height="32"/>
            </a>
        </div>
    </footer>
}