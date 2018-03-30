import React from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const layout = (props) => {
    return (
        <div className="main-wrapper">
            <Header />
            {props.children}
            <Footer />
        </div>
    );
}

export default layout;