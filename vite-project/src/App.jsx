import { useState } from "react";
import "./App.css";
import image from "./assets/img.png";
import shadow from "./assets/shadow.png";
import desk_img from "./assets/desk.img.svg";
import desk_shadow from "./assets/desk.shadow.png";
import Question_items from "./Components/Question_items";

function App() {
  const [answer, setAnswer] = useState(0);

  return (
    <div className="container">
      <div className="container_item1">
        <img className="img" src={image} alt="Image" />
        <img className="shadow" src={shadow} alt="Image" />
        <img className="desk_img" src={desk_img} alt="Image" />
        <img className="desk_shadow" src={desk_shadow} alt="Image" />
      </div>

      <div className="container_item2">
        <h1 className="headline">FAQ</h1>

        <div className="questions_container">
          <Question_items
            question_children="How many team members can I invite?"
            question_children_fontWeight={answer == 1 ? "700" : "400"}
            img_rotate={answer == 1 ? "180deg" : "360deg"}
            onClick={() => {
              answer !== 1 ? setAnswer(1) : answer == 1 && setAnswer(0);
            }}
            answer_display_status={answer == 1 ? "block" : "none"}
            answer_childer="You can invite only 5 person"
          />

          <Question_items
            question_children="What is the maximum file upload size?"
            question_children_fontWeight={answer == 2 ? "700" : "400"}
            img_rotate={answer == 2 ? "180deg" : "360deg"}
            onClick={() => {
              answer !== 2 ? setAnswer(2) : answer == 2 && setAnswer(0);
            }}
            answer_display_status={answer == 2 ? "block" : "none"}
            answer_childer="No more than 2GB. All files in your account must fit your allotted
            storage space."
          />

          <Question_items
            question_children="How do I reset my password?"
            question_children_fontWeight={answer == 3 ? "700" : "400"}
            img_rotate={answer == 3 ? "180deg" : "360deg"}
            onClick={() => {
              answer !== 3 ? setAnswer(3) : answer == 3 && setAnswer(0);
            }}
            answer_display_status={answer == 3 ? "block" : "none"}
            answer_childer="You can reset your password with recovery email or recovery phone
            number"
          />

          <Question_items
            question_children="Can I cancel my subscription?"
            question_children_fontWeight={answer == 4 ? "700" : "400"}
            img_rotate={answer == 4 ? "180deg" : "360deg"}
            onClick={() => {
              answer !== 4 ? setAnswer(4) : answer == 4 && setAnswer(0);
            }}
            answer_display_status={answer == 4 ? "block" : "none"}
            answer_childer="Yes. Anytime in subscription's settings"
          />

          <Question_items
            question_children="Do you provide additional support?"
            question_children_fontWeight={answer == 5 ? "700" : "400"}
            img_rotate={answer == 5 ? "180deg" : "360deg"}
            onClick={() => {
              answer !== 5 ? setAnswer(5) : answer == 5 && setAnswer(0);
            }}
            answer_display_status={answer == 5 ? "block" : "none"}
            answer_childer="We have 24/7 online support service or technical group"
          />
        </div>
      </div>
    </div>
  );
}

export default App;