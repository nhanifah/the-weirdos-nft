import React from "react";
import styled from "styled-components";
import Banner from "./Banner";
import LogoText from "./Logo";

import Fb from "../Icons/Facebook";
import Instagram from "../Icons/Instagram";
import LinkedIn from "../Icons/LinkedIn";
import Twitter from "../Icons/Twitter";

const Section = styled.section`
    min-height: 100vh;
    height: 100vh;
    width: 100%;
    background-color: ${(props) => props.theme.body};
    position: relative;
    color: ${(props) => props.theme.text};

    display: flex;
    /* justify-content: center;
    align-items: center; */
    flex-direction: column;
`;

const Container = styled.div`
    width: 75%;
    margin: 2rem auto;

    display: flex;
    justify-content: space-between;
    align-items: center;

    border-bottom: 1px solid ${(props) => props.theme.text};

    @media (max-width: 48em) {
        width: 90%;
    }
`;

const SocialContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 48em) {
        width: 100%;
    }
`;

const Social = styled.div`
    margin: 1rem auto;
    a {
        padding-right: 0.5rem;
    }
`;

const Menu = styled.ul`
    width: 50%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 1rem;
    list-style-type: none;

    @media (max-width: 48em) {
        display: none;
    }
`;

const MenuItem = styled.li`
    color: ${(props) => props.theme.text};
    width: fit-content;
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
`;

const Bottom = styled.div`
    width: 75%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 48em) {
        flex-direction: column;
        width: 100%;
        span {
            margin-bottom: 1rem;
        }
    }
`;

const Footer = () => {
    return (
        <Section>
            <Banner />
            <Container>
                <SocialContainer>
                    <LogoText />
                    <Social>
                        <a
                            href="http://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="facebook"
                        >
                            <Fb />
                        </a>
                        <a
                            href="http://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="instagram"
                        >
                            <Instagram />
                        </a>
                        <a
                            href="http://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="twitter"
                        >
                            <Twitter />
                        </a>
                        <a
                            href="http://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="linkedin"
                        >
                            <LinkedIn />
                        </a>
                    </Social>
                </SocialContainer>
                <Menu>
                    <MenuItem>Home</MenuItem>
                    <MenuItem>About</MenuItem>
                    <MenuItem>Roadmap</MenuItem>
                    <MenuItem>Showcase</MenuItem>
                    <MenuItem>Team</MenuItem>
                    <MenuItem>Faq</MenuItem>
                </Menu>
            </Container>
            <Bottom>
                <span>
                    &copy; {new Date().getFullYear()} Weirdos Club. All rights
                    reserved.
                </span>
                <span>
                    Made with ❤ by <u>Thangtrn01</u>
                </span>
            </Bottom>
        </Section>
    );
};

export default Footer;
