import styled from "@emotion/styled";
import { Grid } from "@mui/material";

export const LoginFormPageStyled = {
  Container: styled(Grid)<any>`
    display: flex;
    justify-content: center;
    align-items; center;
    min-height: 100vh;
  `,
  ItemGrid: styled(Grid)<any>`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 31px;
  `,
  Title: styled.p<any>`
    font-family: EncodeSans-Medium;
    font-size: 16px;
    text-align: center;
  `,
  SocialText: styled.p<any>`
    font-family: EncodeSans-Medium;
    font-size: 14px;
    text-align: center;
  `,
  Separator: styled.div<any>`
    margin-top: 29px;
  `,
};
