"use client";
import React from "react";
import Bs from "./bs";
import { useTranslations } from "use-intl";
export default function Bt() {
  const translation = useTranslations("Index");
  console.log("client---->", process.env.API_KEY);
  return (
    <>
      <Bs></Bs>
      <h6>{translation("title")}</h6>
    </>
  );
}
