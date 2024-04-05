import React from "react";
import arrow from "../assets/down.arrow.png";

const Question_items = ({
  question_children,
  question_children_fontWeight,
  img_rotate,
  onClick,
  answer_display_status,
  answer_childer,
}) => {
  return (
    <div className="item">
      <div className="question_cont">
        <h2
          style={{ fontWeight: question_children_fontWeight }}
          className="question"
        >
          {question_children}
        </h2>
        <img
          style={{ rotate: img_rotate }}
          onClick={onClick}
          className="arrow"
          src={arrow}
          alt="Arrow"
        />
      </div>
      <p style={{ display: answer_display_status }} className="answer">
        {answer_childer}
      </p>
    </div>
  );
};

export default Question_items;