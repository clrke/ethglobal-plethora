import { useEffect, useRef } from "react";

function clear(ctx: any) {
  ctx.clearRect(0, 0, 80, 80);
}

function setTrack(ctx: any) {
  ctx.strokeStyle = 'hsla(2, 8%, 46%, 0.45)';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.arc(36, 36, 27, 0, Math.PI * 2);
  ctx.stroke();
}

function setTime(ctx: any, until: number, now: number, total: number) {
  ctx.strokeStyle = 'hsl(2, 8%, 46%)';
  ctx.lineWidth = 8;
  ctx.beginPath();
  ctx.arc(
    36,
    36,
    27,
    Math.PI / -2,
    (Math.PI * 2) * ((until - now % total) / total) + (Math.PI / -2),
    false
  );
  ctx.stroke();
}

export default function Timer(props: { seconds: number }) {

  const timerRef = useRef<HTMLCanvasElement>(null);

  function set() {
    const today = new Date();

    const timerElement = timerRef.current!.getContext('2d');

    clear(timerElement);
    setTrack(timerElement);
    setTime(timerElement, 0, today.getSeconds() % props.seconds, props.seconds);

    if (today.getSeconds() < 30) {
      requestAnimationFrame(set);
    }
  }

  useEffect(() => {
    requestAnimationFrame(set);
  }, [set, timerRef]);

  return (
    <time>
      <canvas width="80" height="80" ref={timerRef} />
    </time>
  )

}
