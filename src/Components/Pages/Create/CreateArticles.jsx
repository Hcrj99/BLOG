import React from 'react';
import './CreateArticles.css';

export const CreateArticles = () => {
    return (
        <div className='Create__container'>
            <h2>Create Article</h2>
            <p>Form through which you can create your own articles by adding image, title and the content that the article will cover.</p>
            <form className='Form__container-create'>
                <section>
                    <label htmlFor='file'>Image</label>
                    <input type='file' name='file'/>
                </section>
                <section>
                    <label htmlFor='title'>Title</label>
                    <input type='text' name='title' placeholder='Title of the Article' />
                </section>
                <section>
                    <label htmlFor='content'>Content</label>
                    <textarea type='text' name='Content' placeholder='Content of the Article' />
                </section>
                <input type='submit' value='Save' />
            </form>
        </div>
    )
}
