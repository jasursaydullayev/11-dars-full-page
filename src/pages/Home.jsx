import { useCollection } from "../hooks/useCollection";
import { db } from "../firebase/FirebaseConfig";
import { doc, deleteDoc } from "firebase/firestore";
import AddBook from "../components/AddBook";
function Home() {
  const { documents: books, error } = useCollection("books");

  if (!books) {
    return <h1 className="text-3xl mt-10">Loading...</h1>;
  }

  const handleDelete = (id) => {
    deleteDoc(doc(db, "books", id))
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex flex-col gap-3 my-10">
      {books &&
        books.map((book) => {
          return (
            <div
              onClick={() => handleDelete(book.id)}
              className="bg-base-300 p-4 rounded text-xl cursor-pointer"
              key={book.id}
            >
              <p>{book.Title}</p>
            </div>
          );
        })}
      <AddBook />
    </div>
  );
}

export default Home;
