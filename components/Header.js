import React from "react";
import { HeaderContainer, LogoContainer, LogoImg, NavItems, NavListItem, NavOl } from "./Header.Styles";
import foodLogo from "../Images/foodLogo.jpg"

export const Header = () => {

    return (
<HeaderContainer>
    <LogoContainer>
    <LogoImg src={foodLogo} />
    </LogoContainer>
    <NavItems>
        <NavOl>
            <NavListItem text="Home" />
            <NavListItem text="About Us" />
            <NavListItem text="Contact US" />
            <NavListItem text="Cart" />
        </NavOl>
    </NavItems>
    </HeaderContainer>
    )
}