import { CiPaperplane } from "react-icons/ci";
import Link from "next/link";
import { RiFacebookLine } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { RiLinkedinLine } from "react-icons/ri";
import Logo from "../Logo";

const Footer = () => {
  return (
    <div className="bg-black text-white flex justify-between px-32 mt-20">
      <div>
        <Logo />
        <button className="text-white">Subscribe</button>
        <p>Get 10% off your first order</p>
        <div className="border border-white flex gap-3">
          <input type="email" className="bg-black border-0 outline-none" placeholder="Enter your email" />
          <CiPaperplane />
        </div>
      </div>

      <div>
        <h4>Support</h4>
        <p>111 Bijay sarani, Dhaka, DH 1515, Bangladesh.</p>
        <p>deborahkudaru@gmail.com</p>
        <p>+2349161235877</p>
      </div>

      <div>
        <h4>Account</h4>
        <Link href="/">My Account</Link>
        <Link href="/">Login / Register</Link>
        <Link href="/">Cart</Link>
        <Link href="/">Wishlist</Link>
        <Link href="/">Shop</Link>
      </div>

      <div>
        <h4>Quick Link</h4>
        <Link href="/">Privacy Policy</Link>
        <Link href="/">Terms of Use</Link>
        <Link href="/">FAQ</Link>
        <Link href="/">Contact</Link>
      </div>

      <div>
        <Link href="/">Download App</Link>
        <div>
          <div></div>
          <div>
            <button></button>
            <button></button>
          </div>
        </div>
        <div>
          <RiFacebookLine />
          <FaXTwitter />
          <IoLogoInstagram />
          <RiLinkedinLine />
        </div>
      </div>
    </div>
  );
};

export default Footer;
