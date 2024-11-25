import React from "react";
import Hero from "../components/Hero";
import ProductSection from "./ProductSection";
import WhyChooseUs from "../components/WhyChooseUs";

const HomePage = () => {
    return (
        <div>
            <Hero />
            <ProductSection />
            <WhyChooseUs />
        </div>
    );
};

export default HomePage;
