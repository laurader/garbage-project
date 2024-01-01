import styled from '@emotion/styled';
import { Colors } from "../../../colors";

export const ItemSelectedCardStyled = {
  Container: styled.div<any>`
    justify-content: space-between;
    display: flex;
    align-items: center;
    background-color: ${Colors.White};
    border-radius: 5px;
    border-bottom: 1px solid ${Colors.UnderlinedGrey};
    min-height: 54px;
    padding: 13px; 
    width: 100%;
    
  `,
  ContainerDelete: styled.div<any>`
    padding: 3px;
    margin-left: 10px;
    cursor: pointer;
  `,
  Name: styled.span<any>`
    font-family: EncodeSans-SemiBold;
    font-size: 12px;
  `,
};
