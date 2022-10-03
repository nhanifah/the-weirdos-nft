import React from 'react'
import styled from 'styled-components'

const Btn = styled.button`
    display: inline-block;
    background-color: ${props => !props.light ? props.theme.text : props.theme.body};
    color: ${props => !props.light ? props.theme.body : props.theme.text};
    outline: none;
    border: none;
    border-radius: 50px;
    font-size: ${props => props.theme.fontsm};
    padding: 0.9rem 2.3rem;
    cursor: pointer;
    position: relative;
    transition: all 0.2s ease;

    &:hover {
        transform: scale(0.9);
        transition: all 0.2s ease;
    }
    &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0);
        border: 2px solid  ${props => !props.light ? props.theme.text : props.theme.body};
        border-radius: 50px;
    }
    &:hover::after {
        padding: 0.3rem;
        transform: translate(-50%, -50%) scale(1);
    }
`

const Button = ({text, link, light=false}) => {

    return (
        <Btn light={light}>
            <a href={link} aria-label={text} target="_blank" rel="noreferrer">
                {text}
            </a>
        </Btn>
    )
}

export default Button
