import React from 'react'
import styled from 'styled-components';

const H1 = styled.h1`
  font-size:${props => props.fontSize ? props.fontSize : '1.5em'};
  text-align: ${props => props.textAlign ? props.textAlign : 'center'};
  color:${props => props.color ? props.color : 'white'};
  font-weight: ${props => props.weight ? props.weight : 'normal'};
  margin: ${props => props.margin ? props.margin : '0'};
  font-family:${props => props.family ? props.family : 'Verdana, Geneva, Tahoma, sans-serif'};
`
const H2 = styled.h2`
  font-size:${props => props.fontSize ? props.fontSize : '1.5em'};
  text-align: ${props => props.textAlign ? props.textAlign : 'center'};
  color:${props => props.color ? props.color : 'white'};
  font-weight: ${props => props.weight ? props.weight : 'normal'};
  margin: ${props => props.margin ? props.margin : '0'};
  font-family:${props => props.family ? props.family : 'Verdana, Geneva, Tahoma, sans-serif'};
`

const H3 = styled.h3`
  font-size:${props => props.fontSize ? props.fontSize : '1.5em'};
  text-align: ${props => props.textAlign ? props.textAlign : 'center'};
  color:${props => props.color ? props.color : 'white'};
  font-weight: ${props => props.weight ? props.weight : 'normal'};
  margin: ${props => props.margin ? props.margin : '0'};
  font-family:${props => props.family ? props.family : 'Verdana, Geneva, Tahoma, sans-serif'};
`

const H4 = styled.h4`
  font-size:${props => props.fontSize ? props.fontSize : '1.5em'};
  text-align: ${props => props.textAlign ? props.textAlign : 'center'};
  color:${props => props.color ? props.color : 'white'};
  font-weight: ${props => props.weight ? props.weight : 'normal'};
  margin: ${props => props.margin ? props.margin : '0'};
  font-family:${props => props.family ? props.family : 'Verdana, Geneva, Tahoma, sans-serif'};
`

const H5 = styled.h5`
  font-size:${props => props.fontSize ? props.fontSize : '1.5em'};
  text-align: ${props => props.textAlign ? props.textAlign : 'center'};
  color:${props => props.color ? props.color : 'white'};
  font-weight: ${props => props.weight ? props.weight : 'normal'};
  margin: ${props => props.margin ? props.margin : '0'};
  font-family:${props => props.family ? props.family : 'Verdana, Geneva, Tahoma, sans-serif'};
`

const Header = ({level='1', margin='0',innerText='header' ,fontSize='1.5em', textAlign='center', color='white', weight='normal', family='Verdana, Geneva, Tahoma, sans-serif'}) => {
  switch (level) {
    case '1':
      return(<H1 margin={margin} fontSize={fontSize} textAlign={textAlign} color={color} weight={weight} family={family}>{innerText}</H1>);
      break;
    case '2':
      return(<H2 margin={margin} fontSize={fontSize} textAlign={textAlign} color={color} weight={weight} family={family}>{innerText}</H2>);
      break;
    case '3':
      return(<H3 margin={margin} fontSize={fontSize} textAlign={textAlign} color={color} weight={weight} family={family}>{innerText}</H3>);
      break;
    case '4':
      return(<H4 margin={margin} fontSize={fontSize} textAlign={textAlign} color={color} weight={weight} family={family}>{innerText}</H4>);
      break;
    case '5':
      return(<H5 margin={margin} fontSize={fontSize} textAlign={textAlign} color={color} weight={weight} family={family}>{innerText}</H5>);
      break;
    default:
      return(<H1 margin={margin} fontSize={fontSize} textAlign={textAlign} color={color} weight={weight} family={family}>{innerText}</H1>);
  }
}

export default Header