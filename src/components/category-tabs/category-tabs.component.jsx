import Image from "next/image";
import { useEffect, useState } from "react";

import { getData } from "../../utils/getData";

import VectorSliders from '../../../public/icons/Vector-Sliders.svg';

import styled from "styled-components";

const CategoryTabs = () => {
    const [data, setData] = useState();

    useEffect(() => {
        getData('categories').then((data) => setData(data.data));
    }, []);

    return (
        <Container>
            <ImageContainer>
                <VectorSliders />
            </ImageContainer>
            <SlidersContainer>
                {
                    data?.map((item) => (
                        <Sliders key={item.id}>
                            <Image
                                src={item.img}
                                alt=""
                                width="0"
                                height="0"
                                sizes="100vw" style={{ width: '100%', height: 'auto' }}
                            />

                            <SlideInfo color={item.id}>
                                <h2>{item.name}</h2>
                                <p>{item.description}</p>
                            </SlideInfo>
                        </Sliders>
                    ))
                }
            </SlidersContainer>
        </Container>
    )
}

export default CategoryTabs;

const Container = styled.div`
    position: relative;
`

const ImageContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: none;

    @media screen and (min-width: 769px){
        display: flex;
    }
`

const SlidersContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-bottom: -24px;
    position: relative;

    img {
        border-radius: 12px;
    }

    @media screen and (min-width: 769px){
        margin: auto;   
        gap: 100px;
        margin-bottom: -40px;
    }

    @media screen and (min-width: 1200px){
        width: 60%;
        margin: auto;   
        gap: 100px;
        margin-bottom: -40px;
    }
`


const Sliders = styled.div`
    position: relative;
    margin: 0 34px;
    margin-bottom: 24px;

    @media screen and (min-width: 769px){
        margin-bottom: 40px;
        position: relative;
    }
`

const SlideInfo = styled.div`
    position: absolute;
    bottom: 0;
    margin: 24px;
    z-index: 1;
    color: ${(color) => color.color !== 2 ? '#FFFFFF' : '#242424'};
    display: flex;
    flex-direction: column;
    gap: 16px;

    @media screen and (min-width: 769px){
        margin: 40px;
        padding: 12px 24px;
        background: rgba(242, 242, 242, 0.2);
        backdrop-filter: blur(8px);
        border-radius: 8px;
        max-width: 60%;

        h2{
            font-size: 40px;
            font-weight: 700;
        }

        p{
            font-weight: 600;
        }
    }

    @media screen and (min-width: 1400px){
        width: 50%;
    }
`