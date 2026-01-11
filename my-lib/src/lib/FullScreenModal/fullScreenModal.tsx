import { useEffect } from "react";
import { createPortal } from "react-dom";
import './fullScreenModal.css'

type FullScreenModalProps = {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}

export const FullScreenModal: React.FC<FullScreenModalProps> = ({ isOpen, onClose, title, children }) => {

    useEffect(() => {
        
        const handleKeyDown = (event: KeyboardEvent) => {
            // Check for 'Escape' key
            if (event.key === 'Escape' && isOpen) {
                onClose();
            }
        };
        if(isOpen){
            window.addEventListener('keydown', handleKeyDown);
            // Lock background scrolling only
            console.log("opened panel");
            document.body.style.overflow = isOpen ? 'hidden' : '';
        }
        return () => { 
            document.body.style.overflow = '';
            window.removeEventListener('keydown',handleKeyDown)
        };
    }, [isOpen,onClose]);


    // Note: Removed the "if (!isOpen) return null" to allow the exit animation
    return createPortal(
        <div
            className={`modal-container ${isOpen ? 'is-open' : ''}`}
            role="dialog"
            aria-modal="true"
            tabIndex={-1}
        >
            <header className="modal-header">
                <h2 className="modal-title">{title}</h2>
                <button onClick={onClose} className="close-button" aria-label="Close modal">
                    X
                </button>
            </header>

            <main className="modal-content">
                {children}
            </main>
        </div>,
        document.body
    );
};
