import React, { forwardRef, useEffect, useImperativeHandle, useState } from "react";


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

  useEffect(() => {
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
    if (time <= 0) {
      clearInterval(interval);
    }
  }, [time]);

  useImperativeHandle(ref, () => ({
    getTime: () => fTime - time,
  }));

  return (
    <>
      {formatTime(time)}
    </>
  );
})
