import React, { useEffect, useRef } from "react";
import './Modal.css';

type ModalProps = {
    isOpen: boolean;
    title?: string;
    onClose: () => void;
    children: React.ReactNode;

}

export const Modal: React.FC<ModalProps> = ({ isOpen, title, onClose, children }: ModalProps) => {
    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        const dialog = dialogRef.current;

        if (isOpen) {
            dialog?.showModal();
        } else {
            dialog?.close();
        }
    }, [isOpen]);

    const backdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
        const dialog = dialogRef.current;
        if (!dialog) return;

        if (e.target === dialog) {
            onClose();
        }
    }

    return (
        <dialog ref={dialogRef} onClick={backdropClick} className="lib-modal">
            <div className="modal-header">
                {title && <h2>{title}</h2>}
                <button onClick={onClose} className="close-btn" autoFocus >
                    &times;
                </button>
            </div>
            <div className="modal-content">
                {children}
            </div>
        </dialog>
    )
}