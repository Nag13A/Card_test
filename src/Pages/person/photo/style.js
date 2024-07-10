import {
  Box_shadow_color,
  Btn_dekstop_color,
  Btn_dekstop_txt_color,
  Btn_mobile_color,
  Btn_mobile_txt_color,
} from "Shared/colors";
import styled from "styled-components";

export const PhotoConteiner = styled.div`
  height: 561px;
  display: block;
  @media (max-width: 768px) {
    height: 100%;
  }
`;
export const SimpleSliderConteiner = styled.div`
  overflow: hidden;
  margin-left: 32px;
  width: 279px;
  height: 495px;
  border-radius: 8.11px;
  @media (max-width: 768px) {
    max-height: 400px;
    margin: 2vw auto;
    width: 100%;
  }
`;
export const AddBtn = styled.button`
  font-family: "TTFirsNeueBold";
  font-size: 12px;
  color: ${Btn_dekstop_txt_color};
  text-align: center;
  background-color: ${Btn_dekstop_color};
  border-radius: 8.11px;
  width: 279px;
  height: 50px;
  margin-left: 32px;
  margin-top: 16px;
  text-transform: uppercase;
  cursor: pointer;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const ButtonMobile = styled.a`
  display: none;
  @media (max-width: 768px) {
    text-decoration: none;
    color: ${Btn_mobile_txt_color};
    border: none;
    margin-left: 13px;
    background-color: ${Btn_mobile_color};
    font-family: "TTFirsNeueBold";
    font-size: 14px;
    width: 165px;
    height: 60px;
    border-radius: 8.11px;
    box-shadow: 0px 4.05px 5.68px 0px ${Box_shadow_color};
    align-items: center;
    display: inline-flex;
    text-align: left;
    svg {
      padding-left: 15px;
      padding-right: 12px;
      height: 25px;
      width: 25px;
    }
  }
  @media (max-width: 365px) {
    margin: 0;
    width: 140px;
    height: 40px;
    svg {
      padding-left: 0px;
      padding-right: 5px;
      height: 25px;
      width: 25px;
    }
  }
  @media (max-width: 280px) {
    margin: 0;
    width: 110px;
    height: 40px;
    font-size: 12px;
    svg {
      padding-left: 0px;
      padding-right: 5px;
      height: 25px;
      width: 25px;
    }
  }
`;

export const BtnConteiner = styled.div`
  display: none;
  @media (max-width: 768px) {
    margin-top: -9vw;
    text-align: center;
    width: 100%;
    display: block;
    position: absolute;
    text-align: center;
    z-index: 10;
  }
`;
