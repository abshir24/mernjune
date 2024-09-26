import { Link } from 'react-router-dom';

function BookList({books}){
    return (
        <div>
            <h1>Book List</h1>
            <table>
                <tr>
                    <td>Title</td>
                    <td>Author</td>
                    <td>Action</td>
                </tr>
                { books.map(book => (
                    <tr>
                        
                        <td>{book.title}</td>
                        <td>Author:{book.author}</td>
                        <td><Link to={`/edit/${book._id}`}>Edit</Link></td>   
                        <td><Link to={`/delete/${book._id}`}>Delete</Link></td>   
                    </tr>
                ))}
            </table>
            
            <Link to="/new">Add New Book</Link>
        </div>
    )
}

export default BookList