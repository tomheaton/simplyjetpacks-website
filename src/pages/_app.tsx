import 'bootstrap-icons/font/bootstrap-icons.css';
import '@styles/globals.css';
import {AppProps} from 'next/app';
import Layout from "@components/Layout";

const App = ({Component, pageProps}: AppProps) => {

    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default App;
