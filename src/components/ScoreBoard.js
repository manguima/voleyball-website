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
        <Box w={"100%"}>
          <Image src={"/images/scoreboard.png"} />
        </Box>

        {/* SCORES */}
        <Box
          justify={"center"}
          style={{
            position: "absolute",
            marginLeft: "-43%",
            marginTop: "15%",
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
            marginRight: "-46%",
            marginTop: "15%",
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
            marginLeft: "-43%",
            marginTop: "-18%",
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
            marginRight: "-46%",
            marginTop: "-18%",
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
            marginTop: "-19%",
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
            marginTop: "-30%",
            pointerEvents: "all",
            userSelect: "all",
          }}
        >
          <Center w={"100%"} h={"100%"}>
            <Text
              c="#000"
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
            marginTop: "10%",
            marginLeft: "-70%",
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
            marginTop: "10%",
            marginRight: "-73%",
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
                  style={{ opacity: 0 }}
                  initial={{ opacity: 0, transform: "translateX(5vw)" }}
                  animate={{ opacity: 1, transform: "translateX(0)" }}
                  exit={{ opacity: 0, transform: "translateX(5vw)" }}
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
                  style={{ opacity: 0 }}
                  initial={{ opacity: 0, transform: "translateX(5vw)" }}
                  animate={{ opacity: 1, transform: "translateX(0)" }}
                  exit={{ opacity: 0, transform: "translateX(5vw)" }}
                >
                  <Image w={"40vw"} src={"/images/pointB.png"} />
                </motion.div>
              )}
            </AnimatePresence>
          </Center>
        </Box>
        <MemeComponent />
        <Text
          w={"22vw"}
          ml={"1.5vw"}
          fz={"4vw"}
          fw={900}
          mt={"8vw"}
          ta={"center"}
          lh={"4vw"}
          style={{ position: "absolute" }}
          c={"#fff"}
        >
          Serra Dourada 2 <br /> <b style={{ color: "#ffd900" }}>Oficial</b>
        </Text>
      </Center>
    </Container>
  );
};
