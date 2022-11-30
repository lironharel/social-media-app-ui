import { EmojiEmotions, Label, LocationOn, PermMedia } from "@mui/icons-material";
import { Button } from "@mui/material";
import "./share.css";

export default function Share() {
   return (
      <div className="card">
         <div className="shareWrapper">
            <div className="shareTopContainer">
               <img
                  src="assets/person/1.jpeg"
                  alt=""
                  className="profileImgLarge"
               />
               <input
                  placeholder={`What's on your mind Liron?`}
                  className="shareInput"
               />
            </div>
            <hr className="shareSeparator" />
            <div className="shareBottomContainer">
               <div className="shareOptionsList">
                  <div className="shareOption">
                     <PermMedia htmlColor="tomato" className="shareOptionIcon" />
                     <span className="shareOptionText">Photo or Video</span>
                  </div>
                  <div className="shareOption">
                     <Label htmlColor="blue" className="shareOptionIcon" />
                     <span className="shareOptionText">Tag</span>
                  </div>
                  <div className="shareOption">
                     <LocationOn htmlColor="green" className="shareOptionIcon" />
                     <span className="shareOptionText">Location</span>
                  </div>
                  <div className="shareOption">
                     <EmojiEmotions htmlColor="gold" className="shareOptionIcon" />
                     <span className="shareOptionText">Feelings</span>
                  </div>
               </div>
               <Button className="shareBtn" size="small" variant="contained" disableElevation>Share</Button>
            </div>
         </div>
      </div>
   );
}
