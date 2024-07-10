import styled from "styled-components";

export const Avatar = styled.img`
  height: 503px;
  width: 778px;
  @media (max-width: 768px) {
    object-fit: cover;
    object-position: top;
    height: 100%;
    max-width: 100%;
  }
`;
