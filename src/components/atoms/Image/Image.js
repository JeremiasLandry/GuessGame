import React from 'react';
import styled from 'styled-components';

const ImageStyle = styled.img`
    max-height:800px;
    max-width:800px;
    height:${props => props.y ? props.y : '900px'};
    width:${props => props.x ? props.x : '900px'};
    border-radius:${props => props.br ? props.br : 'none'};
    outline:${props => props.outline ? props.outline : "2px solid #fff"};
`

const Image = ({url, x='900px', y='900px', outline, br}) => {
  return (
    <ImageStyle src={url} br={br} x={x} y={y} outline={outline}/>
  )
}

export default Image