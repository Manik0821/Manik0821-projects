import { useDispatch, useSelector } from "react-redux";
import Card from "./Card/card";
import './itemList.css';
import { RootState } from "../../state/store";
import Container from "../Container/container";
import { openFilter, togglePopup } from "../../state/slice/controller";
import { updateFilteredItems } from "../../state/slice/cart";
import { ChevronDown, Filter } from "lucide-react"
import { use, useState } from "react";
import Popup from "../Popup/popup";
import SidebarFilter from "../Filter/filter";

const ItemsList = () => {

    const dispatch = useDispatch();
    dispatch(openFilter())

    const selectedItems = useSelector((state: RootState) => state.cart.fetchedItems);

    const enableFilter = useSelector((state: RootState) => state.Toggle.isFilterPopupOpen);

    return (
        <div className="inventory">
            <div className="content-container">
                <div className="filter-container" >

                  <div style={{display:enableFilter?`block`:`none`}} ><Popup child={<SidebarFilter />} /></div>
                    <button className="filter-btn" onClick={()=>dispatch(togglePopup())} >
                        <Filter size={18} strokeWidth={3} /> Filter
                    </button>
                </div>
                <div className="sort-container">
                    <button className="sort-btn">
                        Sort by <ChevronDown size={22} strokeWidth={3} />
                    </button>
                </div>
            </div>
            <Container>
                <div className="card-container">
                    {selectedItems.map((item) => (
                        <Card {...item} />
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default ItemsList;