import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./index.css";
import demonSlayerImg from "./assets/Hashiras.png";

export default function FrontPage() {
  const [text, setText] = useState("");
  const [isFinished, setIsFinished] = useState(false);
  const navigate = useNavigate();

  const fullDialogue =
  `  Hey Raisa… it’s me, Rengoku.
   I heard it’s your special.
   Many wishes from Hashiras.
   You’ve worked hard, 
   so it’s time to smile and enjoy.
   Come on, click Next !! 💫`;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < fullDialogue.length) {
        setText((prev) => prev + fullDialogue.charAt(i));
        i++;
      } else {
        clearInterval(interval);
        setIsFinished(true);
      }
    }, 40);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    navigate("/birthday");
  };

  return (
    <div className="frontpage-container">
      {/* LEFT SIDE — TEXT */}
      <div className="frontpage-left">
        <div className="frontpage-box">
          <p className="frontpage-text">{text}</p>

          {isFinished && (
            <button
              onClick={handleNext}
              className="next-btn"
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              Next
            </button>
          )}
        </div>
      </div>

      {/* RIGHT SIDE — IMAGE */}
      <div className="frontpage-right">
        <img
          src={demonSlayerImg}
          alt="Demon Slayer Hashiras"
          className="right-image"
        />
      </div>
    </div>
  );
}
