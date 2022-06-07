import styled from "styled-components";

export const CartStyle = styled.div`
    .container-cart{
        display: inline-flex;
        justify-content: space-between;
        align-items: center;
        max-width: 100%;
        background-color:#F5F5F5;
        gap: .5rem;
        padding: 0.25rem;
    }
    .container-img-cart{
        width: 100vw;
        max-width: 30%;
        background-color: #E0E0E0;
        border-radius: 0.25rem;
        gap: .4rem;
    }
    img{
        width: 4rem;
        height: 4rem;
    }
    .container-name{
        display: flex;
        flex-direction: column;
        width: 40%;
        height: 100%;
        align-items: flex-start;
        gap: 1rem;

    }
    .container-name h3{
        font-size: 1.2rem;
        font-weight: 700;
        color: #333333;
    }
    .container-name span{
        font-size: .75rem;
        font-weight: 400;
        color: #333333;
    }
    .container-price{
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 1rem
    }
    .container-price span{
        font-size: .75rem;
        font-weight: 500;
        color: #BDBDBD;
        cursor: pointer;

    }
    .container-price p{
        font-size: .875rem;
        font-weight: 400;
        color: #27AE60;
    }

`