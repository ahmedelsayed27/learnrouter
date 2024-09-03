import { useParams } from "react-router-dom";

function PostDetails() {
    const id = useParams().id;
    // const {id} = useParams();

    return (  
        <div>
            <h2>post id is : {id} </h2>
            
        </div>
    );
}

export default PostDetails;