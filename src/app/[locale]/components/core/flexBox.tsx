import styled from "@emotion/styled";
import {
  compose,
  flexbox,
  flex,
  layout,
  system,
  FlexboxProps,
  AlignItemsProps,
  ResponsiveValue,
  backgroundColor,
  BackgroundProps,
  ColorProps,
  color,
  LayoutProps,
  SpaceProps,
} from "styled-system";

const gap = system({
  gap: {
    property: "gap",
    scale: "space",
  },
});

export const FlexBox = styled.div<FlexBoxProps>`
  display: flex;

  ${compose(flexbox, flex, layout, gap, backgroundColor, color)}
`;

export interface FlexBoxProps
  extends BackgroundProps,
    AlignItemsProps,
    ColorProps,
    LayoutProps,
    SpaceProps,
    FlexboxProps {
  gap?: ResponsiveValue<number | string>;
}
