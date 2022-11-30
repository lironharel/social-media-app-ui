import "./topbar.css";
import { Chat, Notifications, Person, Search } from "@mui/icons-material";

export default function Topbar({setRoute}) {
   return (
      <div className="topbarContainer">
         <div className="topbarLeft">
            <span className="topbarLogo">EasySocial</span>
         </div>
         <div className="topbarCenter">
            <div className="searchBar">
               <Search className="searchIcon" fontSize="20" />
               <input placeholder="Search for friends, posts or videos" className="searchInput" />
            </div>
         </div>
         <div className="topbarRight">
            <div className="topbarLinks">
               <span className="topbarLink" onClick={() => setRoute('home')}>Homepage</span>
               <span className="topbarLink" onClick={() => setRoute('timeline')}>Timeline</span>
            </div>
            <div className="topbarIcons">
               <div className="topbarIconItem">
                  <Person />
                  <span className="topbarIconBadge">1</span>
               </div>
               <div className="topbarIconItem">
                  <Chat />
                  <span className="topbarIconBadge">2</span>
               </div>
               <div className="topbarIconItem">
                  <Notifications />
                  <span className="topbarIconBadge">1</span>
               </div>
            </div>
            <img src="assets/person/1.jpeg" alt="" className="profileImg topbarProfileImg" />
         </div>
      </div>
   );
}
