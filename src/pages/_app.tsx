import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/globals.css';
import {AppProps} from 'next/app';

const MyApp = ({Component, pageProps}: AppProps) => {

    return (
        <Component {...pageProps} />
    );
}

export default MyApp;
