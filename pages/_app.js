import App from 'next/app'
import { StaticKitProvider } from '@statickit/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { appWithTranslation } from '../i18n'


const MyApp =({ Component, pageProps }) => (
    <StaticKitProvider site="11f8f03dfc12">
     <Component {...pageProps} />
        </StaticKitProvider>
        )

MyApp.getInitialProps = async (appContext) => ({ ...await App.getInitialProps(appContext) })



export default appWithTranslation(MyApp)
