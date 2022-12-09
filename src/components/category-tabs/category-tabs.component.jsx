import Image from "next/image";

import { useEffect, useState } from "react";

import { getData } from "../../utils/getData";

import styled from "styled-components";

const CategoryTabs = () => {
    const [sliders, setSliders] = useState();

    useEffect(() => {
        getData('sliders').then((res) => setSliders(res));
    }, []);

    return (
        <Container>
            <div>
                {
                    sliders?.map((slider) => (
                        <Sliders key={slider.id}>
                            <Image
                                src={slider.img}
                                alt=""
                                width="0"
                                height="0"
                                sizes="100vw" style={{ width: '100%', height: 'auto' }}
                            />

                            <SlideInfo color={slider.id}>
                                <h2>{slider.title}</h2>
                                <p>{slider.description}</p>
                            </SlideInfo>
                        </Sliders>
                    ))
                }
            </div>
        </Container>
    )
}

export default CategoryTabs;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 0 34px;
    margin-bottom: -24px;

    img {
        border-radius: 12px;
    }

    @media screen and (min-width: 769px){
        width: 60%;
        margin: auto;   
        gap: 100px;
        margin-bottom: -40px;
    }
`

const Sliders = styled.div`
    position: relative;
    margin-bottom: 24px;

    @media screen and (min-width: 769px){
        margin-bottom: 40px;
    }
`

const SlideInfo = styled.div`
    position: absolute;
    bottom: 0;
    margin: 24px;
    z-index: 1;
    color: ${(color) => color.color !== 1 ? '#FFFFFF' : '#242424'};
    display: flex;
    flex-direction: column;
    gap: 16px;

    @media screen and (min-width: 769px){
        margin: 40px;
        padding: 12px 24px;
        background: rgba(242, 242, 242, 0.2);
        backdrop-filter: blur(8px);
        border-radius: 8px;
        max-width: 50%;

        h2{
            font-size: 40px;
            font-weight: 700;
        }

        p{
            font-weight: 600;
        }
    }
`