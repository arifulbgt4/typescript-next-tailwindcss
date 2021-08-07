import { ApolloProvider } from '@apollo/react-hooks';
import { useApollo } from 'utils/apollo';


import 'styles/global.css';

// need to provide types
export default function ExtendedApp({ Component, pageProps }) {

  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <Component
        {...pageProps}
      />
    </ApolloProvider>
  );
}
