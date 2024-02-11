"use client";

import { useScoreContext } from "@/app/page";
import { MemeComponent } from "./MemeComponent";
import { ScoreBtnTeam } from "./ScoreBtnTeam";
import { ScoreTeam } from "./ScoreTeam";
import { Box, Center, Image, Text, Container } from "@mantine/core";
import { AnimatePresence, motion } from "framer-motion";

export const ScoreBoard = () => {
  const {
    scoreTimeA,
    scoreTimeB,
    setScoreTimeA,
    setScoreTimeB,
    audioTeamA,
    audioTeamB,
    setAnimateA,
    setAnimateB,
    animateA,
    animateB,
  } = useScoreContext();

  return (
    <Container
      fluid
      w={"100%"}
      h={"100dvh"}
      p={0}
      style={{
        pointerEvents: "none",
        userSelect: "none",
        backgroundImage: "url(/images/backgroundVolley.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        contain: "paint",
      }}
    >
      <Center w="100%" h="100%">
        {/* <Box w={"100%"}>
          <Image src={"/images/scoreboard.png"} />
        </Box> */}

        {/* SCORES */}
        <Box
          justify={"center"}
          style={{
            position: "absolute",
            marginLeft: "-60%",
            marginTop: "-0%",
          }}
        >
          <Center w={"100%"} h={"100%"}>
            <ScoreTeam
              scoreTime={scoreTimeA}
              setScoreTime={setScoreTimeA}
              audioTeam={audioTeamA}
              setAnimate={setAnimateA}
            />
          </Center>
        </Box>
        <Box
          justify={"center"}
          style={{
            position: "absolute",
            marginRight: "-60%",
            marginTop: "-0%",
          }}
        >
          <Center w={"100%"} h={"100%"}>
            <ScoreTeam
              scoreTime={scoreTimeB}
              setScoreTime={setScoreTimeB}
              audioTeam={audioTeamB}
              setAnimate={setAnimateB}
            />
          </Center>
        </Box>

        {/* TITLES */}
        {/* TIME A */}
        <Box
          justify={"center"}
          style={{
            position: "absolute",
            marginLeft: "-60%",
            marginTop: "-30%",
          }}
        >
          <Center w={"100%"} h={"100%"}>
            <Text c="#000" fw={600} fz={"4vw"}>
              Time A
            </Text>
          </Center>
        </Box>
        {/* TIME B */}
        <Box
          justify={"center"}
          style={{
            position: "absolute",
            marginRight: "-60%",
            marginTop: "-30%",
          }}
        >
          <Center w={"100%"} h={"100%"}>
            <Text c="#000" fw={600} fz={"4vw"}>
              Time B
            </Text>
          </Center>
        </Box>

        {/* VERSUS */}
        <Box
          justify={"center"}
          style={{
            position: "absolute",
            marginTop: "0%",
          }}
        >
          <Center w={"100%"} h={"100%"}>
            <Text c="#ffffff" fw={800} fz={"4vw"}>
              X
            </Text>
          </Center>
        </Box>

        <Box
          justify={"center"}
          style={{
            position: "absolute",
            marginTop: "-40%",
            pointerEvents: "all",
            userSelect: "all",
          }}
        >
          <Center w={"100%"} h={"100%"}>
            <Text
              c="#fff"
              onClick={() => {
                setScoreTimeA(0);
                setScoreTimeB(0);
              }}
              style={{ cursor: "pointer" }}
              fw={800}
              fz={"2vw"}
            >
              RESET
            </Text>
          </Center>
        </Box>

        {/* ARROWS TIME A */}
        <Box
          justify={"center"}
          style={{
            position: "absolute",
            marginTop: "40%",
            marginLeft: "-60%",
          }}
        >
          <Center w={"100%"} h={"100%"}>
            <ScoreBtnTeam
              scoreTime={scoreTimeA}
              setScoreTime={setScoreTimeA}
              audioTeam={audioTeamA}
              setAnimate={setAnimateA}
              animate={animateA}
            />
          </Center>
        </Box>

        {/* ARROWS TIME B */}
        <Box
          justify={"center"}
          style={{
            position: "absolute",
            marginTop: "40%",
            marginRight: "-60%",
          }}
        >
          <Center w={"100%"} h={"100%"}>
            <ScoreBtnTeam
              scoreTime={scoreTimeB}
              setScoreTime={setScoreTimeB}
              audioTeam={audioTeamB}
              setAnimate={setAnimateB}
              animate={animateB}
            />
          </Center>
        </Box>

        {/* TEAMS ICON */}
        {/* TEAM A */}
        <Box
          justify={"center"}
          style={{
            position: "absolute",
            marginTop: "-22%",
            marginRight: "65%",
          }}
        >
          <Center w={"100%"} h={"100%"}>
            <AnimatePresence>
              {animateA && (
                <motion.div
                  onAnimationComplete={() => {
                    setTimeout(() => {
                      setAnimateA(false);
                    }, 5000);
                  }}
                  style={{ opacity: 0 }}
                  initial={{ opacity: 0, transform: "translateX(5vw)" }}
                  animate={{ opacity: 1, transform: "translateX(0)" }}
                  exit={{ opacity: 0, transform: "translateX(5vw)" }}
                  transition={{ ease: "backInOut" }}
                >
                  <Image w={"50vw"} src={"/images/pointA.png"} />
                </motion.div>
              )}
            </AnimatePresence>
          </Center>
        </Box>
        {/* TEAM B */}
        <Box
          justify={"center"}
          style={{
            position: "absolute",
            marginTop: "-20%",
            marginLeft: "65%",
          }}
        >
          <Center w={"100%"} h={"100%"}>
            <AnimatePresence>
              {animateB && (
                <motion.div
                  onAnimationComplete={() => {
                    setTimeout(() => {
                      setAnimateB(false);
                    }, 5000);
                  }}
                  style={{ opacity: 0 }}
                  initial={{ opacity: 0, transform: "translateX(5vw)" }}
                  animate={{
                    opacity: 1,
                    transform: "translateX(0)",
                  }}
                  exit={{
                    opacity: 0,
                    transform: "translateX(5vw)",
                  }}
                  transition={{ ease: "backInOut" }}
                >
                  <Image w={"40vw"} src={"/images/pointB.png"} />
                </motion.div>
              )}
            </AnimatePresence>
          </Center>
        </Box>
        <MemeComponent />
        <Text
          w={"20vw"}
          fz={"3vw"}
          fw={900}
          mt={"-20%"}
          ta={"center"}
          lh={"3vw"}
          style={{ position: "absolute" }}
          c={"#fff"}
        >
          Serra Dourada 2 <br /> <b style={{ color: "#ffd900" }}>Oficial</b>
        </Text>
      </Center>
    </Container>
  );
};
