import React from "react";
import './footer.css';
import { Facebook, Twitter, Instagram , CreditCard } from "lucide-react";


const Footer = () => {
    return (
        <div className="footer">
        <div className="footer-content">

            <h4>Secured Payment</h4>
            <div className="payment-methods">
                <CreditCard size={24} />
                <CreditCard size={24} />
                <CreditCard size={24} />
                <CreditCard size={24} />
                <CreditCard size={24} />
            </div>
            <p>Credit card fees may vary</p>
            <h4>Follow us</h4>
            <div className="social-media">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <Facebook size={24} />
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                    <Twitter size={24} />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <Instagram size={24} />
                </a>
            </div>

            <div className="copyright">
                <p>© 2023 Inventory. All rights reserved.</p>
            </div>
        </div>
        </div>
    );
}

export default Footer;
