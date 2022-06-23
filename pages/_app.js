import '../styles/globals.css';
import { TerminalContextProvider } from 'react-terminal';

function MyApp({ Component, pageProps }) {
  return (
    <TerminalContextProvider>
      <Component {...pageProps} />
    </TerminalContextProvider>
  );
}

export default MyApp;
