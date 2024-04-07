import React, { useEffect, useState } from 'react';
import './Articles.css';
import { Global } from '../../../Helpers/Global';
import { Ajax } from '../../../Helpers/Ajax';
import { ArticlesList } from './ArticlesList';
import { ChargingArticles } from '../../../Helpers/ChargingArticles/ChargingArticles';

export const Articles = () => {

    const [articles, setArticles] = useState([]);
    const [charging, setCharging] = useState(true);

    useEffect(() => {
        getArticles();
    }, []);

    const getArticles = async () => {
        //fetch
        const { data, charge } = await Ajax(Global.url + 'articles', "GET");

        if (data.status === "success") {
            setArticles(data.articles);
        }

        setCharging(false);

    };

    return (
        <div className='Articles__container'>
            {charging === true ? <ChargingArticles /> : (
                articles.length >= 1 ? <ArticlesList articles={articles} setArticles={setArticles}/> : (<h3>Empty articles</h3>)
            )}
        </div>
    );
}
