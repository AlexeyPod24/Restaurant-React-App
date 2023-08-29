import React from 'react'
import styled from 'styled-components'

export const HeaderContainer = styled.div`
border: 1px solid black;
padding: 1em 2em;
display: flex;
justify-content: space-between;
align-items: center;

`
export const LogoContainer = styled.div`

`
export const LogoImg = styled.img`
width: 20%;
height: 20%;
`

export const NavItems = styled.div`

`
export const NavOl = styled.ol`
display: flex;
gap: 2rem;
list-style-type: none;
`

export const NavLi = styled.li`
font-size: 2rem;
`

export const NavListItem = ({text}) => {
    return (
        <NavLi>{text}</NavLi>
    )
}