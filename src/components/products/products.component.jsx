import { useEffect, useState } from "react";

import { getData } from '../../utils/getData';

import Product from "../product/product.component";

import Vector from '../../icons/Vector.svg';
import Vector1 from '../../icons/Vector1.svg';

import styled from "styled-components";

const Products = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getData('products').then((data) => setData(data));
    }, [])

    return (
        <Container>
            <ImageContainer>
                <Vector />
                <Vector1 />
            </ImageContainer>
            <h2>Продукция</h2>
            <ProductList>
                {
                    data?.map((product) => (
                        <Product product={product} key={product.id} />
                    ))
                }
            </ProductList>
        </Container>
    )
}

export default Products;

const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    color: #242424;
    margin: 120px 0;
    position: relative;
`

const ImageContainer = styled.div`
    position: absolute;
    top: 0;
    z-index: -1;
    top: 20%;
    right: 0;

    svg:nth-of-type(2){
        display: none;
    }

    @media screen and (min-width: 769px) {
        top: -40%;

        svg:nth-of-type(1){
            display: none;
        }

        svg:nth-of-type(2){
            display: flex;
        }
    }
`
const ProductList = styled.div`
    @media screen and (min-width: 769px){
        padding: 0 200px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        row-gap: 80px;


    }
`