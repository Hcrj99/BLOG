import React, { useState } from 'react';
import './CreateArticles.css';
import { useForm } from '../../../Hooks/useForm';


export const CreateArticles = () => {

    const { formulary, sent, changed } = useForm({});

    //Get data Form
    const saveArticle = (event) => {
        event.preventDefault();
        let newArticle = JSON.stringify(formulary);
        console.log(newArticle);
    };

    //save Article in backend

    return (
        <div className='Create__container'>
            <h2>Create Article</h2>
            <p>Form through which you can create your own articles by adding image, title and the content that the article will cover.</p>
            <form className='Form__container-create' onSubmit={saveArticle}>
                <section>
                    <label htmlFor='file'>Image</label>
                    <input type='file' name='file' />
                </section>
                <section>
                    <label htmlFor='title'>Title</label>
                    <input type='text' name='title' placeholder='Title of the Article' onChange={changed} />
                </section>
                <section>
                    <label htmlFor='content'>Content</label>
                    <textarea type='text' name='content' placeholder='Content of the Article' onChange={changed} />
                </section>
                <input type='submit' value='Save' />
            </form>
        </div>
    )
}
