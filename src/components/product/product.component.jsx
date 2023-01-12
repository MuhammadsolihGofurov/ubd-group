import Image from "next/image";
import styled from "styled-components";

const Product = ({ product }) => {
    const { name, description, img } = product;
    const imgSrc = "http://api.ubdgroup.uz/" + img

    return (
        <ProductContainer>
            <ImageContainer>
                <Image src={imgSrc} width={88} height={88} alt="" />
            </ImageContainer>
            <h3>{name}</h3>
            <p>{description}</p>
        </ProductContainer>
    );
};

export default Product;

const ProductContainer = styled.div`
    padding: 0 34px;

    img {
        padding: 30px;
        background-color: white;
    }

    h3 {
        margin-bottom: 16px;
    }
`
const ImageContainer = styled.div`
    margin-bottom: 40px;
    width: 88px;
    height: 88px;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 0px 4px 40px rgba(38, 41, 43, 0.07);
`