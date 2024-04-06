import React, { useEffect, useState } from 'react';
import '../Articles/Articles.css';
import { Global } from '../../../Helpers/Global';
import { Ajax } from '../../../Helpers/Ajax';
import { ArticlesList } from '../Articles/ArticlesList';
import { useParams } from 'react-router-dom';


export const SearchArticle = () => {
    const [articles, setArticles] = useState([]);
    const [charging, setCharging] = useState(true);
    const params = useParams();

    useEffect(() => {
        getArticles();
    }, []);

    useEffect(() => {
        getArticles();
    }, [params]);

    const getArticles = async () => {
        //fetch
        const { data, charge } = await Ajax(Global.url + 'Search/' + params.search, "GET");
        if (data.status === "success") {
            setArticles(data.article);
        }else{
            setArticles([]);
        }
        setCharging(false);
    };

    return (
        <div className='Articles__container'>
            {charging === true ? "charging" : (
                articles.length >= 1 ? <ArticlesList articles={articles} setArticles={setArticles}/> : (<h3>Empty articles</h3>)
            )}
        </div>
    );
}

