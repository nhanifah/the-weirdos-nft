import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";

const drop = keyframes`
    0% {
        transform: translateY(-100%);
    }
    100% {
        transform: translateY(0);
    }
`;

const Up = styled.div`
    position: fixed;
    right: 1rem;
    bottom: 1rem;

    width: 3rem;
    height: 3rem;
    font-size: ${(props) => props.theme.fontxl};

    background-color: ${(props) => props.theme.body};
    border-radius: 50px;
    border: 1px solid ${(props) => props.theme.text};

    transition: all 0.2s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    z-index: 10;
    animation: ${drop} 0.2s ease;

    &:hover {
        transform: scale(1.2);
    }
`;

const ScrollToTop = () => {
    const upRef = useRef();
    const [show, setShow] = useState(false);
    const scrollTop = () => {
        setShow(document.documentElement.scrollTop >= 300);
    };
    useEffect(() => {
        window.addEventListener("scroll", scrollTop);

        return () => {
            window.removeEventListener("scroll", scrollTop);
        };
    }, []);

    const handleScrollToTop = () => {
        document.documentElement.scrollTo({
            behavior: "smooth",
            top: 0,
        });
    };

    return (
        <>
            {show && (
                <Up ref={upRef} onClick={handleScrollToTop}>
                    &#8593;
                </Up>
            )}
        </>
    );
};

export default ScrollToTop;
