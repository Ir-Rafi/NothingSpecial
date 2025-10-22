import { useEffect, useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";  
import img1 from "../assets/1.png";
import hat from "../assets/hat.png";
import unnamed from "../assets/unnamed.png";
import balloon1 from "../assets/balloon1.png";
import balloon2 from "../assets/balloon2.png";
import decorate_flower from "../assets/decorate_flower.png";
import decorate from "../assets/decorate.png";
import smiley_icon from "../assets/smiley_icon.png";

export default function BirthdayPage() {
const navigate = useNavigate();
  const [dateText, setDateText] = useState("");
  const [letterText, setLetterText] = useState("");
  const [titleLetter, setTitleLetter] = useState("");
  const [letterOpen, setLetterOpen] = useState(false);

  
  const datatxtletter =
    "My love, you are a very special girl. I always silently thank you for coming into my life. Today, I wish you all the best — lots of health and joy. I always hope we will celebrate many more birthdays like this together. Happy birthday to you.💕";
  const titleLetterText = "To you";

  
  useEffect(() => {
    const datetxt = "23rd October";
    let idx = 0;
    const chars = Array.from(datetxt);
    let mounted = true;
  
    
    setDateText("");
  
    const interval = setInterval(() => {
      if (!mounted) {
        clearInterval(interval);
        return;
      }
      
      if (idx < chars.length) {
        setDateText(chars.slice(0, idx + 1).join(""));
        idx++;
      } else {
        clearInterval(interval);
      }
    }, 120);
  
    return () => {
      mounted = false;
      clearInterval(interval);
    };
  }, []);
  
  useEffect(() => {
    if (letterOpen) {
      let idxTitle = 0;
      let idxLetter = 0;

      const titleInterval = setInterval(() => {
        if (idxTitle < titleLetterText.length) {
          setTitleLetter((prev) => prev + titleLetterText[idxTitle]);
          idxTitle++;
        } else clearInterval(titleInterval);
      }, 100);

      const letterInterval = setTimeout(() => {
        const interval = setInterval(() => {
          if (idxLetter < datatxtletter.length) {
            setLetterText((prev) => prev + datatxtletter[idxLetter]);
            idxLetter++;
          } else clearInterval(interval);
        }, 40);
      }, 2000);
    }
  }, [letterOpen]);

  return (
    <div id="wrapper">
      <div className="flag__birthday">
        <img src={img1} alt="" width={350} className="flag__left" />
        <img src={img1} alt="" width={350} className="flag__right" />
      </div>

      <div className="content">
        <div className="left">
          <div className="title">
            <h1 className="happy">
              {"Happy".split("").map((ch, i) => (
                <span key={i} style={{ "--t": `${4 + i * 0.2}s` }}>
                  {ch}
                </span>
              ))}
            </h1>
            <h1 className="birthday">
              {"Birthday".split("").map((ch, i) => (
                <span key={i} style={{ "--t": `${5 + i * 0.2}s` }}>
                  {ch}
                </span>
              ))}
            </h1>
            <div className="hat">
              <img src={hat} alt="" width={130} />
            </div>
          </div>

          <div className="date__of__birth">
            <span>{dateText}</span>
          </div>

          <div className="btn">
            <button id="btn__letter" onClick={() => navigate("/message")}>
              <div className="mail">
                Click Here <i className="fa-regular fa-envelope"></i>
              </div>
            </button>
          </div>
        </div>

        <div className="right">
          <div className="box__account">
            <div className="image">
              <img src={unnamed} alt="" />
            </div>
            <div className="name">
              <i className="fa-solid fa-heart"></i>
              <span>Raisa</span>
              <i className="fa-solid fa-heart"></i>
            </div>
            <div className="balloon_one">
              <img width={100} src={balloon1} alt="" />
            </div>
            <div className="balloon_two">
              <img width={100} src={balloon2} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* Decorations */}
      {[1, 2, 3, 4, 5].map((n) => (
        <div
          key={n}
          className={`decorate_star star${n}`}
          style={{ "--t": `${15 + n * 0.2}s` }}
        ></div>
      ))}
      {[1, 2, 3].map((n) => (
        <div
          key={n}
          className={`decorate_flower--${["one", "two", "three"][n - 1]}`}
          style={{ "--t": `${15 + n * 0.3}s` }}
        >
          <img width={20} src={decorate_flower} alt="" />
        </div>
      ))}
      <div className="decorate_bottom">
        <img src={decorate} alt="" width={100} />
      </div>
      <div className="smiley__icon">
        <img src={smiley_icon} alt="" width={100} />
      </div>

      
      <div className={`boxMail ${letterOpen ? "active" : ""}`}>
        {letterOpen && (
          <>
            <i
              className="fa-solid fa-xmark"
              onClick={() => {
                setLetterOpen(false);
                setLetterText("");
                setTitleLetter("");
              }}
            ></i>
            <div className="boxMail-container">
              <div className="card1">
                <div className="userImg">
                  <img src={unnamed} alt="" />
                </div>
                <h4 className="username">
                  <span className="underline"></span>
                </h4>
                <h3>Happy Birthday</h3>
                <div className="imageCute">
                  <img src={cute1} alt="" />
                </div>
              </div>
              <div className="card2">
                <div className="card2-content">
                  <h3>{titleLetter}</h3>
                  <h2>{letterText}</h2>
                  <div className="imageCute2">
                    <img src={cute2} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
