import React, { useRef, useState } from "react";
import "./filter.css";
import { Search, X } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { updateFilteredItems } from "../../state/slice/cart";
import { RootState } from "../../state/store";
import PriceFilter, { PriceFilterRef } from "../Sidebar/PriceFilter/priceFilter";

export const SidebarFilter = () => {
    const [filterTags, updateFilters] = useState<string[]>([]);
    const [searchQuery, updateSearchQuery] = useState<string>("");
    const inventoryData = useSelector((state: RootState) => state.cart.items);

    const priceFilterRef = useRef<PriceFilterRef>(null);
    const dispatch = useDispatch();

    // dispatch(updateFilteredItems(filterTags));

    const isSidebarOpen = useSelector((state: RootState) => state.Toggle.isSidebarOpen);
    const isFilterEnabled = useSelector((state: RootState) => state.Toggle.isFilterEnabled);


    const onUpdateFilters = () => {
        if (searchQuery.trim() === "") return;
        const updatedFilters = filterTags.filter(tag => tag !== searchQuery);
        if (!updatedFilters.includes(searchQuery)) {
            updatedFilters.push(searchQuery);
        }
        updateFilters(updatedFilters);
        updateSearchQuery("");
    };

    const applyFilters = () => {
        dispatch(updateFilteredItems(filterTags));
        priceFilterRef.current?.runPriceClick();
    }
    return (
        <div className="sidebar-filters">
            <h2 style={{color:"white",marginBottom:"-1rem"}}>Filter</h2>
            <div className="filter-1">

                <div className="filter-title">Filter by tags</div>
                <div className="tags-input">
                    <input
                        className="w-full border-none h-full hover:border-none p-5"
                        type="text"
                        placeholder="Enter tags..."
                        value={searchQuery}
                        onChange={(e) => updateSearchQuery(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                onUpdateFilters(); // call your function
                            }
                        }}
                    />
                    <div className="search-icon" >
                        <Search size={16} />
                    </div>
                </div>
                <div className="filter-tags">
                    {filterTags.map((tag, index) => (
                        <div key={index} className="filter-tag">
                            {tag}
                            <div title="Remove Tag"
                                className="remove-tag"
                                onClick={() => {
                                    const updatedFilters = filterTags.filter(t => t !== tag);
                                    updateFilters(updatedFilters);
                                }}
                            >
                                <X size={22} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <hr />
            <div className="filter-2">
                <PriceFilter ref={priceFilterRef} />
            </div>

            <div className="button-container">
                <button onClick={applyFilters} className="filter-button apply-btn">
                    Apply
                </button>
                <button className="filter-button clear-btn"
                    onClick={() => {
                        updateFilters([]);
                        updateSearchQuery("");
                        dispatch(updateFilteredItems([]));
                        priceFilterRef.current?.clearFilter();
                    }}
                >
                    Clear
                </button>
            </div>

        </div>
    )
}

export default SidebarFilter;