import React from 'react'
import { useSelector } from 'react-redux';
import './BookList.css';

export const BooksList = ({handleEdit,handleDelete}) => {
const books1=useSelector(state=>{console.log(state); return state.books});

  return (<>
  {books1.length==0?<h1>No Books Available</h1>:
    <table>
        <tr>
            <th>Title</th>
             <th>Author</th>
             <th>ISBN</th>
             <th>UPDATE</th>
             <th>DELETE</th>
        </tr>
                {books1.map((book, index) =>(
                 <tr>
                        <td>{book.title}</td> <td>{book.author}</td><td>ISBN:{book.isbn}</td>
                       <td><button onClick={()=> handleEdit(index)}>Edit</button></td>
                       <td> <button onClick={() =>handleDelete(index)}>Delete</button></td>
                     </tr>
                ))}
    </table>
}
    </>

    
  )
}
