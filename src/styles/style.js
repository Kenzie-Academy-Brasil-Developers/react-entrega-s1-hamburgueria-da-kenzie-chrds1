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
        gap: 1rem;
    }
    header{
        width: 100vw;
        max-width: 100%;
        background-color: #F5F5F5;
        padding: 1rem;
        margin-bottom: 1rem;
    }
    .container-Pesquisa{
        background-color: #ffffff;
        height: 3.5rem;
        width: 90%;
        margin: auto;
        padding: 0.5rem;
        box-sizing: border-box;
        display: inline-flex;   
        justify-content: space-between;
        align-items: center;

    }
    .container-Pesquisa input{
        height: 2.5rem;
        border: none;
        
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
    }
    
`