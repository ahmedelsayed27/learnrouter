import NavBar from "./navbar";
import { useEffect, useState } from "react";
import PostsList from "./postsList.js";
import loadingcircle from "./loadingcircle.js";
function Posts() {

const [posts, setPosts] = useState(null);
const [iswait, setiswait] = useState(true);
useEffect(() => {
    console.log("one fire");
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        return  response.json();
      })
      .then((data) => {
        setPosts(data);
        console.log(data);
        setiswait(false);
      })
      .catch((error) => {
        console.log(error);
        setiswait(false);
      });
  }, []);

  function deletepost(id) {
    const newposts = posts.filter((post) => post.id !== id);
    setPosts(newposts);
  }

    return (
      <>
          <NavBar />
          {iswait && loadingcircle()} 
          { posts &&<PostsList posts={posts} iswait={iswait} deletepost={deletepost} />}
      </>
    );
  }

export default Posts;
