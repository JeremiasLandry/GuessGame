import React from 'react';
import styled from 'styled-components';

const ImageStyle = styled.img`
    height:${props => props.y ? props.y : '800px'};
    width:${props => props.x ? props.x : '800px'};
    max-height:${props => props.maxY ? props.maxY : '800px'}
    max-width:${props => props.maxX ? props.maxX : '800px'}
    border-radius:${props => props.br ? props.br : 'none'};
    outline:${props => props.outline ? props.outline : "2px solid #fff"};
    margin:${props => props.margin ? props.margin : "auto"};

    @media screen and (max-width:768px){
      height:${props => props.y ? props.y : '600px'};
      width:${props => props.x ? props.x : '600px'};
      max-height:${props => props.maxY ? props.maxY : '600px'}
      max-width:${props => props.maxX ? props.maxX : '600px'}
      border-radius:${props => props.br ? props.br : 'none'};

    }

    @media screen and (max-width:640px){
      height:${props => props.y ? props.y : '500px'};
      width:${props => props.x ? props.x : '500px'};
      max-height:${props => props.maxY ? props.maxY : '500px'}
      max-width:${props => props.maxX ? props.maxX : '500px'}
      border-radius:${props => props.br ? props.br : 'none'};
    }

    @media screen and (max-width:568px){
      height:${props => props.y ? props.y : '400px'};
      width:${props => props.x ? props.x : '400px'};
      max-height:${props => props.maxY ? props.maxY : '450px'}
      max-width:${props => props.maxX ? props.maxX : '450px'}
      border-radius:${props => props.br ? props.br : 'none'};
    }
    @media screen and (max-width:500px){
      height:${props => props.y ? props.y : '400px'};
      width:${props => props.x ? props.x : '400px'};
      max-height:${props => props.maxY ? props.maxY : '400px'}
      max-width:${props => props.maxX ? props.maxX : '400px'}
      border-radius:${props => props.br ? props.br : 'none'};
    }
    @media screen and (max-width:450px){
      height:${props => props.y ? props.y : '300px'};
      width:${props => props.x ? props.x : '300px'};
      max-height:${props => props.maxY ? props.maxY : '300px'}
      max-width:${props => props.maxX ? props.maxX : '300px'}
      border-radius:${props => props.br ? props.br : 'none'};
    }
    @media screen and (max-width:350px){
      height:${props => props.y ? props.y : '250px'};
      width:${props => props.x ? props.x : '250px'};
      max-height:${props => props.maxY ? props.maxY : '250px'}
      max-width:${props => props.maxX ? props.maxX : '250px'}
      border-radius:${props => props.br ? props.br : 'none'};
    }
`

const Image = ({url, x, maxY, maxX, y, outline, br, margin='auto'}) => {
  return (
    <ImageStyle  margin={margin} src={url} br={br} x={x} y={y} outline={outline} maxY={maxY} maxX={maxX}/>
  )
}

export default Image