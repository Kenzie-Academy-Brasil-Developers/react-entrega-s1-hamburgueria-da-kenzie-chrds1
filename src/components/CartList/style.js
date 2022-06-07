import styled from "styled-components";

export const CardListStyle = styled.div`
    .container-carrinho{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        max-width: 100%; 
        height: 300px;
    }
    .header-carrinho{
        border-top-left-radius: .5rem ;
        border-top-right-radius: 0.5rem;
        height: 3rem;
        background-color: #27AE60;
        color: #ffffff;
        font-size: 1.125rem;
        font-weight: 700;
        display: inline-flex;
        justify-content: center;
        align-items: center;
    }
    .container-cards-carrinho{
        background-color:#F5F5F5;
        height: 12rem;
        overflow-y: scroll;
    }
    .container-total-carrinho{
        display: flex;
        flex-direction: column;
        gap: .5rem;
        background-color: #F5F5F5;
    }
    .container-total-carrinho div{
        display: inline-flex;
        justify-content: space-between;
        padding: 0.5rem;
    }
    .container-total-carrinho div span{
        font-size: .875rem;
        font-weight: 600;
        color: #333333;
    }
    .container-total-carrinho div p{
        font-size: .875rem;
        font-weight: 600;
        color: #828282;
    }
    .container-total-carrinho button{
        background-color: #E0E0E0;
        color: #828282;
        margin: 0.5rem;
    }

`