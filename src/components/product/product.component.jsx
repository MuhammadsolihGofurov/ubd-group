import Image from "next/image";
import styled from "styled-components";

const Product = ({ product }) => {
    const { title, description, img } = product;

    return (
        <ProductContainer>
            <Image src={img} width={88} height={88} alt="Category-logo" />
            <h3>{title}</h3>
            <p>{description}</p>
        </ProductContainer>
    );
};

export default Product;

const ProductContainer = styled.div`
    padding: 0 34px;

    img {
        margin-bottom: 40px;
    }

    h3 {
        margin-bottom: 16px;
    }
`
