import styled from '@emotion/styled';
import { Colors } from '../../../colors';
export const RadioButtonStyled = {
  ContainerTooltip: styled.div<any>`
    background-color: ${Colors.White};
  `,
  TitleTooltip: styled.span<any>`
    font-family: EncodeSans-Medium;
    font-size: 12px;
    color: ${Colors.Black};
    margin-bottom: 5px;
  `,
  DescriptionTooltip: styled.p<any>`
    font-family: EncodeSans-Medium;
    font-size: 10px;
    color: ${Colors.UnderlinedGrey}
  `,
  ContainerIconRight: styled.div<any>`
    margin-right: 20px
  `,
  ContainerRadios: styled.div<any>`
    display: flex; 
    align-items: center;
    margin-right: 60px;
  `,
};


