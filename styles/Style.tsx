/* eslint-disable */
"use strict"

import styled from "styled-components"
import {
  BACKGROUND_COLOR,
  BORDER_RADIUS,
  BOX_BORDER,
  CARD_HEADER_COLOR_BLUE,
  CONTAINER_PADDING,
  CONTENT_MIN_WIDTH,
  CONTENT_WIDTH,
  FONT_SIZE, PRIMARY_TEXT_COLOR_DARK,
  SECONDARY_BACKGROUND_COLOR,
  SECONDARY_BACKGROUND_COLOR_DARK,
} from "./BaseStyle"

export const ContentContainer = styled.div`
  padding: ${ CONTAINER_PADDING };
  text-align: center;
  /* background-color: ${ BACKGROUND_COLOR }; */
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  max-width: ${ CONTENT_WIDTH };
  min-width: ${ CONTENT_MIN_WIDTH };
  justify-content: center;
  font-size: ${ FONT_SIZE };
`

export const Title = styled.h1`
  margin-top: 0;
  font-size: 2rem;
  font-weight: 800;
  text-align: center;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 980px;
  width: 100%;
  align-items: center;
  padding: 0 20px;
  margin: 0 auto;
`

export const AccordionListContainer = styled.div<{ t: boolean }>`
  width: 100%;
  border-radius: none;
	
  .MuiAccordion-root {
		margin-top: 15px;
    box-shadow: none;
    background: ${ ( { t } ) => t ? SECONDARY_BACKGROUND_COLOR : SECONDARY_BACKGROUND_COLOR_DARK };
    border-radius: none;
    /* border: ${ BOX_BORDER }; */
    /* border-radius: ${ BORDER_RADIUS }; */
  }

  .MuiAccordionDetails-root {
    padding: 0 0 ${ CONTAINER_PADDING } 0;
  }

  .MuiTypography-root {
    font-weight: bold;
    margin: 0 auto;
  }
`

export const AccordionListTableContainer = styled.div`
  width: 100%;
   
`

export const ButtonBlock = styled.span`
  .MuiOutlinedInput-root {
    border-radius: ${ BORDER_RADIUS };
  }

  .MuiButton-outlinedSizeLarge {
    padding: 5px 2px;
  }

  .MuiButton-root {
    margin: 0 5px;
    min-width: 34px;
    min-height: 34px;
    border-radius: 10px;

    .MuiButton-startIcon {
      margin: 0;
    }

    svg {
      font-size: 14px;
    }
  }
`

export const AccordionListCount = styled.span`
  margin-left: 3px;
`

export const ErrorContainer = styled.div`
  margin: 50px;
  font-size: 25px;

  svg {
    margin-bottom: 20px;
  }
`

export const CountryFlagSpan = styled.span`
  margin-right: 5px;
  font-size: 1.3rem;
`

export const AddressValueNode = styled.span` 
 span{
  margin-left : 10px ;
 }
`

export const CountryValueNode = styled.span`

`

export const QuestionMarkContainer = styled.div`
  background-Color: ${ CARD_HEADER_COLOR_BLUE }; 
  border-radius: 100px;
  font-size: 21px; 
  padding: 0 1px 5px 1px; 
  width: 30px; 
  height:30px;
  color: ${ PRIMARY_TEXT_COLOR_DARK }; 
  margin: 5px 0 0 40px;
`

