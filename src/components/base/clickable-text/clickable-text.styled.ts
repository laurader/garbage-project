import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { mediaQueryMobileLimit } from '../../../utils/constants';
import { Grid } from '@mui/material';

export const ClickableTextStyled = {
  Container: styled(Grid)<any>`
    display:flex;
    align-items: center;
  `,

  Text: styled.p<any>`
    ${(props: any) => props.styled};
    font-size: 16px;
    @media screen and (max-width: ${mediaQueryMobileLimit}px) {
      font-size: 14px;
    }
  `,
  ClickableText: styled(Link)<any>`
    ${(props: any) => props.styled}
    font-size: 16px;
    @media screen and (max-width: ${mediaQueryMobileLimit}px) {
      font-size: 14px;
    }
  `,
  
  IconLeftContainer: styled(Grid)<any>`
    margin-right: ${(props: any) => {
      return props.IconLeftMarginRight ? props.IconLeftMarginRight : '10px';
    }};
  `
};
