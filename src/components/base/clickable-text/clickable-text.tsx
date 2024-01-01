import React from 'react';
import { ClickableTextStyled } from './clickable-text.styled';
import { defaultStyleText } from './constants';
import { Colors } from '../../../colors';
import { SvgImage, SvgType } from '../svg/svg';

export interface ClickableTextProps {
  text?: string;
  clickableText: string;
  href?: string;
  styled?: any;
  colorText?: string;
  colorTextClickable?: string;
  fontSize?: string;
  fontFamily?: string;
  textAlign?: string;
  iconLeft?: SvgType;
  iconLeftMarginRight?: string;
  onClick?: () => void;
}

const ClickableTextProps = (props: ClickableTextProps) => {
  return (
    <ClickableTextStyled.Container>
      {props.iconLeft &&
        <ClickableTextStyled.IconLeftContainer iconLeftMarginRight={props.iconLeftMarginRight}>
          <SvgImage type={props.iconLeft}/>
        </ClickableTextStyled.IconLeftContainer>
      }
      <ClickableTextStyled.Text styled={props.styled ? props.styled : {
        ...defaultStyleText,
        'color': props.colorText ? props.colorText : defaultStyleText['color'],
        'fontFamily': props.fontFamily ? props.fontFamily : defaultStyleText['fontFamily'],
        'fontSize': props.fontSize ? props.fontSize : defaultStyleText['fontSize'],
        'textAlign': props.textAlign ? props.textAlign : defaultStyleText['textAlign']
      }}
      >
        {props.text}
        <ClickableTextStyled.ClickableText 
          onClick={(event:any) => {
            if(!props.href) {
              event.preventDefault()
              if(props.onClick) props.onClick()
            }
          }} 
          to={props.href} styled={props.styled ? props.styled : {
          ...defaultStyleText,
          'color': props.colorTextClickable ? props.colorTextClickable : Colors.Primary,
          'fontFamily': props.fontFamily ? props.fontFamily : defaultStyleText['fontFamily'],
          'fontSize': props.fontSize ? props.fontSize : defaultStyleText['fontSize']
        }}
        >
          {props.clickableText}
        </ClickableTextStyled.ClickableText>
      </ClickableTextStyled.Text>
    </ClickableTextStyled.Container>
  );
};

export default ClickableTextProps;
