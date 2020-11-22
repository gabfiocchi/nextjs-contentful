import Document, { Html, Head, Main, NextScript } from 'next/document';
import { CssBaseline } from '@geist-ui/react';
class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)

        const styles = CssBaseline.flush()

        return {
            ...initialProps,
            styles: (
                <>
                    {initialProps.styles}
                    {styles}
                </>
            )
        }
    }

    render() {
        return (
            <Html>
                <Head>
                    <link href='https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css' rel='stylesheet' />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument