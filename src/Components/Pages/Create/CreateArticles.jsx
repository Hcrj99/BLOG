import React, { useState } from 'react';
import './CreateArticles.css';
import { useForm } from '../../../Hooks/useForm';
import { Ajax } from '../../../Helpers/Ajax';
import { Global } from '../../../Helpers/Global';


export const CreateArticles = () => {

    const { formulary, sent, changed } = useForm({});
    const [result, setResult] = useState("no sent");

    //Get data Form
    const saveArticle = async (event) => {
        event.preventDefault();
        let newArticle = formulary;

        //save Article in backend
        const { data, charge } = await Ajax(Global.url + 'create', 'POST', newArticle);

        if (data.status == "success") {
            setResult("sent");
        }
        else{
            setResult("error");
        }

    };


    return (
        <div className='Create__container'>
            <h2>Create Article</h2>
            <p>Form through which you can create your own articles by adding image, title and the content that the article will cover.</p>
            <strong>{result === "sent" ? "Article save" : ""}</strong>
            <strong>{result === "error" ? "The data provided is too short." : ""}</strong>
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
