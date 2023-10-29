import React, { useCallback, useContext, useEffect, useState } from "react";
import { ctx } from "../../CtxData";

const formatTime = (time) => {
  let minutes = Math.floor(time / 60);
  let seconds = Math.floor(time - minutes * 60);
  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;
  return minutes + ":" + seconds;
};



export default function CountDown(props) {
  const [time, SetTimeLeft] = useState(props.seconds);
  const fTime = props.seconds;
  const ctxDt = useContext(ctx)
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

  const HandleButton = useCallback((fTime, time) => {
    console.log(`Thoi gian lam bai cua hoc sinh : ` + formatTime(fTime - time))
    ctxDt.SetSubmitTime(formatTime(fTime - time));
  }, [])
  return (
    <div>
      <div>{formatTime(time)}</div>
      <button onClick={() => HandleButton(fTime, time)}>Check</button>
    </div>
  );
}
