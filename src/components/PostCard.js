import { AiFillDelete } from "react-icons/ai";
import { deleteDoc, doc } from "firebase/firestore";
import { db, auth } from "../firebase/config";
export const PostCard = ({ post, toggle, setToggle }) => {
  const isAuth = JSON.parse(localStorage.getItem("isAuth"));
  const { id, title, description, author } = post;
  async function handleDelete() {
    const documentRef = doc(db, "posts", id);
    await deleteDoc(documentRef);
    setToggle(!toggle);
  }
  return (
    <div className="card">
      <p className="title">{title}</p>
      <p className="description">{description}</p>
      <p className="control">
        <span className="author">{author.name}</span>
        {isAuth && author.id === auth.currentUser.uid && (
          <span onClick={handleDelete} className="delete">
            <AiFillDelete />
          </span>
        )}
      </p>
    </div>
  );
};
