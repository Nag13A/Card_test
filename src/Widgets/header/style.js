import { Disable_color, Enable_color } from "Shared/colors";
import styled from "styled-components";

export const MenuConteiner = styled.div`
  font-family: "TTFirsNeue400";
  margin: 50px auto 19px;
  width: 647px;
  height: 17px;
  display: flex;
  justify-content: space-between;
`;

export const ButtonConteiner = styled.div`
  font-size: 14px;
  align-items: center;
  display: flex;
  cursor: pointer;
  line-height: 1.2em;
  color: ${(props) =>
    props.btn_active ? `${Disable_color}` : `${Enable_color}`};
  content: "33";
  fill: ${(props) =>
    props.btn_active ? `${Disable_color}` : `${Enable_color}`};
`;
