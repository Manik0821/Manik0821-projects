import React, { Children, useState } from "react";
import { Modal } from "../../lib";
import { Link } from "react-router-dom";
import { Card } from "../../lib/card/card";
import './dashboard.css'
import { Layout } from "../../lib/layout/Layout";

type CardContent = {
    title: string;
    content: string;
    path: string
}

// 1. Create a separate Dashboard component to handle its own Modal state
const Dashboard = () => {

    const cardContent: CardContent[] = [
        { title: "Modal", content: "Modal Popup Component", path: "/Modal" },
        { title: "Panel", content: "Sliding Panel Component", path: "/FullScreenPanel" },
        { title: "Card", content: "Content", path: "/" },
        { title: "Card", content: "Content", path: "/dashboard" }

    ]

    return (
        <Layout title={"Dashboard"} subtitle={"All the Components"}>
            <div className="dashboard">

                <div className="dashboard-items-title">
                    Components
                </div>
                <div className="dashboard-items">
                    {cardContent.map((card, index) => (
                        <Link to={card.path}>

                            <Card title={card.title}>
                                {card.content}
                            </Card>
                        </Link>
                    ))}

                </div>
                <Link to="/" style={{ marginLeft: '10px' }}>Back Home</Link>


            </div>
        </Layout>

    );
};

export default Dashboard;