import styled from "styled-components";
import { COLORS, FONTS } from "../constants/theme";

export const MenuCon = styled.div`
  background: ${COLORS.PrimaryDark};
  position: absolute;
  height: 60px;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-radius: 0 0 0 6px;
`;
export const MenuBtn = styled.button`
  border: none;
  margin: 0 10px;
  background: ${COLORS.gradeint};
  color: ${COLORS.TextColor};
  width: 100px;
  height: 40px;
  border-radius: 6px;
  font-family: ${FONTS.Monster};
`;
