import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Home } from "../Components/Pages/Home";
import { Articles } from "../Components/Pages/Articles";
import { Header } from "../Components/Layout/Header/Header";
import { Nav } from "../Components/Layout/Nav/Nav";
import { Footer } from "../Components/Layout/Footer/Footer";

export const Router = () => {
    return (
        <BrowserRouter>
            {/* Routes Layout */}
            <Header />
            <Nav />

            {/* Routes Main-Content */}
            <section className="Main__content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Home" element={<Home />} />
                    <Route path="/Articles" element={<Articles />} />
                </Routes>
            </section>

            <Footer />
        </BrowserRouter>
    )
}
