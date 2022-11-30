import "./post.css";
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function Post({username, userPhoto, desc, postPhoto, date, likes, comments}) {
   return (
      <div className="card">
         <div className="postWrapper">
            <div className="postHeader">
               <div className="postHeaderLeft">
                  <img src={userPhoto} alt="" className="profileImg postProfileImg" />
                  <h4 className="postName">{username}</h4>
                  <span className="postDate">{date}</span>
               </div>
               <MoreVertIcon className="postMoreOptionsBtn" />
            </div>
            <div className="postBody">
               <p className="postBodyText">{desc}</p>
               <img src={postPhoto} alt="" className="postBodyImg" />
            </div>
            <div className="postFooter">
               <div className="postFooterLeft">
                  <img src="assets/like.png" alt="" className="postReactionBtn" />
                  <img src="assets/heart.png" alt="" className="postReactionBtn" />
                  <span className="postLikesText">{`${likes} people liked this`}</span>
               </div>
               <div className="postFooterRight">
                  <span className="postCommentsText">{`${comments} comments`}</span>
               </div>
            </div>
         </div>
      </div>
   )
}
