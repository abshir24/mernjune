import { Link } from 'react-router-dom';

function BookList({books}){
    return (
        <div>
            <h1>Book List</h1>
            <div>
                { books.map(book => (
                    <div>
                        <p>Title:{book.title}</p>
                        <p>Author:{book.author}</p>
                        <Link to={`/edit/${book._id}`}>Edit</Link>
                    </div>
                ))}
            </div>
            
            <Link to="/new">Add New Book</Link>
        </div>
    )
}

export default BookList