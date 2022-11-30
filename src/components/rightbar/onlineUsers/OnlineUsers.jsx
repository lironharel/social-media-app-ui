import './onlineUsers.css'
import { Users } from "../../../dummyData";
import OnlineUser from './onlineUser/OnlineUser';

export default function OnlineUsers() {
  return (
   <div className="rightbarOnlineFriendsContainer">
      <h3 className="rightbarTitle">Online Friends</h3>
      <ul className="rightbarFriendsList">
         {Users.map(user => 
            <OnlineUser key={user.id} user={user} /> 
         )}
      </ul>
   </div>
   
  )
}
