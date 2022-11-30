import "./onlineUser.css";

export default function OnlineUser({user}) {
   return (
      <li className="rightbarFriendContainer">
         <div className="rightbarFriendImgContainer">
            <img
               src={user.profilePicture}
               alt=""
               className="profileImgMedium rightbarFriendImg"
            />
            <div className="rightbarOnlineBadge"></div>
         </div>
         <span className="rightbarFriendText">{user.username}</span>
      </li>
   );
}
