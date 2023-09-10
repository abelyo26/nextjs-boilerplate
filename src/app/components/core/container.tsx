import styled from "@emotion/styled";
import {
    space,
    color,
    layout,
    grid,
    background,
    border,
    borderRadius,
    position,
    shadow,
    compose,
    SpaceProps,
    ColorProps,
    LayoutProps,
    GridProps,
    BackgroundProps,
    BorderProps,
    BorderRadiusProps,
    PositionProps,
    ShadowProps
  } from "styled-system";

export const Container = styled.div<BoxProps>`
  &::-webkit-scrollbar {
    width: 5px;
    scroll-behavior: smooth;
  }
  &::-webkit-scrollbar:horizontal {
    height: 5px;
    scroll-behavior: smooth;
  }
  &::-webkit-scrollbar-track {
    background-color: transparentize(#ccc, 0.7);
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: transparentize(#ccc, 0.5);
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
  }
  ${compose(
    space,
    color,
    layout,
    grid,
    background,
    border,
    borderRadius,
    position,
    shadow,
  )}`

export interface BoxProps
  extends SpaceProps,
    ColorProps,
    LayoutProps,
    GridProps,
    BackgroundProps,
    BorderProps,
    BorderRadiusProps,
    PositionProps,
    ShadowProps {}