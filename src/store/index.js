import { createStore } from "redux";

 


 const initialState={
    books:[
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
   ]
 }
 const LibraryReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'INSERT_BOOK':
            console.log("inserting book",state)
            const oldBooks=[...state.books];
            return {books:[...oldBooks,action.payload]}
        case 'UPDATE_BOOK':
            const updatedBooks=[...state.books];
            updatedBooks[action.payload.index]=action.payload.data;
            return {books:updatedBooks};
        case 'DELETE_BOOK':
            const books=[...state.books];
            return {books:books.filter((book,id)=>id!=action.payload.index)};
        default:
            return {...state};
            
    }

 }

  const store=createStore(LibraryReducer);
  export default store;
 