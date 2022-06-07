import styled from "styled-components";

export const ProductsListStyle= styled.div`
    .container-products{
        display: flex;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-items: baseline;
        overflow-x: scroll;
        width: 100vw;
        max-width: 100%;
        margin: auto;
        gap: 10px
    }
    .span-produtos{
        color: red;
        display: inline-flex;
        gap:.2rem;
        font-size: .875rem;
        margin-bottom: .5rem;
    }

    @media (min-width: 768px){
        .container-products{
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
            align-items: baseline;
            width: 100vw;
            max-width: 100%;
            margin: auto;
            gap: 10px;
            overflow-x: hidden;
            overflow-y: hidden;
        }

    }

`