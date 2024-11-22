import { createStitches } from "@stitches/react";

export const { globalCss } = createStitches();

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  }
});