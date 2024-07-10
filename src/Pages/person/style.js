import { Vector_color } from "Shared/colors";
import styled from "styled-components";

export const MainConteiner = styled.div`
  display: grid;
  grid-template-columns: 311px 336px;
  @media (max-width: 768px) {
    display: block;
  }
`;

export const InfoConteiner = styled.div`
  height: 561px;
  display: block;
  @media (max-width: 768px) {
    height: 100%;
    margin-top: 50px;
  }
`;

export const VectorTop = styled.div`
  margin-top: 12px;
  width: 100%;
  height: 1px;
  border-bottom: solid 2px ${Vector_color};
  @media (max-width: 768px) {
    position: absolute;
    margin-top: 87px;
  }
`;
