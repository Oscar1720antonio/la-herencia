import React, { Component } from "react";
import Header from "../components/Layout/Header/Header"
import Footer from "../components/Layout/Footer/Footer";
import SiteBreadcrumb from "../components/Common/Breadcumb";
import ServiceOneMain from "../components/ServiceOne/ServiceOneMain";

class Client extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <SiteBreadcrumb pageTitle="Our Services" />
                <ServiceOneMain />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Client;
