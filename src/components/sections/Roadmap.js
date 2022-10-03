import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";

import DrawSvg from "../DrawSvg";

const Section = styled.section`
    min-height: 100vh;
    width: 100%;
    background-color: ${(props) => props.theme.body};
    position: relative;
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
    width: 70%;
    height: 200vh;
    background-color: ${(props) => props.theme.body};
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    @media (max-width: 64em) {
        width: 80%;
    }
    @media (max-width: 48em) {
        width: 90%;
    }
`;

const SvgContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Items = styled.ul`
    list-style: none;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 48em) {
        width: 90%;
    }

    & > *:nth-of-type(2n + 1) {
        justify-content: start;

        div,
        p {
            border-radius: 50px 0;
        }
        p {
            text-align: right;
        }

        @media (max-width: 48em) {
            justify-content: center;
        }
    }
    & > *:nth-of-type(2n) {
        justify-content: end;

        @media (max-width: 48em) {
            justify-content: center;
        }
        div,
        p {
            border-radius: 0 50px;
            @media (max-width: 48em) {
                border-radius: 50px 0;
                text-align: right;
            }
        }
        p {
            text-align: left;
        }
    }
`;

const Item = styled.li`
    width: 100%;
    height: 100%;
    display: flex;
    @media (max-width: 48em) {
        justify-content: flex-end !important;
    }
`;

const ItemContainer = styled.div`
    width: 40%;
    height: fit-content;
    padding: 1rem;
    border: 3px solid ${(props) => props.theme.text};

    @media (max-width: 48em) {
        width: 70%;
    }
`;

const Box = styled.div`
    height: fit-content;
    background-color: ${(props) => props.theme.carouselColor};
    color: ${(props) => props.theme.text};
    position: relative;
    border: 1px solid ${(props) => props.theme.text};
    padding: 1rem;
`;

const SubTitle = styled.p`
    display: block;
    font-size: ${(props) => props.theme.fontxl};
    color: ${(props) => props.theme.text};
    text-transform: capitalize;

    @media (max-width: 40em) {
        font-size: ${(props) => props.theme.fontlg};
        font-weight: 600;
    }
`;

const Text = styled.p`
    display: block;
    font-size: ${(props) => props.theme.fontsm};
    color: ${(props) => props.theme.text};
    text-transform: capitalize;

    font-weight: 400;
    margin: 0.5rem 0;

    @media (max-width: 40em) {
        font-size: ${(props) => props.theme.fontxs};
    }
`;

const roadmapData = [
    {
        title: "Grand Opening",
        text: "Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat",
    },
    {
        title: "Great Benefits",
        text: "Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat",
    },
    {
        title: "Early Access",
        text: "Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat",
    },
    {
        title: "New Merch",
        text: "Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat",
    },
    {
        title: "Holders Ranking",
        text: "Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat",
    },
];

const RoadMapItem = ({ title, subtext, addToRefs }) => {
    return (
        <Item ref={addToRefs}>
            <ItemContainer>
                <Box>
                    <SubTitle>{title}</SubTitle>
                    <Text>{subtext}</Text>
                </Box>
            </ItemContainer>
        </Item>
    );
};

const Roadmap = () => {
    const revealRefs = useRef([]);
    // revealRefs.current = [];

    gsap.registerPlugin(ScrollToPlugin);

    const addToRefs = (el) => {
        if (el && !revealRefs.current.includes(el)) {
            revealRefs.current.push(el);
        }
    };

    useEffect(() => {
        let tl = gsap.timeline();
        revealRefs.current.forEach((el, idx) => {
            tl.fromTo(
                el.childNodes[0],
                {
                    y: "0",
                },
                {
                    y: "-30%",

                    scrollTrigger: {
                        id: `sectio-${idx + 1}`,
                        trigger: el,
                        start: "top center+=200px",
                        end: "bottom center",
                        scrub: true,
                        // markers: true,
                    },
                }
            );
        });

        return () => {};
    });

    return (
        <Section id="roadmap">
            <Title>Roadmap</Title>
            <Container>
                <SvgContainer>
                    <DrawSvg />
                </SvgContainer>
                <Items>
                    <Item>&nbsp;</Item>
                    {/* <RoadMapItem title='Grand Opening' subtext='Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat'/>
                    <RoadMapItem title='Great Benefits' subtext='Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat'/>
                    <RoadMapItem title='Early Access' subtext='Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat'/>
                    <RoadMapItem title='New Merch' subtext='Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat'/>
                    <RoadMapItem title='Holders Ranking' subtext='Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat'/> */}
                    {roadmapData.map(({ title, text }, i) => (
                        <RoadMapItem
                            key={i}
                            addToRefs={addToRefs}
                            title={title}
                            subtext={text}
                        />
                    ))}
                </Items>
            </Container>
        </Section>
    );
};

export default Roadmap;
