import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Home } from "../Components/Pages/Home/Home";
import { Articles } from "../Components/Pages/Articles/Articles";
import { Header } from "../Components/Layout/Header/Header";
import { Nav } from "../Components/Layout/Nav/Nav";
import { Footer } from "../Components/Layout/Footer/Footer";
import { CreateArticles } from "../Components/Pages/Create/CreateArticles";
import { Contact } from "../Components/Pages/Contact/Contact";
import { SearchArticle } from "../Components/Pages/Search/SearchArticle";
import { Article } from "../Components/Pages/Articles/Article";
import { EditArticles } from '../Components/Pages/Edit/EditArticles';
import { ErrorArticles } from "../Helpers/ErrorArticles/ErrorArticles";
import { EmptyArticles } from "../Helpers/EmptyArticles/EmptyArticles";

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
                    <Route path="/Create Article" element={<CreateArticles />} />
                    <Route path="/Contact" element={<Contact />} />
                    <Route path="/Search/:search" element={<SearchArticle />} />
                    <Route path="/Article/:id" element={<Article />} />
                    <Route path="/Edit/:id" element={<EditArticles />} />
                    <Route path="/Search/" element={<EmptyArticles />} />
                    <Route path="*" element={<ErrorArticles />}></Route>
                </Routes>
            </section>

            <Footer />
        </BrowserRouter>
    )
}
