import "./rightbar.css"
import { Users } from "../../dummyData"
import OnlineUser from "../onlineUser/OnlineUser"

export default function Rightbar({profile}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const HomeRightbar = () => {
    return(
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src="/assets/gift.png" alt="" />
          <span className="birthdayText"><b>Pola Foster</b> e <b>3 outros amigos</b> fazem aniversário hoje</span>
        </div>
        <img className="rightbarAd" src="/assets/ad.png" alt="" />
        <h4 className="rightbarTitle">Amigos Online</h4>
        <ul className="rightbarFriendList">
        {Users.map(user=>(
          <OnlineUser key={user.id} user={user}/>
        ))}
        </ul>
      </>
    )
  }

  const ProfileRightBar = () => {
    return (
      <>
      <h4 className="rightbarTitle">Informações do usuário</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Cidade</span>
          <span className="rightbarInfoValue">Nova York</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Cidade natal</span>
          <span className="rightbarInfoValue">Madrid</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Relacionamento</span>
          <span className="rightbarInfoValue">Solteiro</span>
        </div>
      </div>
      <h4 className="rightbarTitle">Amigos</h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img className="rightbarFollowingImg" src={`${PF}person/1.jpeg`} alt="" />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img className="rightbarFollowingImg" src={`${PF}person/2.jpeg`} alt="" />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img className="rightbarFollowingImg" src={`${PF}person/3.jpeg`} alt="" />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img className="rightbarFollowingImg" src={`${PF}person/4.jpeg`} alt="" />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img className="rightbarFollowingImg" src={`${PF}person/5.jpeg`} alt="" />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img className="rightbarFollowingImg" src={`${PF}person/6.jpeg`} alt="" />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img className="rightbarFollowingImg" src={`${PF}person/7.jpeg`} alt="" />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
      </div>
      </>
    )
  }

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightBar/> : <HomeRightbar/>}
      </div>
    </div>
  )
}
