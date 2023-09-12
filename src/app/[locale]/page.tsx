// "use client";
// framer-motion
// import { AnimatePresence, LayoutGroup } from "framer-motion";
// import { flexbox } from "styled-system";
// import { Button, FlexBox, H6 } from "./components";
import Bt from "./bt";
import { useTranslations } from "next-intl";

export default function IndexPage() {
  const translate = useTranslations("Index");

  return (
    <div>
      <h1>{translate("other.first")}</h1>
      <Bt></Bt>
    </div>
  );
}
