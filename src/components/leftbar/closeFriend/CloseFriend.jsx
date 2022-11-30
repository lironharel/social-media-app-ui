import './closeFriend.css'

export default function Friend({user}) {
  return (
   <li className="leftbarFriend">
      <img src={user.profilePicture} alt="" className="profileImg leftbarFriendImg" />
      <span className="leftbarFriendText">{user.username}</span>
   </li>
  )
}
