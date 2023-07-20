import { PostCard } from "../components";
import { useEffect, useRef, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase/config";
import { useTitle } from "../hooks/useTitle";
import { SkeletonCard } from "../components/SkeletonCard";
export const HomePage = () => {
  useTitle("Home");
  const [posts, setPosts] = useState(new Array(2).fill(false));
  const postsRef = useRef(collection(db, "posts"));
const [toggle,setToggle]=useState(false);
  useEffect(() => {
    async function getPosts() {
      const data = await getDocs(postsRef.current);
      setPosts(
        data.docs.map((documents) => ({
          ...documents.data(),
          id: documents.id,
        }))
      );
    }
    getPosts();
  
  }, [postsRef ,toggle]);

  return (
    <section>
      {posts.map((post,index) => (
        post ?  (<PostCard key={post.id} post={post}  toggle={toggle} setToggle={setToggle}/>) :(<SkeletonCard key={index}/>)
       
      ))}
    </section>
  );
};
