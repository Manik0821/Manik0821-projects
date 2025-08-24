import React from "react";
import { useSelector } from "react-redux";
import './shoppingCart.css';
import Stepper from "../ItemList/Card/Stepper/stepper";
import Container from "../Container/container";
import PriceDetails from "../PriceDetails/priceDetails";
import { InventoryItem } from "../../Utilities/inventory";
import { useDispatch } from "react-redux";
import { closeFilter } from "../../state/slice/controller";
import { updateFilteredItems } from "../../state/slice/cart";

const ShoppingCart = () => {
    const items = useSelector((state: any) => state.cart.fetchedItems);
    const totalQuantity = useSelector((state: any) => state.cart.totalQuantity);
    const dispatch = useDispatch();
    dispatch(closeFilter());
    dispatch(updateFilteredItems([]))
    
    return (
        <div className="cart-container">
            <div className="shopping-cart">
                <div className="cart-items">
                    <h2>Items in your List</h2>
                    <Container>
                        {totalQuantity === 0 ? (
                            <p>Your cart is empty.</p>
                        ) : (
                            items.map((item: InventoryItem) => (

                                (item.quantity !== 0 && <div key={item.id} className="cart-item">
                                    <div className="img-icon" style={{ background: `url(${item.icon})` }} >
                                        <img src={item.icon} alt={item.name} width={100} height={100} />
                                    </div>
                                    <div className="item-details">
                                        <h2>{item.name}</h2>
                                        <h4>{item.description}</h4>
                                        <div className="item-qty">
                                            <Stepper id={item.id} quantity={item.quantity} />
                                            <p>{item.price}$</p>
                                        </div>
                                    </div>
                                </div>)
                            ))
                        )}

                    </Container>

                    {totalQuantity !== 0 && (<>
                        <h2>Price Details</h2>
                        <Container>
                            <PriceDetails />
                        </Container>
                    </>)}
                </div>
                {/* </Container> */}
                {/* Add more functionality here, like displaying items in the cart */}
            </div>
        </div>
    );
}
export default ShoppingCart;