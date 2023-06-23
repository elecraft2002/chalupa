import React, { useEffect } from "react";
import useMousePosition from "../functions/useMousePosition";
import { useSpring } from "react-spring";
import { animated, config } from "@react-spring/web";
import styled, { keyframes } from "styled-components";

const rotation = keyframes`
from{
  transform:translate(-50%, -50%) rotate(0deg);
}
to{
  transform:translate(-50%, -50%) rotate(360deg);
}
`;

const StyledCircle = styled(animated.div)`
  width: 40vw;
  aspect-ratio: 0.75;
  background: white;
  position: relative;
  transform: translate(-50%, -50%);
  animation: ${rotation};
  animation-duration: 50s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.4;
  background: red;
  background: linear-gradient(
    0deg,
    red 0%,
    yellow 100%
  );
`;

const StyledBackground = styled.div`
  position: fixed;
  top: 0;
  z-index: -1;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

export default function Background() {
  const [x, y] = useMousePosition();
  const [{ X, Y }, set] = useSpring(() => ({
    X: x,
    Y: y,
    config: config.molasses,
  }));
  useEffect(() => {
    set({ X: x, Y: y });
  }, [x, y]);
  return (
    <StyledBackground>
      <StyledCircle style={{ left: X, top: Y }} />
    </StyledBackground>
  );
}
