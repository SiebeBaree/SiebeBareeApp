import {Html, Head, Main, NextScript} from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta charSet="UTF-8"/>
                <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
                <meta name="description"
                      content="Welcome to the portfolio of Siebe Barée, a passionate full-stack developer with a strong inclination towards Web Development and TypeScript. Dive in to explore his diverse projects, discover his skills, and see how he thrives when tackling new challenges."/>
                <meta name="keywords"
                      content="Siebe Barée, Full Stack Developer, Web Development, TypeScript, Portfolio, Web Developer, Coding, Programming, JavaScript, Node.js, React, NextJS, Next.JS, Flutter, Firebase, Python, Java, Full Stack Web Development, Mobile App Developer"/>
                <link rel="manifest" href="/manifest.json"/>
                <meta name="author" content="Siebe Barée"/>
                <meta name="robots" content="index, follow"/>
                <link rel="canonical" href="https://siebebaree.be/"/>
                <link rel="apple-touch-icon" href="/logo192.png"/>
                <link rel="icon" href="/favicon.ico"/>

                <meta property="og:image" content="/logo512.png"/>
                <meta property="og:description"
                      content="Welcome to the portfolio of Siebe Barée, a passionate full-stack developer with a strong inclination towards Web Development and TypeScript. Dive in to explore his diverse projects, discover his skills, and see how he thrives when tackling new challenges."/>
                <meta property="og:title" content="Siebe Barée"/>
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://siebebaree.be/"/>
                <meta property="og:locale" content="en_US"/>

                <meta name="twitter:card" content="summary"/>
                <meta name="twitter:creator" content="@BareeSiebe"/>
                <meta name="twitter:title" content="Siebe Barée"/>
                <meta name="twitter:description"
                      content="Welcome to the portfolio of Siebe Barée, a passionate full-stack developer with a strong inclination towards Web Development and TypeScript. Dive in to explore his diverse projects, discover his skills, and see how he thrives when tackling new challenges."/>
                <meta name="twitter:image" content="/logo512.png"/>

                <script src="https://www.google.com/recaptcha/api.js?render=6Lejum0nAAAAANGs28MgzCOBKQckkH5HdKU2GGkU"
                        async nonce="8pGXTnQH7cNedg22yPpvvdzLVXrpVDUN"></script>
            </Head>
            <body>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    )
}
