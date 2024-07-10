import { Vector_color } from "Shared/colors";
import styled from "styled-components";

export const MainConteiner = styled.div``;

export const IconsConteiner = styled.div`
  padding: 0 20px;
  margin-top: 23px;
  display: flex;
  grid-gap: 12px;
  @media (max-width: 768px) {
    display: flex;
    flex-flow: wrap;
  }
`;

export const Vector = styled.div`
  height: 1px;
  border-bottom: solid 2px ${Vector_color};
  margin-top: 23px;
`;
