import { useState } from "react";
import { Link } from "react-router-dom";
import { FullScreenModal } from "../../lib/FullScreenModal/fullScreenModal";
import './FullScreenModalPage.css'
import { Layout } from "../../lib/layout/Layout";

export const FullScreenModalPage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Modern 2026 practice: Use dedicated handlers for clarity
    const openMenu = () => setIsMenuOpen(true);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <div className="panel-page">
            <Layout title={"Panel"} subtitle={"Full Screen Panel"} >

                <button onClick={openMenu}>Open Panel</button>
                <Link to="/dashboard" style={{ marginLeft: '10px' }}>Go to Dashboard</Link>
            </Layout>
            <FullScreenModal
                isOpen={isMenuOpen}
                onClose={closeMenu}
                title="Navigation"
            >
                <div className="modal-navigation-content">
                    <nav className='navigation-list'>
                        <a className='nav-item' href="/" onClick={closeMenu}>Home</a>
                        <a className='nav-item' href="#about" onClick={closeMenu}>About</a>
                        <a className='nav-item' href="#contact" onClick={closeMenu}>Contact</a>
                    </nav>
                </div>
            </FullScreenModal>
        </div>
    )
}