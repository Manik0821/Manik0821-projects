import React, { useState } from "react";
import './PageNav.css'

type NavItem = {
    title: string;
    value: string;
};

export const PageNav = () => {
    // 1. Data Array
    const navItems: NavItem[] = [
        { title: "Page 1", value: "Content for section one." },
        { title: "Page 2", value: "Content for section two." },
        { title: "Page 3", value: "Content for section three." },
        { title: "Page 4", value: "Content for section four." },
        { title: "Page 5", value: "Content for section five." },
        { title: "Page 6", value: "Content for section six." },
    ];

    const [curr, setCurr] = useState(0);
    const total = navItems.length;

    // 2. Logic to determine which page numbers to show
    // We want: [curr - 1, curr, curr + 1] filtered by valid bounds
    const getVisiblePages = () => {
        const pages = [curr - 1, curr, curr + 1];
        return pages.filter(p => p >= 0 && p < total);
    };

    return (
        <div className="page-nav">
            {/* Display Active Content */}
            <div className="page-nav-content">
                <div className="content-heading">{navItems[curr].title}</div>
                <div className="content-main" >{navItems[curr].value}</div>
            </div>

            {/* Pagination Controls */}
            <div className="page-nav-index">
                {/* Prev Button */}
                <button 
                    disabled={curr === 0} 
                    onClick={() => setCurr(0)}
                    className="nav-btn nav-btn-outer"
                >
                    &nbsp;&laquo;&nbsp;
                </button>
                {curr !== 0 && <button 
                    disabled={curr === 0} 
                    onClick={() => setCurr(curr - 1)}
                    className="nav-btn"
                >
                    Prev
                </button>}

                {/* Numeric Sliding Window */}
                {getVisiblePages().map(pageIdx => (
                    <button
                        key={pageIdx}
                        onClick={() => setCurr(pageIdx)}
                        className={`nav-btn ${curr === pageIdx ? "active" : ""}`}
                    >
                        {pageIdx + 1}
                    </button>
                ))}

                {/* Next Button */}
                {curr !== total-1 && <button 
                    // disabled={curr === total - 1} 
                    onClick={() => setCurr(curr + 1)}
                    className="nav-btn"
                >
                    Next
                </button>}
                <button 
                    disabled={curr === total - 1} 
                    onClick={() => setCurr(total-1)}
                    className="nav-btn nav-btn-outer"
                >
                    &nbsp;&raquo;&nbsp;
                </button>
            </div>
        </div>
    );
};
