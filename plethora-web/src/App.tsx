import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import Hls from "hls.js";
import Plyr from 'plyr';
import party from 'party-js';
import QnA from "./QnA";
// import { authenticate, generateChallenge } from './repositories/authentication/login';
// import { signText } from './repositories/ether-service';
import ConnectWallet from './ConnectWallet';

function App() {
  const [nickname, setNickname] = useState<string>("");
  const [user, setUser] = useState<string | null>(null);
  const [answer, setAnswer] = useState<number>(-1);
  const [questionTime, setQuestionTime] = useState<boolean>(false);
  const videoStream = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoStream.current!

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource('https://cdn.livepeer.com/hls/c9b5ibnt739irdy9/index.m3u8');
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, async function () {
        await video.play();
      });
    }

    Plyr.setup(video);
  }, []);

  return (
    <div className="App">
      <section
        className="stream"
        onClick={(e) => party.confetti(e.target as HTMLElement)}
      >
        <video
          preload="none"
          id="player"
          autoPlay
          controls
          crossOrigin={""}
          ref={videoStream}
          width="800"
        />
      </section>
      {user ? (
        <section className="auth">
          <div className="cubes">
            <div className="cube" />
            <div className="cube" />
            <div className="cube" />
            <div className="cube" />
            <div className="cube" />
            <div className="cube" />
          </div>
          Hello, {user}!
          <QnA
            answer={answer}
            setAnswer={setAnswer}
            questionTime={questionTime}
            setQuestionTime={setQuestionTime}
          />
        </section>
      ) : (
        <section className="non-auth">
          <div className="cubes">
            <div className="cube" />
            <div className="cube" />
            <div className="cube" />
            <div className="cube" />
            <div className="cube" />
            <div className="cube" />
          </div>
          <input
            type="text"
            name="nickcname"
            value={nickname}
            onChange={e => setNickname(e.target.value)}
            placeholder="Set your nickname"
          />
          <ConnectWallet
            setUser={setUser}
            nickname={nickname}
          />
        </section>
      )}
    </div>
  );
}

export default App;
