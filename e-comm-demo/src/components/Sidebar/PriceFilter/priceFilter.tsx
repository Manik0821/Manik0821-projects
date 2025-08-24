import React, { forwardRef, useImperativeHandle } from "react";
import { useState } from "react";    

import './priceFilter.css';
import { useDispatch } from "react-redux";
import { filterByPrice } from "../../../state/slice/cart";

export type PriceFilterRef = {
    runPriceClick: () => void;
    clearFilter: () => void;
}


const PriceFilter = forwardRef<PriceFilterRef>((props,ref)  => {

    const [minPrice, setMinPrice] = useState<number>(0);
    const [maxPrice, setMaxPrice] = useState<number>(2000);
    const dispatch = useDispatch();
    useImperativeHandle(ref, () => ({
        runPriceClick: () => {
            dispatch(filterByPrice({ min: minPrice, max: maxPrice }));
            // This function can be called from the parent component to trigger price click
            console.log("Price Filter Clicked:", { minPrice, maxPrice });
        },
        clearFilter: () => {
            setMinPrice(0);
            setMaxPrice(2000);
            dispatch(filterByPrice({ min: 0, max: 2000 }));
            console.log("Price Filter Cleared");
        }
    }));

    return (<>
        <div className="filter-title">Filter by price</div>
        <div className="price-slider">
            <input
                type="range"
                min="0"
                max="1000"
                step="10"
                className="input-slider"
                title="Feature not available"
                style={{ cursor: "not-allowed" }}
                disabled={true}
            />
        </div>
        <div className="price-inputs">
            <div className="inp-cont">
                <label htmlFor="" className="price-label absolute">Min</label>
                <input type="Number"
                    placeholder="Min Price"
                    value={minPrice}
                    onChange={(e) => setMinPrice(Number(e.target.value))}
                    max={maxPrice-100} />
            </div>

            <div className="inp-cont">
                <label htmlFor="" className="price-label absolute">Max</label>
                <input type="Number"
                    placeholder="Max Price"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                    min={minPrice+100} />
            </div>
        </div>
    </>)
});

export default PriceFilter;
