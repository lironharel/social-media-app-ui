import OnlineUsers from "./onlineUsers/OnlineUsers";
import {Users} from "../../dummyData"
import "./rightbar.css";

export default function Rightbar({route}) {
   const HomeRightbar = () => {
      return (
         <>
            <div className="rightbarBirthdayContainer">
               <img src="assets/gift.png" alt="" className="rightbarGiftIcon" />
               <span className="rightbarBirthdayText">
                  <b>Shira Melamed</b> and <b>3 other friends</b> have a birthday today.
               </span>
            </div>
            <img src="assets/ad.png" alt="" className="rightbarAdImg" />
            <OnlineUsers />
         </>
   )}

   const TimelineRightbar = () => {
      return (
         <>
            <div id="timelineRightbarUserInfo" className="timelineRightbarSection">
               <h3 className="rightbarTitle">User information</h3>
               <div className="rightbarUserInfoEntry">
                  <span className="rightbarUserInfoKey">City:</span>
                  <span className="rightbarUserInfoValue">Tel Aviv</span>
               </div>
               <div className="rightbarUserInfoEntry">
                  <span className="rightbarUserInfoKey">Hometown:</span>
                  <span className="rightbarUserInfoValue">New York City</span>
               </div>
               <div className="rightbarUserInfoEntry">
                  <span className="rightbarUserInfoKey">Job:</span>
                  <span className="rightbarUserInfoValue">Full Stack Engineer</span>
               </div>
            </div>
            <div id="timelineRightbarUserFriends" className="timelineRightbarSection">
               <h3 className="rightbarTitle">User Friends</h3>
               <div className="timelineRightbarUserFriendsGrid">
                  {Users.filter((user, i) => i < 6).map(user => 
                     <div className="timelineRightbarUserFriendContainer">
                        <img src={user.profilePicture} alt="" className="timelineRightbarUserFriendImg" />
                        <span className="timelineRightbarUserFriendName">{user.username}</span>
                     </div>
                  )}
               </div>
            </div>
         </>
      )
   }

   return (
      <div className="rightbar">
         <div className="rightbarContainer">
            {route === 'timeline'
            ? <TimelineRightbar />
            : <HomeRightbar />}
         </div>
      </div>
   );
}
