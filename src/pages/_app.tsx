import 'bootstrap-icons/font/bootstrap-icons.css';
import '@styles/globals.css';
import {AppProps} from 'next/app';

const App = ({Component, pageProps}: AppProps) => {

    // TODO: app layout
    return (
        <Component {...pageProps} />
    );
}

export default App;
