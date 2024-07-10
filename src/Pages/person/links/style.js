import { Text_color_info, Text_color_link } from "Shared/colors";
import styled from "styled-components";

export const PersonConteiner = styled.div`
  padding-left: 24px;
`;

export const LinkConteoner = styled.div`
  margin-top: 27px;
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

export const Name = styled.div`
  font-family: "TTFirsNeueBold";
  font-size: 20px;
  margin-top: 5px;
  @media (max-width: 768px) {
    margin-left: 21px;
  }
`;

export const Surname = styled.div`
  font-family: "TTFirsNeueBold";
  font-size: 20px;
  margin-top: 23px;
  @media (max-width: 768px) {
    margin-left: 21px;
  }
`;

export const Position = styled.div`
  font-family: "TTFirsNeue400";
  font-size: 14px;
  color: ${Text_color_info};
  margin-top: 15px;
  @media (max-width: 768px) {
    margin-left: 21px;
  }
`;
