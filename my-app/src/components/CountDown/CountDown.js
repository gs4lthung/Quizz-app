import React, { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormatSelectedAnswer, PostQuestionData } from "../../layouts/ScreenQuiz/QuizService";


export function formatTime(time) {
  let minutes = Math.floor(time / 60);
  let seconds = Math.floor(time - minutes * 60);
  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;
  return minutes + ":" + seconds;
};
export const CountDown = forwardRef((props, ref) => {
  const [time, SetTimeLeft] = useState(props.seconds);
  const fTime = props.seconds;
  let interval;

  const nav = useNavigate();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    interval = setInterval(() => {
      SetTimeLeft((pre) => {
        if (pre <= 0) {
          clearInterval(interval);
          return 0;
        }
        return pre - 1;
      });
    }, 100);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const TimeOut = async () => {
      if (time <= 0) {

        clearInterval(interval);
        const formattedTime = formatTime(props.seconds);
        localStorage.setItem("submitTime", formattedTime);
        const formattedAnswers = FormatSelectedAnswer(props.selectedAnswers);
        await PostQuestionData(props.quizId, formattedAnswers, props.navError);
        nav('/quiz/result');
      }
    }
    TimeOut();
  }, [interval, nav, props.navError, props.quizId, props.seconds, props.selectedAnswers, time]);

  useImperativeHandle(ref, () => ({
    getTime: () => fTime - time,
  }));

  return (
    <>
      {formatTime(time)}
    </>
  );
})
