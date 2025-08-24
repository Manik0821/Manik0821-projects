import React from "react";
import './container.css';

type ContainerProps = {
    children?: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({children}) => {
    return (
        <div className="rx-container">
            {children}
        </div>
    );
}

export default Container;