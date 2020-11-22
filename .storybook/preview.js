// .storybook/preview.js
import React from "react";
import Global from '../src/styles/global';

export const decorators = [
  (Story) => (
    <>
      <Global />
      <Story />
    </>
  ),
];