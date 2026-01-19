import { useState } from 'react';
import './header.css';
import logo from "./../../assets/react.svg";
import { FullScreenModal } from '../../lib/FullScreenModal/fullScreenModal';

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Modern 2026 practice: Use dedicated handlers for clarity
    const openMenu = () => setIsMenuOpen(true);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <div className="header-container">
            {/* Modal now occupies the top level of the return for clean DOM structure */}
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

            <div className="header">
                <div className="header-menu">
                    {/* Accessibility: Use aria-expanded and role="button" for screen readers */}
                    <div
                        className="menu-logo"
                        onClick={openMenu}
                        role="button"
                        aria-label="Open menu"
                        aria-expanded={isMenuOpen}
                    >
                        &#x2630;
                    </div>
                </div>
                <div className="header-content">
                    <img className="header-logo" src={logo} alt="React logo" />
                    <div className="header-title">Library</div>
                </div>
            </div>
        </div>
    );
};
