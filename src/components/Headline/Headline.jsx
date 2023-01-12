import styles from "./Headline.module.scss"

const Headline = () => {
    return (
        <div className={styles.container}>
            <div className={styles.image}>
            </div>
            <div className={styles.description}>
                <h1>UBD поможет вам с подбором спанбонда</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <button>Узнать подробнее</button>
            </div>
        </div>
    )
}

export default Headline;

// const HeadlineContainer = styled.main`
//     overflow: hidden;
//     position: relative;
//     color: white;
// `

// const ImageContainer = styled.div`
//     height: 503px;
//     width: 1462px;
//     background-image: url('/images/Property.png');
//     background-repeat: no-repeat;
//     background-size: cover;
//     background-position: -3em;

//     @media screen and (min-width: 1080px){
//         width: 2017px;
//         height: 698px;
//     }
// `

// const MainContainer = styled.section`
//     position: absolute;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     top: 108px;
//     padding: 0 53px 0 34px;
//     gap: 24px;

//     h1 {
//         margin: 0;
//         line-height: 38px;
//         font-size: 32px;
//     }

//     p{
//         font-weight: 600;
//     }

//     @media screen and (min-width: 1080px){
//         padding: 0 295px;

//         h1{
//             margin-top: 60px;
//             font-size: 68px;
//             line-height: 82px;
//         }
//     }
// `
// const Button = styled.button`
//     width: fit-content;
//     border: none;
//     padding: 14px 40px;
//     background-color: #FB4A7B;
//     border-radius: 500px;
//     color: white;
//     font-size: 16px;
//     font-weight: 800;
//     margin-top: 40px;
//     cursor: pointer;
// `