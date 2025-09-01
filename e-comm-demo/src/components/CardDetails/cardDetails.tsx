import React from "react";
import './cardDetails.css';
import { useSelector } from "react-redux";
import { getItem } from "../../Utilities/inventory";
import Container from "../Container/container";
import Stepper from "../ItemList/Card/Stepper/stepper";
import { RootState } from "../../state/store";
import { useDispatch } from "react-redux";
import { closeFilter } from "../../state/slice/controller";
import { updateFilteredItems } from "../../state/slice/cart";
import { Star, Tag , CalendarCheck} from "lucide-react"


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
                    {/* <div className="details-header">
                        <h2>{item.name}</h2>
                    </div> */}
                    <div className="details-main">
                        <div className="partition">
                            <div className="details-img">
                                <img src={item?.icon} alt={item?.name} width={150} height={150} />

                            </div>
                            {cartItem && <div className="details-stepper" style={{margin:"0 auto",transform:"scale(1.5)", paddingTop:"1rem"}}>
                                <Stepper id={item.id} quantity={cartItem.quantity} />
                            </div>}
                        </div>
                        <div className="partition">

                            <div className="details-section">
                                <div className="details-desc">
                                    <br />
                                    <h3>{item?.description}</h3>

                                    <div className="details-data">
                                        <div className="rating inline-flex align-center gap-1">
                                            <div style={{ display: "flex", alignItems: "center", gap: "0.2rem", color: "white", background: "darkgreen", padding: "0 0.2rem", fontSize: "16px" }}>
                                                {item.rating} <Star size={12} fill={"white"} />
                                            </div>
                                            <div style={{ fontSize: "14px", color: "gray" }}>7000+ Ratings & 1500+ reviews</div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                            <div className="details-section">
                                <div className="section-name price-section-heading" style={{ color: "darkgreen", fontSize: "15px", fontWeight: "600" }}>
                                    Special price
                                </div>
                                <div className="detail-price flex" style={{ fontSize: "24px", fontWeight: "700" }}>
                                    <div style={{}}>${(item.price).toFixed(2)} </div>
                                    <div style={{ fontSize: "17px", textDecoration: "line-through", fontWeight: 600, color: "rgba(0,0,0,0.6)" }}>{(item.price * 1.15).toFixed(2)}</div>
                                    <div style={{ fontSize: "17px", color: "darkgreen" }}>15% off</div>
                                </div>
                            </div>
                            <div className="details-section">
                                <div className="offers-section-heading" style={{fontSize:"17px", fontWeight:"600",margin:"0.5rem 0"}}>
                                    Available offers
                                </div>
                                <div className="offers-list" style={{fontSize:"14px"}}>
                                    <div className="offer-item bank-offer" style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                                        <div className="offer-icon"><Tag size={16} /></div> <strong>Bank Offer</strong> 5% Cashback on Flipkart Axis Bank Credit Card
                                    </div>
                                    <div className="offer-item bank-offer" style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                                        <div className="offer-icon"><Tag size={16} /></div> <strong>Bank Offer</strong> 5% ck on ICICI Bank Credit Cards, up to $120. On orders of $2000 and above
                                    </div>
                                    <div className="offer-item special-offer" style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                                        <div className="offer-icon"><Tag size={16} /></div> <strong>Special Offer</strong> Get extra $100 off (price inclusive of Cashback/coupon)
                                    </div>
                                    <div className="offer-item special-offer" style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                                        <div className="offer-icon"><CalendarCheck size={16} /></div>  EMI starts from $50/month <a href="#" style={{ color: "blue", textDecoration: "none"}}>View Plans</a>
                                    </div>
                                </div>
                            </div>
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