import {
   Bookmark,
   Chat,
   Event,
   Group,
   HelpOutline,
   PlayCircleFilledOutlined,
   RssFeed,
   School,
   WorkOutline,
} from "@mui/icons-material";
import { Button } from "@mui/material";
import { Users } from "../../dummyData";
import Friend from "./closeFriend/CloseFriend";
import "./leftbar.css";

export default function Leftbar() {
   return (
      <div className="leftbar">
         <div className="leftbarWrapper">
            <ul className="leftbarOptionsList">
               <li className="leftbarOption">
                  <RssFeed className="leftbarOptionIcon" />
                  <span className="leftbarOptionText">Feed</span>
               </li>
               <li className="leftbarOption">
                  <Chat className="leftbarOptionIcon" />
                  <span className="leftbarOptionText">Chats</span>
               </li>
               <li className="leftbarOption">
                  <PlayCircleFilledOutlined className="leftbarOptionIcon" />
                  <span className="leftbarOptionText">Videos</span>
               </li>
               <li className="leftbarOption">
                  <Group className="leftbarOptionIcon" />
                  <span className="leftbarOptionText">Groups</span>
               </li>
               <li className="leftbarOption">
                  <Bookmark className="leftbarOptionIcon" />
                  <span className="leftbarOptionText">Bookmarks</span>
               </li>
               <li className="leftbarOption">
                  <HelpOutline className="leftbarOptionIcon" />
                  <span className="leftbarOptionText">Questions</span>
               </li>
               <li className="leftbarOption">
                  <WorkOutline className="leftbarOptionIcon" />
                  <span className="leftbarOptionText">Jobs</span>
               </li>
               <li className="leftbarOption">
                  <Event className="leftbarOptionIcon" />
                  <span className="leftbarOptionText">Events</span>
               </li>
               <li className="leftbarOption">
                  <School className="leftbarOptionIcon" />
                  <span className="leftbarOptionText">Courses</span>
               </li>
            </ul>

            <Button
               className="leftbarShowMoreBtn"
               size="small"
               disableRipple
               sx={{
                  "&.MuiButtonBase-root:hover": {
                     bgcolor: "transparent",
                     color: "#0f4d8a",
                  },
               }}
            >
               Show More
            </Button>
            <hr className="leftbarSeperator" />
            <ul className="leftbarFriendsList">
               {Users.map((user) => (
                  <Friend key={user.id} user={user} />
               ))}
            </ul>
         </div>
      </div>
   );
}
