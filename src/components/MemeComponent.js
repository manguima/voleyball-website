"use client";

import { useScoreContext } from "@/app/page";
import { ActionIcon, Box, Center, Image } from "@mantine/core";
import { IconMoodHappy } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";

export const MemeComponent = () => {
  const { meme, setMeme, memeAudio } = useScoreContext();

  return (
    <>
      <Box
        justify={"center"}
        style={{
          pointerEvents: "all",
          userSelect: "all",
          position: "absolute",
          marginTop: "20%",
        }}
      >
        <ActionIcon
          onClick={() => {
            setMeme(true);
            memeAudio?.play();
            setTimeout(() => {
              setMeme(false);
            }, 700);
          }}
          color="#fff"
          c={"#2F2BA3"}
          size={"4vw"}
        >
          <IconMoodHappy size={"4vw"} />
        </ActionIcon>
      </Box>
      <Box
        justify={"center"}
        style={{
          position: "absolute",
          bottom: "0",
          left: "calc(100% - 32vw)",
        }}
      >
        <AnimatePresence>
          {meme && (
            <motion.div
              style={{ opacity: 0 }}
              initial={{ opacity: 0, transform: "translateY(10vw)" }}
              animate={{ opacity: 1, transform: "translateY(0)" }}
              exit={{ opacity: 0, transform: "translateY(10vw)" }}
            >
              <Image w={"25vw"} src={"/images/meme.png"} />
            </motion.div>
          )}
        </AnimatePresence>
      </Box>
    </>
  );
};
