import React, { useState } from "react";
import styled from "styled-components";

import LogoText from "./Logo";
import Button from "./Button";

const Section = styled.section`
    width: 100%;
    background-color: ${(props) => props.theme.body};
`;

const Navbar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 85%;
    height: ${(props) => props.theme.navHeight};
    margin: 0 auto;

    .mobile {
        display: none;
    }

    @media (max-width: 64em) {
        .desktop {
            display: none;
        }
        .mobile {
            display: inline-block;
        }
    }
`;

const Menu = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style-type: none;
    transition: all 0.3s ease;

    // 64em = 1024px
    @media (max-width: 64em) {
        position: fixed;
        top: ${(props) => props.theme.navHeight};
        left: 0;
        right: 0;
        bottom: 0;
        /* width: 100%; */
        height: ${(props) => `calc(100vh ${props.theme.navHeight})`};
        z-index: 50;
        background-color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.85)`};
        flex-direction: column;
        justify-content: center;

        backdrop-filter: blur(2px);

        transform: ${(props) =>
            props.open ? "translateY(0)" : "translateY(100%)"};
    }
`;

const MenuItem = styled.li`
    margin: 0 1rem;
    color: ${(props) => props.theme.text};
    cursor: pointer;

    &::after {
        content: "";
        display: block;
        width: 0%;
        height: 2px;
        background-color: #333;
        transition: all 0.2s ease;
    }

    &:hover::after {
        width: 100%;
    }

    // 64em = 1024px
    @media (max-width: 64em) {
        margin: 1rem 0;

        &::after {
            display: none;
        }
    }
`;

const MenuHamburger = styled.div`
    display: none;
    width: 1.5rem;
    height: 1.5rem;
    position: relative;
    cursor: pointer;

    span {
        display: block;
        border-radius: 4px;
        width: 1.5rem;
        height: 2px;
        background-color: ${(props) => props.theme.text};
        position: absolute;
        left: 0;
        right: 0;
        transition: all 0.3s ease;

        &:first-child {
            top: ${(props) => (props.open ? "50%" : "10%")};
            transform: ${(props) =>
                props.open ? "translateY(-50%) rotate(45deg)" : "rotate(0)"};
        }

        &:nth-child(2) {
            top: 50%;
            transform: translateY(-50%);
            /* display: ${(props) => (props.open ? "none" : "inline-block")}; */
            transform: ${(props) =>
                props.open ? "translateX(100%)" : "translateX(0)"};
            opacity: ${(props) => (props.open ? "0" : "1")};
            transition: all 0.3s ease;
        }

        &:last-child {
            bottom: ${(props) => (props.open ? "50%" : "10%")};
            transform: ${(props) =>
                props.open ? "translateY(50%) rotate(-45deg)" : "rotate(0)"};
        }
    }

    // 64em = 1024px
    @media (max-width: 64em) {
        display: block;
    }
`;

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const scrollTo = (id) => {
        let element = document.getElementById(id);
        element.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
        });

        setIsOpen(!isOpen);
    };

    return (
        <Section>
            <Navbar>
                <LogoText />
                <MenuHamburger open={isOpen} onClick={() => setIsOpen(!isOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </MenuHamburger>
                <Menu open={isOpen}>
                    <MenuItem onClick={() => scrollTo("home")}>Home</MenuItem>
                    <MenuItem onClick={() => scrollTo("about")}>About</MenuItem>
                    <MenuItem onClick={() => scrollTo("roadmap")}>
                        Roadmap
                    </MenuItem>
                    <MenuItem onClick={() => scrollTo("showcase")}>
                        Showcase
                    </MenuItem>
                    <MenuItem onClick={() => scrollTo("team")}>Team</MenuItem>
                    <MenuItem onClick={() => scrollTo("faq")}>Faq</MenuItem>
                    <MenuItem className="mobile">
                        <Button text="Collection" link="/" />
                    </MenuItem>
                </Menu>
                <div className="desktop">
                    <Button text="Collection" link="/" />
                </div>
            </Navbar>
        </Section>
    );
};

export default Navigation;
