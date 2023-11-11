import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";
import { db } from "../firebase/FirebaseConfig";

function AddBook() {
  const [Title, setTitle] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const docRef = await addDoc(collection(db, "books"), { Title });
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Title:</span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
          value={Title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <button className="btn btn-primary my-10">Add</button>
    </form>
  );
}

export default AddBook;
