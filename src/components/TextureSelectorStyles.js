import styled from "styled-components";
import { COLORS, FONTS } from "../constants/theme";

export const SelectorCon = styled.div`
  background-color: ${COLORS.PrimaryDark};
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transform: scale(5);
  height: max-content;
  img.active {
    border: 1px solid ${COLORS.light};
  }
`;
