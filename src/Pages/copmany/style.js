import { Vector_color } from "Shared/colors";
import styled from "styled-components";

export const CompanyConteiner = styled.div`
  display: grid;
  grid-template-columns: 311px 336px;
  height: 509px;
  @media (max-width: 768px) {
    display: block;
    height: 100%;
  }
`;

export const VectorTop = styled.div`
  margin-top: 50px;
  width: 100%;
  border-bottom: solid 2px ${Vector_color};
  @media (max-width: 768px) {
    display: none;
  }
`;
