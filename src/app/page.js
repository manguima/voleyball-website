"use client";
import { ScoreBoard } from "@/components/ScoreBoard";
import { TeamWinComponent } from "@/components/TeamWinComponent";
import { Container, Flex } from "@mantine/core";
import { createContext, useContext, useEffect, useState } from "react";

const ScoreContext = createContext({});

export default function Home() {
  const [scoreTimeA, setScoreTimeA] = useState(0);
  const [scoreTimeB, setScoreTimeB] = useState(0);
  const [teamWin, setTeamWin] = useState(null);

  const [animateA, setAnimateA] = useState(false);
  const [animateB, setAnimateB] = useState(false);
  const [meme, setMeme] = useState(false);

  const [audioTeamA, setAudioTeamA] = useState(null);
  const [audioTeamB, setAudioTeamB] = useState(null);
  const [memeAudio, setMemeAudio] = useState(null);
  const [win, setWin] = useState(null);

  useEffect(() => {
    setAudioTeamA(new Audio("/images/teamA.mp3"));
    setAudioTeamB(new Audio("/images/teamB.mp3"));
    setMemeAudio(new Audio("/images/meme.mp3"));
    setWin(new Audio("/images/win.mp3"));
  }, []);

  useEffect(() => {
    if (scoreTimeA === 30) setTeamWin("A");
    if (scoreTimeB === 30) setTeamWin("B");

    // if (!!teamWin) win.play();
  }, [scoreTimeA, scoreTimeB]);

  return (
    <ScoreContext.Provider
      value={{
        scoreTimeA,
        setScoreTimeA,
        scoreTimeB,
        setScoreTimeB,
        teamWin,
        setTeamWin,
        audioTeamA,
        audioTeamB,
        animateA,
        setAnimateA,
        animateB,
        setAnimateB,
        win,
        meme,
        setMeme,
        memeAudio,
      }}
    >
      <Container
        p={0}
        fluid
        w={"100%"}
        h={"150svh"}
        style={{ contain: "paint" }}
      >
        <Flex style={{ position: "sticky", top: 0 }} h={"100svh"}>
          {!!teamWin ? <TeamWinComponent /> : <ScoreBoard />}
        </Flex>
      </Container>
    </ScoreContext.Provider>
  );
}

export const useScoreContext = () => useContext(ScoreContext);
