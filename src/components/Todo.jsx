import React from 'react';

const Todo = ({ todo, setTodos }) => {
    return (
        <div>
            <p style={todo.done? {color: "red", textDecoration: "line-through"} : {}} >{todo.text}</p>

            <button onClick={()=>{
                setTodos(prev => {
                    let kopijaNiz = [...prev]
                    let kopijaObj = {...todo}
                    kopijaObj.done = !kopijaObj.done
                    let indeks = kopijaNiz.findIndex(obj => obj.id === todo.id)
                    kopijaNiz[indeks] = kopijaObj
                    return kopijaNiz
                })
            }}>Done</button>

            <button onClick={() => {
                setTodos( prev => {
                    let kopija = [...prev]
                    let indeks = kopija.indexOf(todo)
                    kopija.splice(indeks, 1)
                    return kopija
                })
                
            }}>Delete</button><hr />
        </div>
    );
};

export default Todo;