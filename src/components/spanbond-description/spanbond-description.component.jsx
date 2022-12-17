import { useEffect, useState } from "react";

import { getData } from "../../utils/getData";

import Arrow from '../../icons/material-symbols_arrow-outward.svg';

import styled from "styled-components";


const SpanbondDescription = () => {
    const [data, setData] = useState()
    useEffect(() => {
        getData('pages/1').then(data => setData(data.data))
    }, [])
    return (
        <SpanbondContainer>
            <h3>{data?.name}</h3>
            <Description dangerouslySetInnerHTML={{ __html: data?.body }}>
            </Description>
            <Button><Arrow /></Button>
        </SpanbondContainer>
    )
}

export default SpanbondDescription;

const SpanbondContainer = styled.section`
    display: flex;
    flex-direction: column;
    padding: 142px 34px 0 34px;
    gap: 80px;
    color: #242424;
    justify-content: center;
    align-items: center;

    h3 {
        font-size: 24px;
        font-weight: 700;
        line-height: 28px;
        align-self: flex-start;
    }

    @media screen and (min-width: 769px){
        h3{
            text-align: center;
            width: 100%;
        }
    }
`

const Description = styled.article`
    display: flex;
    flex-direction: column;
    font-weight: 500;
    line-height: 150%;
    gap: 1.5em;

    @media screen and (min-width: 769px){
        width: 50%;
    }
`

const Button = styled.button`
    width: fit-content;
    background-color: #FB4A7B;
    border: none;
    width: 80px;
    height: 80px;
    border-radius: 800px;
    cursor: pointer;
    position: relative;
    display: flex;
    align-items: center;
    margin-top: 10px;

    svg {
        position: absolute;
        top: 27px;
        left: 30px;
        scale: 1.2;
    }

    svg * {
        fill: #FFFFFF;
    }
`