import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Home } from "../Components/Pages/Home";
import { Articles } from "../Components/Pages/Articles";

export const Router = () => {
    return (
        <BrowserRouter>
            {/* Routes Layout */}

            {/* Routes Main-Content */}
            <section className="Main__content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Home" element={<Home />} />
                    <Route path="/Articles" element={<Articles />} />
                </Routes>
            </section>
        </BrowserRouter>
    )
}
