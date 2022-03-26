import Timer from "./Timer";
import React, { ReactChildren } from "react";


interface AnswerOptionProps {
  value: number;
  onAnswerSelected: (answer: number) => void;
  children: ReactChildren | string;
  selected: boolean;
}

function AnswerOption(props: AnswerOptionProps) {
  return (
    <li>
      <button onClick={() => props.onAnswerSelected(props.value)} className={props.selected ? "selected" : ""}>
        {props.children}
      </button>
    </li>
  )
}

interface QnAProps {
  questionTime: boolean;
  setQuestionTime: (questionTime: boolean) => void;
  answer: number;
  setAnswer: (answer: number) => void;
}

export default function QnA(props: QnAProps) {
  return (
    <section className="qna" onClick={() => props.setQuestionTime(true)}>
      <div className="cubes">
        <div className="cube" />
        <div className="cube" />
        <div className="cube" />
        <div className="cube" />
        <div className="cube" />
        <div className="cube" />
      </div>
      {props.questionTime && (
        <>
          <h1 className="question">
            Which network has the least gas fees?
          </h1>
          <div className="answers">
            <ul>
              <AnswerOption
                onAnswerSelected={props.setAnswer}
                value={2}
                selected={props.answer === 2}
              >
                Ethereum
              </AnswerOption>
              <AnswerOption
                onAnswerSelected={props.setAnswer}
                value={1}
                selected={props.answer === 1}
              >
                Polygon
              </AnswerOption>
              <AnswerOption
                onAnswerSelected={props.setAnswer}
                value={3}
                selected={props.answer === 3}
              >
                Binance Smart Chain
              </AnswerOption>
            </ul>
          </div>
          <Timer seconds={15} />
        </>
      )}
    </section>
  )
}
