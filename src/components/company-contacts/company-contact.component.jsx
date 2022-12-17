import { useEffect, useState } from 'react';

import { getData } from '../../utils/getData';

import MapLogo from '../../icons/map.svg'

import styled from "styled-components";

const CompanyContacts = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getData('settings').then(data => setData(data));
    }, []);

    return (
        <ContactsContainer>
            <div>
                <h4>Телефон:</h4>
                <p>{data?.phone}</p>
            </div>
            <div>
                <h4>Почта:</h4>
                <p>{data?.email}</p>

            </div>
            <div>
                <h4>Адрес:</h4>
                <p>{data?.address}</p>
                <p><MapLogo />Показать на карте</p>
            </div>
        </ContactsContainer>
    )
}

export default CompanyContacts;

const ContactsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 102px 0 80px 0;
    grid-column: 2/3;
    grid-row: 1/2;
    color: #242424;

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        
        h4 {
            margin-top: 40px;
            margin-bottom: 24px;
            color: #BDBDBD;
        }

        p{
            font-size: 20px;
            font-weight: 600;
        }

        &:nth-of-type(3){
            p{
                &:nth-of-type(2){
                    margin-bottom: 21px;
                }

                &:nth-of-type(2){
                    color: #FB4A7B;
                    cursor: pointer;
                    display: flex;
                    gap: 8px;
                    margin-top: 21px;
                }
            }
        }
    }

    @media screen and (min-width: 769px) {
        flex-direction: row;
        flex-wrap: wrap;
        gap: 80px;
        margin: 0;

        div{
            align-items: flex-start;

            h4{
                margin-top: 0;
            }
        }
    }
`