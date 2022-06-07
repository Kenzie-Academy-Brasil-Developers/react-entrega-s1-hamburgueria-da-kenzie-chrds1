import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    *{  
        html, body, div, span, applet, object, iframe,
        h1, h2, h3, h4, h5, h6, p, blockquote, pre,
        a, abbr, acronym, address, big, cite, code,
        del, dfn, em, img, ins, kbd, q, s, samp,
        small, strike, strong, sub, sup, tt, var,
        b, u, i, center,
        dl, dt, dd, ol, ul, li,
        fieldset, form, label, legend,
        table, caption, tbody, tfoot, thead, tr, th, td,
        article, aside, canvas, details, embed, 
        figure, figcaption, footer, header, hgroup, 
        menu, nav, output, ruby, section, summary,
        time, mark, audio, video {
            margin: 0;
            padding: 0;
            border: 0;
            font-size: 100%;
            font-family: 'Inter';
            vertical-align: baseline;
            box-sizing: border-box;
        }
        /* HTML5 display-role reset for older browsers */
        article, aside, details, figcaption, figure, 
        footer, header, hgroup, menu, nav, section {
            display: block;
        }
        body {
            line-height: 1;
        }
        ol, ul {
            list-style: none;
        }
        blockquote, q {
            quotes: none;
        }
        blockquote:before, blockquote:after,
        q:before, q:after {
            content: '';
            content: none;
        }
        table {
            border-collapse: collapse;
            border-spacing: 0;
        }
    }
`
export const SectionStyle = styled.section`
    .container{
        width: 100vw;
        max-width: 100%;
        display: flex;
        flex-direction: column;
        margin: 0 auto 1rem auto;
        gap: .75rem;
    }
    header{
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        width: 100vw;
        max-width: 100%;
        background-color: #F5F5F5;
        padding: 1rem;
        margin-bottom: .5rem;
    }
    .logo{
        display: inline-flex;
        justify-content: center;
        align-items: baseline;
        margin-bottom: .5rem;
        gap: .4rem
    }
    .logo h1{
        font-size: 2.5rem;
        font-weight: 900;
        color: #333333;
    }
    .logo span{
        font-size: 1.5rem;
        font-weight: 700;
        color: #EB5757;
    }
    .container-Pesquisa{
        background-color: #ffffff;
        height: 3.5rem;
        width: 90%;
        padding: 0.5rem;
        box-sizing: border-box;
        display: inline-flex;   
        justify-content: space-between;
        align-items: center;
        border: 2px solid #E0E0E0 ;
        border-radius: 0.5rem;

    }
    .container-Pesquisa input{
        height: 2.5rem;
        border: none;
        width: 100vw;
        max-width: 60%;
        
    }
    button{
        height: 2.5rem;
        padding: 0.5rem;
        box-sizing: border-box;
        border: none;
        border-radius: 0.5rem;
        background-color: #27AE60;
        color: white;
        font-family: 'Inter';
        font-weight: 600;
        font-size: 14px;
        cursor: pointer;
    }
    .container-main{
        max-width: 90%;
        margin: auto;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    .container-produtos{
        width: 100vw;
        max-width: 100%;
        margin: auto;
    }
    .container-cart{
        margin: auto;
        width: 100vw;
        max-width: 100%;
    }

    @media (min-width: 768px){
        header{
            display: inline-flex;
            flex-direction: row;
            justify-content: space-between;
            padding: 1rem 3rem 1rem 3rem;
        }
        .container-Pesquisa{
            max-width: 40%;
            min-width: 170px;
        }
        .container-main{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-content: flex-start;
        }
        .container-produtos{
            width: 100vw;
            max-width: 70%;
        }
        .container-cart{
            width: 100vw;
            min-width: 30%;
            margin: 0 auto;
        }



    }

`