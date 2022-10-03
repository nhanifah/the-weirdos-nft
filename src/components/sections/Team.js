import React from "react";
import styled from "styled-components";

import img1 from "../../assets/Nfts/bighead.svg";
import img2 from "../../assets/Nfts/bighead-1.svg";
import img3 from "../../assets/Nfts/bighead-2.svg";
import img4 from "../../assets/Nfts/bighead-3.svg";
import img5 from "../../assets/Nfts/bighead-4.svg";
import img6 from "../../assets/Nfts/bighead-5.svg";
import img7 from "../../assets/Nfts/bighead-6.svg";
import img8 from "../../assets/Nfts/bighead-7.svg";
import img9 from "../../assets/Nfts/bighead-8.svg";
import img10 from "../../assets/Nfts/bighead-10.svg";
import Confetti from "../ConfettiComp";

const Section = styled.section`
    min-height: 100vh;
    width: 100%;
    background-color: ${(props) => props.theme.body};
    position: relative;
    overflow-x: hidden;
`;

const Title = styled.h1`
    font-size: ${(props) => props.theme.fontxxl};
    text-transform: capitalize;
    width: fit-content;
    color: ${(props) => props.theme.text};
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem auto;
    border-bottom: 2px solid ${(props) => props.theme.text};

    @media (max-width: 40em) {
        font-size: ${(props) => props.theme.fontxl};
    }
`;

const Container = styled.div`
    width: 75%;
    margin: 2rem auto;

    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    @media (max-width: 64em) {
        width: 80%;
    }
    @media (max-width: 48em) {
        width: 90%;
        justify-content: center;
    }
`;

const Item = styled.div`
    width: calc(20rem - 4vw);
    padding: 1rem 0px;
    color: ${(props) => props.theme.body};
    margin: 2rem 1rem;
    position: relative;
    border: 2px solid ${(props) => props.theme.text};
    border-radius: 20px;
    transition: all 0.3s ease;
    backdrop-filter: blur(4px);
    z-index: 5;

    &:hover {
        img {
            transform: translateY(-2rem) scale(1.2);
        }
    }

    @media (max-width: 64em) {
        width: calc(20rem - 8vw);
    }
`;

const ImageContainer = styled.div`
    width: 92%;
    margin: 0 auto;
    background-color: ${(props) => props.theme.carouselColor};
    padding: 1rem;
    border-radius: 20px;
    border: 1px solid ${(props) => props.theme.text};

    cursor: pointer;

    img {
        width: 100%;
        height: auto;
        object-fit: cover;
        transition: all 0.3s ease;
    }
`;

const Name = styled.h2`
    font-size: ${(props) => props.theme.fontlg};
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    color: ${(props) => props.theme.text};
    margin-top: 1rem;
`;

// base on Name
const Position = styled(Name)`
    font-size: ${(props) => props.theme.fontmd};
    text-transform: capitalize;
    color: ${(props) => `rgba(${props.theme.textRgba}, 0.9)`};
    font-weight: 400;
    margin-top: 0;
`;

const Member = ({ img, name = "", position = "" }) => {
    return (
        <Item>
            <ImageContainer>
                <img src={img} alt={name} />
            </ImageContainer>
            <Name>{name}</Name>
            <Position>{position}</Position>
        </Item>
    );
};

const Team = () => {
    return (
        <Section id="team">
            <Confetti />
            <Title>Team</Title>
            <Container>
                <Member img={img1} name="Weidros" position="founder" />
                <Member img={img2} name="Weidros" position="founder" />
                <Member img={img3} name="Weidros" position="founder" />
                <Member img={img4} name="Weidros" position="founder" />
                <Member img={img5} name="Weidros" position="founder" />
                <Member img={img6} name="Weidros" position="founder" />
                <Member img={img7} name="Weidros" position="founder" />
                <Member img={img8} name="Weidros" position="founder" />
                <Member img={img9} name="Weidros" position="founder" />
                <Member img={img10} name="Weidros" position="founder" />
            </Container>
        </Section>
    );
};

export default Team;
