import React, { useRef } from "react";
import styled, { keyframes } from "styled-components";

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
import ETH from "../../assets/icons8-ethereum-48.png";

const Section = styled.section`
    min-height: 100vh;
    width: 100%;
    background-color: ${(props) => props.theme.text};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow-x: hidden;

    & > *:first-child {
        animation-duration: 20s;
        @media (max-width: 30em) {
            animation-duration: 15s;
        }
    }

    & > *:last-child {
        animation-duration: 15s;
        @media (max-width: 30em) {
            animation-duration: 10s;
        }
    }
`;

const move = keyframes`
    0% {
        transform: translateX(100%);
    }
    100% {
        transform: translateX(-100%);
    }
`;

const Row = styled.div`
    white-space: nowrap;
    box-sizing: content-box;
    margin: 2rem 0;
    display: flex;
    animation: ${move} 20s linear infinite ${(props) => props.direction};
`;

const ImgContainer = styled.div`
    width: 15rem;
    margin: 0 1rem;
    background-color: ${(props) => props.theme.body};

    border-radius: 20px;
    cursor: pointer;

    @media (max-width: 48em) {
        width: 12rem;
    }

    @media (max-width: 30em) {
        width: 10rem;
    }

    img {
        width: 100%;
        height: auto;
        object-fit: cover;
    }
`;

const Details = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0.8rem 1rem;
    background-color: ${(props) => props.theme.text};
    border: 2px solid ${(props) => `rgba(${props.theme.bodyRgba}, 0.5)`};
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;

    span {
        font-size: ${(props) => props.theme.fontsm};
        color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.5)`};
        font-weight: 600;
        line-height: 1.5rem;
    }

    h1 {
        font-size: ${(props) => props.theme.fontmd};
        color: ${(props) => props.theme.body};

        @media (max-width: 30em) {
            font-size: ${(props) => props.theme.fontsm};
        }
    }
`;

const Price = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
        width: 1rem;
        height: auto;
        object-fit: cover;
    }
`;

const NftItem = ({ img, number = 0, price = 0 }) => {
    return (
        <ImgContainer>
            <img src={img} alt="The Weirdos" />
            <Details>
                <div>
                    <span>Weidros</span>
                    <br />
                    <h1>#{number}</h1>
                </div>

                <div>
                    <span>Price</span>
                    <Price>
                        <img src={ETH} alt="ETH" />
                        <h1>{Number(price).toFixed(1)}</h1>
                    </Price>
                </div>
            </Details>
        </ImgContainer>
    );
};

const Showcase = () => {
    const row1Ref = useRef();
    const row2Ref = useRef();

    const play = (rowRef) => {
        rowRef.current.style.animationPlayState = "running";
    };

    const pause = (rowRef) => {
        rowRef.current.style.animationPlayState = "paused";
    };

    return (
        <Section id="showcase">
            <Row
                direction="none"
                ref={row1Ref}
                onMouseOver={() => pause(row1Ref)}
                onMouseOut={() => play(row1Ref)}
            >
                <NftItem img={img1} number={123} price={1.5} />
                <NftItem img={img2} number={564} price={2.8} />
                <NftItem img={img3} number={154} price={3.6} />
                <NftItem img={img4} number={678} price={4.4} />
                <NftItem img={img5} number={692} price={5.1} />
            </Row>
            <Row
                direction="reverse"
                ref={row2Ref}
                onMouseOver={() => pause(row2Ref)}
                onMouseOut={() => play(row2Ref)}
            >
                <NftItem img={img6} number={914} price={6.7} />
                <NftItem img={img7} number={490} price={1.2} />
                <NftItem img={img8} number={864} price={3.2} />
                <NftItem img={img9} number={204} price={1} />
                <NftItem img={img10} number={302} price={4.4} />
            </Row>
        </Section>
    );
};

export default Showcase;
