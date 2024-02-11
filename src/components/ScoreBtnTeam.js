"use client";

import { ActionIcon, Flex } from "@mantine/core";
import { IconCaretDownFilled } from "@tabler/icons-react";
import { IconCaretUpFilled } from "@tabler/icons-react";

export const ScoreBtnTeam = ({
  scoreTime,
  setScoreTime,
  audioTeam,
  setAnimate,
  animate,
}) => {
  return (
    <Flex
      direction={"row"}
      justify={"space-between"}
      gap={"2vh"}
      w={"38vw"}
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
        style={{ background: "#000" }}
        size={"4vw"}
      >
        <IconCaretUpFilled size={"4vw"} style={{ color: "#fff" }} />
      </ActionIcon>
      <ActionIcon
        onClick={() => {
          setScoreTime(scoreTime > 0 ? scoreTime - 1 : scoreTime);
        }}
        style={{ background: "#000" }}
        size={"4vw"}
      >
        <IconCaretDownFilled size={"4vw"} style={{ color: "#fff" }} />
      </ActionIcon>
    </Flex>
  );
};
