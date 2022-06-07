import styled from "styled-components";

export const ProductStyle= styled.div`
    .card{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        width: 250px;
        max-width: 100%;
        height: 300px;
        border: 2px solid #E0E0E0;
        border-radius: 0.5rem;
        gap: 1rem;
    }
    .container-img{
        display: flex;
        justify-content: center;
        width: 100%;
        height: 100%;
        max-height: 40%;
        background-color: #E0E0E0;
    }
    .container-img img{
        height: 100%;
        
    }
    .container-descricao{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
        gap: 1rem;
        padding: 1rem;
    }
    .container-descricao h3{
        font-weight: 700;
        font-size: 18px;
        color: #333333;
    }
    .container-descricao span{
        font-weight: 400;
        font-size: 12px;
        color: #333333;
    }
    .container-descricao .price{
        font-weight: 600;
        font-size: 14px;
        color: #27AE60;
    }
    
    @media (min-width: 768px){
        .card{
            width: 0;
            min-width: 20vw;
            max-width: 25vw;
            height: 300px;
            border: 2px solid #E0E0E0;
            border-radius: 0.5rem;
            gap: 1rem;
    }
    }


`