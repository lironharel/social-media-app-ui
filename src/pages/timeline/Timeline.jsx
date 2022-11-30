import Topbar from '../../components/topbar/Topbar'
import Leftbar from '../../components/leftbar/Leftbar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import TimelineCover from '../../components/timelineCover/TimelineCover'
import './timeline.css'

export default function Timeline({setRoute}) {
  return (
    <>
      <Topbar setRoute={setRoute}/>
      <div className="timelineMainContent">
         <Leftbar />
         <div className="timelineRightContainer">
            <TimelineCover />
            <div className="timelineBottomContainer">
               <Feed />
               <Rightbar route="timeline" />
            </div>
         </div>
      </div>
    </>
  )
}
