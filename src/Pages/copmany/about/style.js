import { Text_color_info } from "Shared/colors";
import styled from "styled-components";

export const MainConteiner = styled.div`
  margin-top: 40px;
`;
export const CompanyName = styled.div`
  font-family: "TTFirsNeueBold";
  font-size: 20px;
  padding-left: 32px;
  margin-top: 52px;
`;
export const CompanyInfo = styled.div`
  font-family: "TTFirsNeueBold";
  font-size: 14px;
  padding-left: 32px;
  padding-right: 60px;
  margin-top: 15px;
  @media (max-width: 768px) {
    color: ${Text_color_info};
  }
`;
