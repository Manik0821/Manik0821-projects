import React, { use } from "react";
import { Minus, Plus } from "lucide-react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../state/store";
import { useSelector } from "react-redux";
import { addItemCart, deleteItemCart } from "../../../../state/slice/cart";
import './stepper.css';

const Stepper = ({ id = "" , quantity=0 }) => {
    const dispatch = useDispatch<AppDispatch>();
    const addItemToCart = (itemId: string) => {
        dispatch(addItemCart(itemId));
    };
    const deleteItemFromCart = (itemId: string) => {
        dispatch(deleteItemCart(itemId));
    };
    const item = useSelector((state: any) => state.cart.items.find((i: any) => i.id === id));
    return (
        <div className="qty-stepper">
            <button className="qty-sign" onClick={() => deleteItemFromCart(item.id)} disabled={quantity === 0}>
                <Minus size={18} strokeWidth={3} />
            </button>
            <div className="qty-value">{quantity}</div>
            <button className="qty-sign" onClick={() => addItemToCart(item.id)} >
                <Plus size={18} strokeWidth={3} />
            </button>
        </div>
    )
}

export default Stepper;