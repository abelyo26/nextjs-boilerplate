// styled components theme
export const theme = {
  // breakPoints: ["640px", "768px", "1024px", "1280px"],
  breakPoints: ["40em", "48em", "64em", "80em"],
  colors: {
    lightGrayishCyanBackground: "hsl(180, 52%, 96%)",
    lightGrayishCyanFilter: "hsl(180, 31%, 95%)",
    grayishCyan: "hsla(180, 52%, 30%, 0.2)",
    grayishCyanFeatured: "hsl(180, 30%, 50%)",
    darkGrayishCyan: "hsl(180, 8%, 52%)",
    veryDarkGrayishCyan: " hsl(180, 14%, 20%)",
    black: "#000",
    white: "#fff",
  },
};

export type ThemeType = typeof theme;

export default theme;
