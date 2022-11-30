import Topbar from '../../components/topbar/Topbar'
import Leftbar from '../../components/leftbar/Leftbar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import './home.css'

export default function Home({setRoute}) {
  return (
  <>
    <Topbar setRoute={setRoute}/>
    <div className="homeMainContent">
      <Leftbar />
      <Feed />
      <Rightbar />
    </div>
  </>
  )
}
