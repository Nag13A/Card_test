import { Background_color } from "Shared/colors";
import styled from "styled-components";

export const MainConteiner = styled.div`
  margin: 0px auto;
  width: 647px;
  height: 664px;
  background-color: ${Background_color};
  border-radius: 8px;
  padding-top: 32px;
  @media (max-width: 768px) {
    display: none;
  }
`;
