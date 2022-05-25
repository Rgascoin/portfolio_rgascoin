import type { AppProps } from 'next/app';
import '../../styles/globals.css';

// core styles shared by all of react-notion-x (required)
import 'react-notion-x/src/styles.css';
// used for code syntax highlighting (optional)
import 'prismjs/themes/prism-tomorrow.css';

function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}

export default App;
