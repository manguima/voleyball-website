"use client";

import { ActionIcon, Flex } from "@mantine/core";
import { IconCaretDownFilled } from "@tabler/icons-react";
import { IconCaretUpFilled } from "@tabler/icons-react";
import { animate } from "framer-motion";
import { useEffect } from "react";

export const ScoreBtnTeam = ({
  scoreTime,
  setScoreTime,
  audioTeam,
  setAnimate,
  animate,
}) => {
  return (
    <Flex
      direction={"column"}
      gap={"2vh"}
      style={{
        pointerEvents: "all",
        userSelect: "all",
      }}
    >
      <ActionIcon
        onClick={() => {
          setScoreTime(scoreTime < 30 ? scoreTime + 1 : scoreTime);
          scoreTime !== 30 && audioTeam.play();
          if (!animate) {
            setAnimate(true);
          }
        }}
        color="#fff"
        c={"#2F2BA3"}
        size={"4vw"}
      >
        <IconCaretUpFilled size={"4vw"} />
      </ActionIcon>
      <ActionIcon
        onClick={() => {
          setScoreTime(scoreTime > 0 ? scoreTime - 1 : scoreTime);
        }}
        color="#fff"
        c={"#2F2BA3"}
        size={"4vw"}
      >
        <IconCaretDownFilled size={"4vw"} />
      </ActionIcon>
    </Flex>
  );
};
