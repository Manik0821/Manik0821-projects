import React from "react";
import { InventoryItem } from "../../../Utilities/inventory";
import './card.css';
import { Plus, Minus } from "lucide-react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../state/store";
import { addItemCart, deleteItemCart } from "../../../state/slice/cart";
import Stepper from "./Stepper/stepper";
import { useNavigate } from "react-router-dom";
import { reSize } from "../../../Utilities/utils";

interface CardProps {
    item: InventoryItem;
}

const Card = (item: InventoryItem) => {
    const dispatch = useDispatch<AppDispatch>();

    const navigate = useNavigate();
    const handleCardClick = () => {
        navigate("/card/" + item.id);
    };
    const handleAddClick = (e:React.MouseEvent) => {
        e.stopPropagation();
    }

    return (
        <div className="card">
            <div className="card-header"  onClick={() => handleCardClick()}>
                <h3 className="card-name">{item.name}</h3>
            </div>
            <div className="card-img" onClick={() => handleCardClick()}>
                <img src={item.icon} alt={item.name} className="card-icon" width={150} height={150} />
            </div>
            <div className="card-main">
                <p className="card-description" title={item.description}>{reSize(item.description,25)}</p>
            </div>
            <div className="card-qty" onClick={(e) => handleAddClick(e)}>
                <div className="qty-title">Price:  ${item.price}</div>
                <Stepper id={item.id} quantity={item.quantity} />
            </div>
        </div>
    );
}

export default Card;