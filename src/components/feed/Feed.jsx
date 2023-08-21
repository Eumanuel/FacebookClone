import { LineAxisOutlined } from "@mui/icons-material";
import { useEffect, useState  } from "react";

import Post from "../post/Post"
import Share from "../share/Share"
import "./feed.css"
import axios from "axios";


export default function Feed() {
  const [posts,setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async() =>{
      const res = await axios.get("posts/timeline/62840b7a7ed560e7e9b30691")
      console.log(res.data)
    }
    fetchPosts();
    //alert(res)
  },[])


  return (
    <div className="feed">
      <div className="feedWrapper">
        {/*<Share/>
        {Posts.map((post)=>(
          <Post key={post.id} post={post}/>
        ))}*/}
      </div>
    </div>
  )
}
