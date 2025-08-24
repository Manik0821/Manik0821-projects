import React from "react";
import './cardDetails.css';
import { useSelector } from "react-redux";
import { InventoryItem } from "../../Utilities/inventory";
import { getItem } from "../../Utilities/inventory";
import Container from "../Container/container";
import Stepper from "../ItemList/Card/Stepper/stepper";
import { RootState } from "../../state/store";
import { useDispatch } from "react-redux";
import { closeFilter } from "../../state/slice/controller";
import { updateFilteredItems } from "../../state/slice/cart";



const CardDeatils = () => {
    let itemId = window.location.pathname.split("/").pop() || "";
    const item = itemId ? getItem(itemId) : null;
    const cartItem = useSelector((state: RootState) =>
        state.cart.fetchedItems.find((i) => i.id === itemId)
    );
    const dispatch = useDispatch();
    dispatch(closeFilter());
    dispatch(updateFilteredItems([]))

    return (
        <div className="card-details">
            <Container >
                {item !== null && (<div className="details-body">
                    <div className="details-header">
                        <h2>{item.name}</h2>
                    </div>
                    <div className="details-main">
                        <div className="details-img">
                            <img src={item?.icon} alt={item?.name} width={150} height={150} />
                        </div>
                        <div className="details-desc">
                            <br />
                            <h3>{item?.description}</h3>
                            {cartItem &&
                                <div className="details-data">
                                    <h2>Price: {item.price}$</h2>
                                    <div className="details-stepper">
                                        <Stepper id={item.id} quantity={cartItem.quantity} />
                                    </div></div>
                            }
                        </div>
                    </div>
                </div>
                )}
                {
                    !item && (<div>
                        <h2>Item does not exist.</h2>
                    </div>)
                }

            </Container>
        </div>
    );
}
export default CardDeatils;