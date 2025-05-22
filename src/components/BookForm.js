import React from 'react'

export const BookForm = ({handleChange,formData,editIndex,handleSubmit}) => {
  return (
    <div>

          <input
                name = "title"
                placeholder='Book Title'
                value={formData.title}
                onChange={handleChange}
                />
                <input
                name='author'
                placeholder='Author'
                value={formData.author}
                onChange={handleChange}
                />
                <input
                name='isbn'
                placeholder='ISBN'
                value={formData.isbn}
                onChange={handleChange}
                />
                <button onClick={handleSubmit}>
                    {editIndex !== null ? 'Update Book' :'Add Book'}
                </button>
        
    </div>
  )
}
