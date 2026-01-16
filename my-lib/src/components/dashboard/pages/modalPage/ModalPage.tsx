import { useState } from "react";
import { Modal } from "../../../../lib";
import { Link } from "react-router-dom";
import { Layout } from "../../../../lib/layout/Layout";
import './ModalPage.css'

type ModalPageProps = {
    title:string;
    subtitle:string
}

export const ModalPage : React.FC<ModalPageProps> = ({}) => {
    const [isModalOpen, setModalOpen] = useState(false);


    return (
        <div className="modal-page">
            <Layout title={"Modal"} subtitle={"Modal as Popup"} >
                <div className="modal-page-content">
                <button onClick={() => setModalOpen(true)}>Open Dashboard Modal</button>
                <Link to="/dashboard" style={{ marginLeft: '10px' }}>Go to Dashboard</Link>

                <Modal
                    title="Dashboard Settings"
                    isOpen={isModalOpen}
                    onClose={() => setModalOpen(false)} // FIXED: Set to false to close
                >
                    <h2>This is Modal Content</h2>
                    <p>Specific to the Dashboard route.</p>
                </Modal>
                </div>
            </Layout>

        </div>
    )
}