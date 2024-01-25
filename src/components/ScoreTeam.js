"use client";

import { Flex, Text } from "@mantine/core";

export const ScoreTeam = ({
  scoreTime,
  setScoreTime,
  audioTeam,
  setAnimate,
}) => {
  return (
    // <Flex>
    <Text
      c="#000000"
      style={{ pointerEvents: "all", userSelect: "all" }}
      fw={700}
      fz={"15vw"}
      onClick={() => {
        setScoreTime(scoreTime < 30 ? scoreTime + 1 : scoreTime);
        scoreTime !== 30 && audioTeam.play();
        setAnimate(true);
        setTimeout(() => {
          setAnimate(false);
        }, 4000);
      }}
    >
      {scoreTime?.toString().padStart(2, "0")}
    </Text>
    // </Flex>
    // null
  );
};
