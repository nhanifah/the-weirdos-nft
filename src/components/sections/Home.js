import React from "react";
import styled, { keyframes } from "styled-components";
import CoverVideo from "../CoverVideo";
import TypeWriterText from "../TypeWriterText";
import RoundTextBlack from "../../assets/Rounded-Text-Black.png";

const Section = styled.section`
    min-height: ${(props) => `calc(100vh - ${props.theme.navHeight})`};
    width: 100%;
    position: relative;
    background-color: ${(props) => props.theme.body};
    position: relative;
`;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 75%;
    min-height: 80vh;
    margin: 0 auto;

    @media (max-width: 64em) {
        width: 85%;
    }
    @media (max-width: 48em) {
        flex-direction: column-reverse;
        width: 100%;
        & > :first-child {
            width: 100%;
            margin-top: 2rem;
        }
    }
`;

const Box = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const spin = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const Round = styled.div`
    position: absolute;
    bottom: 2rem;
    right: 90%;
    width: 6rem;
    height: 6rem;
    border: 1px solid ${(props) => props.theme.text};
    border-radius: 50px;

    img {
        width: 100%;
        height: 100%;
        animation: ${spin} 6s linear infinite forwards reverse;
    }
    @media (max-width: 64em) {
        width: 4rem;
        height: 4rem;
        left: 50%;
        bottom: 100%;
        transform: translateX(-50%);
    }
`;

const Circle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3rem;
    height: 3rem;
    border-radius: 50px;
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: ${(props) => props.theme.fontlg};
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
    transform: translate(-50%, -50%);

    @media (max-width: 64em) {
        width: 2rem;
        height: 2rem;
        font-size: ${(props) => props.theme.fontlg};
    }
`;

const Home = () => {
    return (
        <Section id="home">
            <Container>
                <Box>
                    <TypeWriterText />
                </Box>
                <Box>
                    <CoverVideo />
                </Box>

                <Round>
                    <Circle>
                        &#x2193;
                        {/* arrow down */}
                    </Circle>
                    <img src={RoundTextBlack} alt="NFTs" />
                </Round>
            </Container>
        </Section>
    );
};

export default Home;
