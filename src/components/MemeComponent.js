"use client";
import { useScoreContext } from "@/app/page";
import { Box, Button, Center, Flex, Image } from "@mantine/core";
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
          marginTop: "30%",
          marginLeft: "1.5vw",
        }}
      >
        <Button
          onClick={() => {
            setMeme(true);
            memeAudio?.play();
            setTimeout(() => {
              setMeme(false);
            }, 3000);
          }}
          // color="#ffffff"
          // c={"#2F2BA3"}
          style={{ background: "#ffffff" }}
          size={"4vw"}
        >
          <IconMoodHappy size={"4vw"} style={{ color: "#2F2BA3" }} />
        </Button>
      </Box>
      <Box
        justify={"center"}
        style={{
          position: "absolute",
          bottom: "0",
          right: "0",
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
