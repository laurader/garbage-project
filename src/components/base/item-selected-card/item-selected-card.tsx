import React from 'react';
import { ItemSelectedCardStyled } from './item-selected-card.styled';
import { SvgImage, SvgType } from '../svg/svg';
import { Colors } from '../../../colors';

export interface ItemSelectedCardProps {
  onClick: () => void;
  label: string;
  deletable?: boolean;
}

const ItemSelectedCard = (props: ItemSelectedCardProps) => {
  const { deletable = true } = props

  return (
    <ItemSelectedCardStyled.Container>
<ItemSelectedCardStyled.Name>{props.label}</ItemSelectedCardStyled.Name>
      <ItemSelectedCardStyled.ContainerDelete onClick={() => deletable ? props.onClick() : null}>
        <SvgImage type={SvgType.Close} options={{size: 'small', color: Colors.Black}}/>
      </ItemSelectedCardStyled.ContainerDelete>

    </ItemSelectedCardStyled.Container>
  );
};

export default ItemSelectedCard;
