import { Text_color_link } from "Shared/colors";
import styled from "styled-components";

export const Conteiner = styled.div`
  margin-top: 27px;
  padding-left: 25px;
  padding-right: 15px;
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  margin-bottom: 19px;
  font-family: "TTFirsNeue400";
  text-decoration: none;
  color: ${Text_color_link};
  max-width: max-content;
`;
