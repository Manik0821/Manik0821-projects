import React, { useState } from "react";
import './popup.css';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { togglePopup } from "../../state/slice/controller";
import ReactDOM from "react-dom";

type PopupProps = {
    child: React.ComponentType;
}

const Popup = ({ child }: { child: React.ReactNode }) => {
    const dispatch = useDispatch();

    return (
        <div className="popup" onClick={() => dispatch(togglePopup())}>
            <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                <span className="close" onClick={() => dispatch(togglePopup())} >&times;</span>
                {child}
            </div>
        </div>
    );
}

export default Popup;