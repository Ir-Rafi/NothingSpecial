import "./message.css";
import unnamed from "../assets/Toni_Kroos.png";

export default function MessagePage() {
  return (
    <div className="message__wrapper">
      <div className="message__left">
        <h1>Message From Toni Kroos</h1>
        <p>
          Wish u the happiest Birthday from me and Real Madrid Academy. 🎂✨
        </p>
        <h1>Message from Rafi</h1>
        <p>
        Happy Birthday, Raisa 🎉
       It’s been a while since we chatted — I honestly miss those random yapping sessions with you 😅
       Hope everything’s going great on your side.(Rag kore thakio na ja hoar hoise vule jao)
       Don’t stress too much, okay? You’re doing amazing. Being the elder daughter isn’t easy — I’ve seen it with my mom too, so I get the drill.
       Just remember to smile, take it easy, and stay happy always 💫
        </p>
        <button onClick={() => window.history.back()} className="back__btn">
          ← Go Back
        </button>
      </div>
      <div className="message__right">
        <img src={unnamed} alt="Mehwish" />
      </div>
    </div>
  );
}
