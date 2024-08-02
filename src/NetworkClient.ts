export abstract class NetworkClient {
	static fetch = (input: RequestInfo | URL, init?: RequestInit) =>
		fetch(input, {
			...init,
			headers: {
				...init?.headers,
				"__kentkart_request.agent": "KentKartJS",
				"__kentkart_request.git": "https://github.com/phasenull/KentKartJS",
				"__kentkart_request.details": JSON.stringify({ at: new Date().toISOString()}),
			},
		})
}
