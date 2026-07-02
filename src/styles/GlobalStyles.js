import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --font-body: 'Inter', sans-serif;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html {
        width: 100%;
        height: 100%;
        /* Enable smooth scrolling with Lenis */
        overflow-x: hidden;
        overflow-y: auto;
    }
    
    html.lenis {
        height: auto;
    }

    .lenis.lenis-smooth {
        scroll-behavior: auto !important;
    }

    .lenis.lenis-smooth [data-lenis-prevent] {
        overscroll-behavior: contain;
    }

    .lenis.lenis-stopped {
        overflow: hidden;
    }

    .lenis.lenis-scrolling iframe {
        pointer-events: none;
    }
    
    body, #root {
        width: 100%;
        min-height: 100vh;
    }

    body {
        font-family: var(--font-body);
        background-color: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.text};
        transition: background-color 0.6s ease, color 0.6s ease;
        overflow-x: hidden;
        padding-top: 0;
        
        /* Mobile optimization */
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-rendering: optimizeLegibility;
        
        /* Prevent horizontal scroll on mobile */
        max-width: 100vw;
        position: relative;
    }
    
    body.transitioning {
        overflow: hidden !important;
        height: 100vh;
    }
    
    /* Add spacing for fixed navbar */
    main, section:first-of-type {
        padding-top: 0;
    }
    
    /* Prevent text size adjustment on mobile */
    @media screen and (max-width: 768px) {
        body {
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
        }
    }

    /* Custom minimalist scrollbar */
    ::-webkit-scrollbar {
        width: 4px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.text};
        opacity: 0.3;
        border-radius: 2px;
    }

    ::-webkit-scrollbar-thumb:hover {
        opacity: 0.5;
    }

    /* Firefox scrollbar */
    * {
        scrollbar-width: thin;
        scrollbar-color: ${({ theme }) => theme.text}40 transparent;
    }

    a {
        color: inherit;
        text-decoration: none;
        transition: color 0.6s ease;
    }

    a:hover {
        color: inherit;
    }
    
    a:visited {
        color: inherit;
    }
    
    a:active {
        color: inherit;
    }

    /* Smooth theme transitions for all elements */
    * {
        transition: background-color 0.6s ease, color 0.6s ease, border-color 0.6s ease;
    }
    
    /* Prevent transition on animations */
    *[class*="motion"] {
        transition: none;
    }
    
    /* Improve touch interaction on mobile */
    button, a {
        -webkit-tap-highlight-color: transparent;
        touch-action: manipulation;
    }
    
    /* Prevent image overflow */
    img {
        max-width: 100%;
        height: auto;
        display: block;
    }
`;

export default GlobalStyle;