import React from "react";
import { Link } from "react-router-dom";

function PostsList({posts , iswait , deletepost}) {
    
    return ( 
        
        <div className="container">
  
        <h1 className="text-center">Posts</h1>
        
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">title</th>
              <th scope="col">post</th>
              <th scope="col">delete</th>
            </tr>
          </thead>
          <tbody>
            {posts && posts.map((post) => 
                <tr key={post.id}>
                  <th scope="row">{post.id}</th>
                  <td >{post.title}</td>
                  <td>{post.body}</td>
                  <td>
                  <button type="button" onClick={() => deletepost(post.id)} className="btn btn-danger">Delete</button>
                  </td>
                  <td>
                  <Link to={`/posts/${post.id}`} type="button"  className="btn btn-info">Details</Link>
                  </td>
                </tr>
              )}
          </tbody>
        </table>
      </div>
     );
}

export default PostsList;

 