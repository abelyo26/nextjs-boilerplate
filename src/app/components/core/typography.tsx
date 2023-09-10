import styled,{CSSObject} from "@emotion/styled";

import {
    color,
    compose,
    fontFamily,
    fontStyle,
    fontSize,
    fontWeight,
    layout,
    lineHeight,
    space,
    textAlign,
    position,
    variant,
    ColorProps,
  FontSizeProps,
  FontWeightProps,
  FontFamilyProps,
  FontStyleProps,
  LineHeightProps,
  TextAlignProps,
  SpaceProps,
  LayoutProps,
  PositionProps,
  } from "styled-system";


export const Text = styled.span<TextProps>`
  &:hover {
    ${props => props.hover}
  }
  display: inline-block;
  ${compose(
    color,
    fontFamily,
    fontSize,
    fontWeight,
    fontStyle,
    color,
    textAlign,
    space,
    lineHeight,
    position,
    space,
    layout)}
`;

export const H1 = styled.h1<TextProps>`
  ${compose(
    fontSize,
    fontWeight,
    color,
    textAlign,
    space,
    lineHeight,
    space,
    layout,
    fontFamily,
  )}
`;
export const H2 = styled.h2<TextProps>`
  ${compose(
    fontSize,
    fontWeight,
    color,
    textAlign,
    space,
    lineHeight,
    space,
    layout,
    fontFamily,
  )}
`;
export const H3 = styled.h3<TextProps>`
  ${compose(
    fontSize,
    fontWeight,
    color,
    textAlign,
    space,
    lineHeight,
    space,
    layout,
    fontFamily,
  )}
`;
export const H4 = styled.h4<TextProps>`
  ${compose(
    fontSize,
    fontWeight,
    color,
    textAlign,
    space,
    lineHeight,
    space,
    layout,
    fontFamily,
  )}
`;
export const H5 = styled.h5<TextProps>`
  ${compose(
    fontSize,
    fontWeight,
    color,
    textAlign,
    space,
    lineHeight,
    space,
    layout,
    fontFamily,
  )}
`;
export const H6 = styled.h6<TextProps>`
  ${compose(
    fontSize,
    fontWeight,
    color,
    textAlign,
    space,
    lineHeight,
    space,
    layout,
    fontFamily,
  )}
`;

export const P = styled.p<TextProps>`
  ${compose(
    fontSize,
    fontWeight,
    color,
    textAlign,
    space,
    lineHeight,
    space,
    layout,
    fontFamily,
  )}
`;

export interface TextProps
  extends FontSizeProps,
    FontWeightProps,
    FontFamilyProps,
    FontStyleProps,
    ColorProps,
    LayoutProps,
    SpaceProps,
    TextAlignProps,
    LineHeightProps,
    SpaceProps,
    PositionProps {
//   variant?: TextVariants;
  hover?: CSSObject;
}
