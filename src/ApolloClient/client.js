import { ApolloClient, InMemoryCache, from, HttpLink } from "@apollo/client";
import { onError } from "@apollo/client/link/error";

const errorLink = onError(({ graphQLErrors, networkError }) => {
	if (graphQLErrors) {
		graphQLErrors.map((message, location, path) => {
			alert(`Graphql error ${message}`);
		});
	}
});

const link = from([
	errorLink,
	new HttpLink({ uri: process.env.REACT_APP_API_URL }),
]);

const client = new ApolloClient({
	cache: new InMemoryCache(),
	link: link,
});

export { client };
