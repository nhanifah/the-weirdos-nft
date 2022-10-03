import React from "react";
import styled from "styled-components";

import Button from "./Button";

import img1 from "../assets/Nfts/bighead.svg";
import img2 from "../assets/Nfts/bighead-1.svg";
import img3 from "../assets/Nfts/bighead-2.svg";
import img4 from "../assets/Nfts/bighead-3.svg";
import img5 from "../assets/Nfts/bighead-4.svg";
import img6 from "../assets/Nfts/bighead-5.svg";

const Section = styled.section`
    height: 25rem;
    width: 100%;
    position: relative;
    border-top: 2px solid ${(props) => props.theme.text};
    border-bottom: 2px solid ${(props) => props.theme.text};

    background-color: ${(props) => `rgba(${props.theme.textRgba}, 0.9)`};
    color: ${(props) => props.theme.body};

    display: flex;
    justify-content: center;
    align-items: center;

    overflow: hidden;

    @media (max-width: 48em) {
        height: 15rem;
        flex-direction: column;
    }
`;

const ImageContainer = styled.div`
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    display: flex;
    justify-content: center;
    align-items: center;

    opacity: 0.2;

    img {
        width: 15rem;
        height: auto;
        object-fit: cover;
    }

    @media (max-width: 48em) {
        img {
            width: 10rem;
            height: auto;
        }
    }
`;

const ButtonContainer = styled.div`
    width: 35%;
    display: flex;
    justify-content: flex-end;

    @media (max-width: 48em) {
        width: 100%;
        justify-content: center;
    }

    button {
        padding: 1.5rem 3rem;
        font-size: ${(props) => props.theme.fontlg};
        font-weight: 600;

        @media (max-width: 48em) {
            padding: 1rem 2rem;
        }
        @media (max-width: 48em) {
            padding: 0.5rem 2rem;
            font-size: ${(props) => props.theme.sm};
        }
    }
`;

const Title = styled.h1`
    width: 40%;
    padding: 1rem 2rem;
    text-transform: capitalize;
    font-size: ${(props) => props.theme.fontxxxl};
    color: ${(props) => props.theme.body};
    text-shadow: 1px 1px 2px ${(props) => props.theme.text};
    z-index: 10;

    @media (max-width: 64em) {
        font-size: ${(props) => props.theme.fontxxl};
        text-align: center;
        width: 40%;
    }
    @media (max-width: 48em) {
        font-size: ${(props) => props.theme.fontxl};
        padding: 2rem 0;
        width: 100%;
    }
`;

const Banner = () => {
    return (
        <Section>
            <ImageContainer>
                <img src={img1} alt="Weidrops" />
                <img src={img2} alt="Weidrops" />
                <img src={img3} alt="Weidrops" />
                <img src={img4} alt="Weidrops" />
                <img src={img5} alt="Weidrops" />
                <img src={img6} alt="Weidrops" />
            </ImageContainer>

            <Title>
                Join the
                <br />
                weirdos club
            </Title>
            <ButtonContainer>
                <Button text="Join now" light link="#" />
            </ButtonContainer>
        </Section>
    );
};

export default Banner;
