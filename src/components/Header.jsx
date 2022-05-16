import React from 'react'
import styled from 'styled-components';

export default function Header() {
  return (
    <HeaderNav>
        <Logo> ADOPTme </Logo> 
        <Links>
            <a href=""> Amigos </a>
            <a href=""> Protectoras </a>
            <a href=""> Veterinarios </a>
        </Links>
    </HeaderNav>
  )
}

const HeaderNav = styled.header`
    width: 100vw;
    height: 10vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    top: 0;
    z-index: 5;
`

const Logo = styled.span`

`

const Links = styled.span`
    width: 30%;
    display: flex;
    justify-content: space-between;

    & > a{
        text-decoration: none;
        color: #fff;    
    }
`
