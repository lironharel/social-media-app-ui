import { Posts, Users } from "../../dummyData";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";

export default function Feed() {
   const PostList = Posts.map((post) => {
      const postUser = Users.filter(user => user.id === post.userId)[0]
      return (
         <Post 
            key={post.id}
            username={postUser.username}
            userPhoto={postUser.profilePicture}
            desc={post?.desc}
            postPhoto={post.photo}
            date={post.date}
            likes={post.like}
            comments={post.comment}
         />
   )});

   return (
      <div className="feed">
         <div className="feedWrapper">
            <Share />
            {PostList}
         </div>
      </div>
   );
}
