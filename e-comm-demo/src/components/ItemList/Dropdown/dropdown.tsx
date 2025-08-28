import React from "react";
import "./dropdown.css";

type DropdownProps = {
    options: string[];
    selectedOption: string;
    onSelect: (option: string) => void;
}
const Dropdown: React.FC<DropdownProps> = ({ options, selectedOption="", onSelect }) => {
    return (
        <div className="dropdown">
            <select
                title={selectedOption || "Sort by"}
                value={selectedOption}
                onChange={(e) => onSelect(e.target.value)}
                className="dropdown-select"
            >
                <option value="" disabled hidden >
                    Sort by
                </option>
                {options.map((option) => (
                    <option key={option} value={option} title={option}>
                        {option}
                    </option>
                ))}

            </select>
        </div>
    );
}
export default Dropdown;
