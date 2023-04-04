import React, { useState } from 'react';

const Form = ({ setTodos }) => {
    const [inputText, setInputText] = useState("")

    return (
        <form onSubmit={e => {
            e.preventDefault()
        }}>
            <input value={inputText} placeholder='New todo' onChange={(e) => {
                setInputText(e.target.value)
            }} />

            <button onClick={()=>{
                setTodos(prev => {
                    let kopija = [...prev, {
                        text: inputText,
                        done: false
                    }]
                    return kopija
                })
                setInputText('')
            }}>Add</button>
        </form>
    );
};

export default Form;