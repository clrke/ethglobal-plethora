import React, { ReactChildren, useEffect, useRef, useState } from 'react';
import './App.css';
import Hls from "hls.js";
import Plyr from 'plyr';
import party from 'party-js';
import Timer from "./Timer";
import QnA from "./QnA";
// import { authenticate, generateChallenge } from './repositories/authentication/login';
// import { signText } from './repositories/ether-service';
import ConnectWallet from './ConnectWallet';

function App() {
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

  // const login = async (address: string) => {
  //   if (getAuthenticationToken()) {
  //     navigation.navigate("CreateProfile");

  //     return;
  //   }

  //   console.log('login: address', address);
  //   // const token = await getData('auth_token');
  //   // we request a challenge from the server
  //   const challengeResponse = await generateChallenge(address);
  //   const signature = await signText(challengeResponse.data.challenge.text);
  //   const accessTokens = await authenticate(address, signature);

  //   if (signature !== null) {// sign the text with the wallet

  //     console.log(signature);
  //     return accessTokens.data;
  //   }
  //   console.log("error");
  // };

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
        <QnA
          answer={answer}
          setAnswer={setAnswer}
          questionTime={questionTime}
          setQuestionTime={setQuestionTime}
        />
      ) : (
        <ConnectWallet setUser={setUser} />
      )}
    </div>
  );
}

export default App;

let authenticationToken: string | null = null;

export let setAuthenticationToken = (token: string) => {
  authenticationToken = token;
  console.log('setAuthenticationToken: token', token);
};

function getAuthenticationToken() {
  return authenticationToken;
}

