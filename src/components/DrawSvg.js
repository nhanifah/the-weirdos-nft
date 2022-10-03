import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import styled, { keyframes } from "styled-components";
import Vector from "../Icons/Vector";

const Bounce = keyframes`
    0%{
        transform: translateX(-50%) scale(0.5);
    }
    100% {
        transform: translateX(-50%) scale(1);
    }
`;

const VectorContainer = styled.div`
    position: absolute;
    top: 0.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 100%;
    overflow: hidden;

    svg {
        width: 100%;
        height: 100%;
    }

    @media (max-width: 48em) {
        left: 1rem;
    }
`;

const Ball = styled.div`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50px;
    background-color: ${(props) => props.theme.text};
    animation: ${Bounce} 0.5s linear infinite alternate;
    transition: all 0.2s linear;

    @media (max-width: 48em) {
        left: 1rem;
    }
`;

const DrawSvg = () => {
    const ref = useRef();
    const ballRef = useRef();

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        let element = ref.current;

        let svg = document.getElementsByClassName("svg-path")[0];

        const length = svg.getTotalLength();

        //Vị trí bắt đầu vẽ
        svg.style.strokeDasharray = length;

        //Ẩn svg trước khi scrolling bắt đầu
        svg.style.strokeDashoffset = length;

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: element,
                start: "top center",
                end: "bottom bottom",
                onUpdate: (self) => {
                    const draw = length * self.progress;

                    svg.style.strokeDashoffset = length - draw;
                },
                onToggle: (self) => {
                    if (self.isActive) {
                        ballRef.current.style.display = "none";
                    } else {
                        ballRef.current.style.display = "inline-block";
                    }
                },
            },
        });

        return () => {
            if (tl) {
                tl.kill();
            }
        };
    }, []);

    return (
        <>
            <Ball ref={ballRef} />
            <VectorContainer ref={ref}>
                <Vector />
            </VectorContainer>
        </>
    );
};

export default DrawSvg;
