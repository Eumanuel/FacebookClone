import "./share.css"
import {PermMedia, Label, Room, EmojiEmotions} from "@mui/icons-material"

export default function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
          <div className="shareTop">
              <img className="shareProfileImg" src="/assets/person/1.jpeg" alt="" />
              <input type="text" className="shareInput" placeholder="O que se passa na sua mente hoje?" />
          </div>
          <hr className="shareHr" />
          <div className="shareBotton">
              <div className="shareOptions">
                  <div className="shareOption">
                      <PermMedia htmlColor="tomato" className="shareIcon"/>
                      <span className="shareOptionText">Foto ou Vídeo</span>
                  </div>
                  <div className="shareOption">
                      <Label htmlColor="blue" className="shareIcon"/>
                      <span className="shareOptionText">Marcar</span>
                  </div>
                  <div className="shareOption">
                      <Room htmlColor="green" className="shareIcon"/>
                      <span className="shareOptionText">Local</span>
                  </div>
                  <div className="shareOption">
                      <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
                      <span className="shareOptionText">Sentimento</span>
                  </div>
              </div>
              <button className="shareButton">Compartilhar</button>
          </div>
      </div>
    </div>
  )
}
