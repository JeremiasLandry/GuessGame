import React from 'react';
import styled from 'styled-components';

const ImageStyle = styled.img`
    max-height:800px;
    max-width:800px;
    height:${props => props.y ? props.y : '800px'};
    width:${props => props.x ? props.x : '800px'};
    border-radius:${props => props.br ? props.br : 'none'};
    outline:${props => props.outline ? props.outline : "2px solid #fff"};
    margin:${props => props.margin ? props.margin : "auto"};

    @media screen and (max-width:768px){
      max-height:600px;
      max-width:600px;
    }

    @media screen and (max-width:640px){
      max-height:500px;
      max-width:500px;
    }

    @media screen and (max-width:568px){
      max-height:450px;
      max-width:450px;
    }
`

const Image = ({url, x='1000px', y='1000px', outline, br, margin='auto'}) => {
  return (
    <ImageStyle margin={margin} src={url} br={br} x={x} y={y} outline={outline}/>
  )
}

export default Image