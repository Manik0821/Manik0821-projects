import React, { use } from "react";

import './priceDetails.css';
import { useDispatch, useSelector } from "react-redux";
import { ChevronDown, ChevronUp } from 'lucide-react';

const PriceDetails = () => {
    const [changeOpen, setChangeOpen] = React.useState(true);

    const toggleChangeOpen = () => {
        setChangeOpen(!changeOpen);
        const detailsElement = document.querySelector('.details') as HTMLElement | null;
        if (changeOpen) {
            if (detailsElement) {
                detailsElement.style.height = '0px';
            }
        } else {
            if (detailsElement) {
                detailsElement.style.height = `${detailsElement.scrollHeight}px`;
            }
        }
    };

    const dispatch = useDispatch();
    let item = useSelector((state: any) => state.cart.fetchedItems);
    console.log(item);
    let totalPrice = item.reduce(
        (sum: number, i: any) => sum + i.price * i.quantity,
        0
    );
    let totalQuantity = item.reduce(
        (sum: number, i: any) => sum + i.quantity,
        0
    );
    let shippingCost = 0;
    if (totalPrice < 900) {
        shippingCost = 25;
    }
    totalPrice += shippingCost;
    return (
        <div className="priceDetails">
            <div className="price-table">
                {!changeOpen && (<div className="heading price-row">
                    <div className="key">Items ({totalQuantity})</div>
                    <div className="value" style={{ display: "flex", alignItems: "center" }} onClick={() => toggleChangeOpen()} >Price <ChevronDown size={18} /> </div>
                </div>)}
                {changeOpen && (<div className="heading price-row">
                    <div className="key">Items Quantity</div>
                    <div className="value" style={{ display: "flex", alignItems: "center" }} onClick={() => toggleChangeOpen()} >Price <ChevronUp size={18} /> </div>

                </div>)}
                <div className="details">
                    {item.map((i: any) => (
                        i.quantity !== 0 && (
                            <div className="price-row">
                                <div className="key"><h3>{i.name} x {i.quantity}</h3></div>
                                <div className="value"><h3>{i.price * i.quantity}$</h3></div>
                            </div>
                        )
                    ))}
                    {shippingCost !== 0 && (<div className="price-row">
                        <div className="key"><h3>Shipping Cost</h3></div>
                        <div className="value"><strong><h3>{shippingCost}$</h3></strong></div>
                    </div>)
                    }
                </div>
                <div className="total-price">Total Price:
                    <div className="price">
                        {totalPrice}$
                    </div>
                </div>
                <div className="btn-container">
                    <button className="btn" >Checkout</button>
                </div>
            </div>
        </div>
    )
}

export default PriceDetails;
