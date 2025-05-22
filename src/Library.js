import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BooksList } from './components/BooksList';
import { BookForm } from './components/BookForm';


export default function Library(){

    const dispatch=useDispatch();
    const books1=useSelector(state=>{console.log(state); return state.books});
    const [books, setBooks] = useState([
        {
            title: 'How to win',
            author: 'Dale carne',
            isbn: '12341234'
        },
        {
            title: "Agnipankh",
            author: "APJ Abdul Kalam",
            isbn: "13691369"
        },
        {
            title: "Atomic Habits",
            author: "James Clear",
            isbn: "13571357"
        }
   ]);

    const [formData, setFormData] = useState({title: '', author: '', isbn: ''});
    const [editIndex, setEditIndex] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {       
        const { title, author, isbn} = formData;
        if (!title || !author || !isbn) {
            alert("All Fields are required.");
            return;
        }
       if (editIndex !== null) {
          dispatch({type:'UPDATE_BOOK',payload:{data:formData,index:editIndex}})
            setEditIndex(null);
        } else {
            dispatch({type:'INSERT_BOOK',payload:formData})
        }
        setFormData({ title: '', author: '', isbn: ''});
    };
    const handleDelete =  (index) =>{
       dispatch({type:'DELETE_BOOK',payload:{index}})
        setEditIndex(null);
        setFormData({ title: '', author: '', isbn: ''});
    };
    const handleEdit = (index) => {
         setFormData(books1[index]);
        setEditIndex(index);
    };

    return (
    <div>
        <h1>Library Book Application</h1>
        <BookForm handleChange={handleChange} formData={formData} editIndex={editIndex} handleSubmit={handleSubmit} />
        <h2> Book List</h2>
       <BooksList handleEdit={handleEdit} handleDelete={handleDelete} />
    </div>    
        );

}