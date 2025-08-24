import { ShoppingCart , Menu } from "lucide-react";
import React from "react";
import './header.css';
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../../state/slice/controller";

const Header = () => {
    const TotalItems = useSelector((state: RootState) => state.cart.totalQuantity);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    return (
        <div className="header">
            <div className="header-menu" onClick={() => dispatch(toggleSidebar())}  >
                <Menu size={28} />
            </div>
            <div className="header-title">Inventory</div>
            <div className="header-cart">
                <div className="cart"  onClick={()=> navigate("/cart")} >
                    <ShoppingCart size={34} />
                    {TotalItems!==0 && <div className="value">{TotalItems}</div>}
                </div>
            </div>
        </div>
    );
}

export default Header;
