import Card from "./card";
import { Close } from "../state/slice/changPanel"; // Import the state variable to control panel visibility
import { useDispatch } from "react-redux";
import { AppDispatch } from "../state/store";

interface childProps {
    id: string;
}

const DetailsPanel = ({ id }: childProps) => {
    const dispatch = useDispatch<AppDispatch>();

    const changePanel = () => {
        dispatch(Close()); // Dispatch the Close action to hide the panel
    };

    return (
        <div className="panel-wrapper flex flex-col p-4 justify-center items-center " >
            <div className="absolute top-2 right-2" onClick={changePanel} style={{ transform: "scale(1.4,1)", fontWeight: "bolder", background: "red", color: "white", padding: "1px 2px", border: "1px solid black", cursor: "pointer" }}>X</div>
            <h1 style={{ fontSize: "22px", fontWeight: "bolder", padding: "1rem 0" }}>Weather Details</h1>
            <div className="card-wrapper" style={{ border: "1px solid rgba(0,0,0,0.1)", borderRadius: "0.5rem", contain: "content", boxShadow: "0px 6px 8px rgba(0,0,0,0.1)", minWidth: "280px" }}>
                <Card details={id} panel={true} />
            </div>
        </div>
    )
}

export default DetailsPanel;