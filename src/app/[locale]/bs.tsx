import React from "react";

import { Button, FlexBox, H6 } from "./components";

export default function Bs() {
  console.log("server---->", process.env.API_KEY);
  return (
    <FlexBox
      alignItems={"center"}
      // flexDirection={"column"}
      justifyContent={"center"}
      justifyItems={"flex-start"}
      backgroundColor={["red", "green", "yellow"]}
      // flex={1}}
    >
      <FlexBox backgroundColor={"red"} height={"100%"}>
        <Button>wedsfsdf</Button>
      </FlexBox>
      <H6 fontSize={"40px"} fontWeight={100}>
        hello
      </H6>
    </FlexBox>
  );
}
