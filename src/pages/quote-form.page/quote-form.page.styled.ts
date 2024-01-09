import styled from "@emotion/styled";
import { Grid } from "@mui/material";

export const QuoteFormPageStyled = {
  Container: styled(Grid)<any>`
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 100%;
    flex-wrap: wrap;
    min-height: 100vh;
  `,
  ContainerLogo: styled.div<any>`
    display: flex;
    justify-content: center;
  `,
  Logo: styled.img<any>``,
  ContainerForm: styled(Grid)<any>`
    //padding-right: 24px;
    min-height: inherit;
    padding: 24px;
  `,
  ContainerSocials: styled(Grid)<any>`
    min-height: inherit;
    padding-left: 24px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  `,
  ContainerImage: styled.div<any>`
    height: 60%;
    width: 100%;
    display: flex;
    justify-content: center;
  `,
  Image: styled.img<any>`
    object-fit: contain;
  `,
  ContainerButtonsSocial: styled.div<any>``,
  TextSocial: styled.p<any>`
    text-align: center;
    font-family: EncodeSans-Medium;
    font-size: 16px;
  `,
  Separator: styled.div<any>`
    margin-top: 20px;
  `,
};
