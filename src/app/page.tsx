"use client";
// framer-motion
import { AnimatePresence, LayoutGroup } from "framer-motion";
// import { flexbox } from "styled-system";
import { Button, FlexBox, H6 } from "./components";

export default function IndexPage() {
  return (
      <FlexBox
        alignItems={"center"}
        // flexDirection={"column"}
        justifyContent={"center"}
        justifyItems={"flex-start"}
        backgroundColor={["red", "green", "yellow"]}
        // flex={1}
        height={"100vh"}
      >
        <FlexBox backgroundColor={"red"} height={"100%"}><Button>wedsfsdf</Button></FlexBox>
        <H6 fontSize={"40px"} fontWeight={100}>helllo</H6>
        
      </FlexBox>
  );
}
