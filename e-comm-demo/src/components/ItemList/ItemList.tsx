import { useDispatch, useSelector } from "react-redux";
import Card from "./Card/card";
import './itemList.css';
import { RootState } from "../../state/store";
import Container from "../Container/container";
import { openFilter, togglePopup } from "../../state/slice/controller";
import { ChevronDown, Filter } from "lucide-react"
import { useState } from "react";
import Popup from "../Popup/popup";
import SidebarFilter from "../Filter/filter";
import Dropdown from "./Dropdown/dropdown";

const ItemsList = () => {

    const dispatch = useDispatch();
    dispatch(openFilter())

    let selectedItems = useSelector((state: RootState) => state.cart.fetchedItems);
    const [selectedOption, setSelectedOption] = useState("Sort by");
    const enableFilter = useSelector((state: RootState) => state.Toggle.isFilterPopupOpen);

    selectedItems = [...selectedItems].sort((a, b) => {
        if (selectedOption === "Price - Low to High") {
            return a.price - b.price;
        } else if (selectedOption === "Price - High to Low") {
            return b.price - a.price;
        } else if (selectedOption === "Newest First") {
            return a.id > b.id ? -1 : 1;
        } else if (selectedOption === "Oldest First") {
            return a.id < b.id ? -1 : 1;
        } else {
            return 0;
        }
    });

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
                    {/* <button className="sort-btn">
                        Sort by <ChevronDown size={22} strokeWidth={3} />
                    </button> */}
                    <Dropdown 
                        options={["Default","Price - Low to High", "Price - High to Low", "Newest First", "Oldest First"]} 
                        selectedOption={selectedOption} 
                        onSelect={setSelectedOption} 
                    />
                    <ChevronDown size={22} strokeWidth={3} />
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