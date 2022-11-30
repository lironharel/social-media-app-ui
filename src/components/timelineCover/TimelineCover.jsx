import "./timelineCover.css";

export default function TimelineCover() {
   return (
      <div className="timelineCoverContainer">
         <img src="assets/post/3.jpeg" alt="" className="timelineCoverImg" />
         <div className="timelineProfilePhotoContainer">
            <img src="assets/person/7.jpeg" alt="" className="timelineProfilePhotoImg" />
            <h1 className="timelineProfilePhotoName">Liron Harel</h1>
            <span className="timelineProfilePhotoDesc">Think big!</span>
         </div>
      </div>
   );
}
