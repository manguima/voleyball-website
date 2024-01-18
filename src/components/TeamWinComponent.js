import { useScoreContext } from "@/app/page";
import {
  Badge,
  Box,
  Button,
  Center,
  Container,
  Flex,
  Image,
  Text,
} from "@mantine/core";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

// TEAM WIN
export const TeamWinComponent = () => {
  const { teamWin, setTeamWin, setScoreTimeA, setScoreTimeB, win } =
    useScoreContext();

  useEffect(() => {
    win?.play();
  }, []);

  return (
    <Container
      fluid
      w={"100%"}
      h={"100svh"}
      p={0}
      style={{
        backgroundImage: "url(/images/backgroundVolley.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        contain: "paint",
      }}
    >
      <Center w={"100%"} h={"100%"}>
        <Flex direction={"column"} justify={"center"} align={"center"}>
          <Text
            c="#000"
            style={{ pointerEvents: "none", userSelect: "none" }}
            lh={"14vw"}
            c={"#fff"}
            fw={"700"}
            fz={"14vw"}
          >
            TIME {teamWin}
          </Text>
          <Badge
            style={{ pointerEvents: "none", userSelect: "none" }}
            size="3vw"
            p={"2vw"}
            radius={"0.7vw"}
            color="#2D1980"
          >
            VENCEDOR!
          </Badge>
          <Button
            onClick={() => {
              setTeamWin(null);
              setScoreTimeA(0);
              setScoreTimeB(0);
            }}
            size="2.5vw"
            color="#f5f5f5"
            c={"#000"}
            fz={"2vw"}
            mt={"2vw"}
          >
            Reset
          </Button>
        </Flex>
        {/* TEAM A */}
        <Box
          justify={"center"}
          style={{
            position: "absolute",
            marginTop: "40%",
            marginRight: "65%",
          }}
        >
          <Center w={"100%"} h={"100%"}>
            <AnimatePresence>
              {teamWin === "A" && (
                <motion.div
                  style={{ opacity: 0 }}
                  initial={{ opacity: 0, transform: "translateX(5vw)" }}
                  animate={{ opacity: 1, transform: "translateX(0)" }}
                >
                  <Image w={"50vw"} src={"/images/playerA.png"} />
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
            marginTop: "30%",
            marginLeft: "65%",
          }}
        >
          <Center w={"100%"} h={"100%"}>
            <AnimatePresence>
              {teamWin === "B" && (
                <motion.div
                  style={{ opacity: 0 }}
                  initial={{ opacity: 0, transform: "translateX(5vw)" }}
                  animate={{ opacity: 1, transform: "translateX(0)" }}
                >
                  <Image w={"50vw"} src={"/images/playerB.png"} />
                </motion.div>
              )}
            </AnimatePresence>
          </Center>
        </Box>

        {/* CELEBRATE */}
        {/* TEAM A */}
        <Box
          justify={"center"}
          style={{
            position: "absolute",
            marginTop: "0%",
            marginRight: "65%",
          }}
        >
          <Center w={"100%"} h={"100%"}>
            <AnimatePresence>
              {teamWin === "A" && (
                <motion.div
                  style={{ opacity: 0 }}
                  initial={{ opacity: 0, transform: "translateX(5vw)" }}
                  animate={{ opacity: 1, transform: "translateX(0)" }}
                >
                  <Image w={"30vw"} src={"/images/confetti.gif"} />
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
            marginTop: "0%",
            marginLeft: "65%",
          }}
        >
          <Center w={"100%"} h={"100%"}>
            <AnimatePresence>
              {teamWin === "B" && (
                <motion.div
                  style={{ opacity: 0 }}
                  initial={{ opacity: 0, transform: "translateX(5vw)" }}
                  animate={{ opacity: 1, transform: "translateX(0)" }}
                >
                  <Image w={"30vw"} src={"/images/confetti.gif"} />
                </motion.div>
              )}
            </AnimatePresence>
          </Center>
        </Box>
      </Center>
    </Container>
  );
};
