import './sidebar.css';
import { useDispatch, useSelector } from "react-redux";
import { updateFilteredItems } from "../../state/slice/cart";
import { useState } from "react";
import { RootState } from "../../state/store";
import { PriceFilterRef } from "./PriceFilter/priceFilter";
import { useRef } from "react";
import SidebarFilter from "../Filter/filter";



const Sidebar = () => {
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

    return (<>
        {(<div className="sidebar" style={{ width: +isSidebarOpen ? `24rem` : `0` }}>
            <div className="sidebar-items section">
                {isFilterEnabled && (
                    <>
                        <SidebarFilter />
                    </>
                )}
                {
                    !isFilterEnabled && (
                        <div className="no-filter">
                            <h2>Filters are disabled</h2>
                            <p>Enable filters to filter items by tags and price.</p>
                        </div>
                    )
                }

            </div>
        </div>)}
    </>
    );
}

export default Sidebar;

