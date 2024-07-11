"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetworkClient = void 0;
class NetworkClient {
}
exports.NetworkClient = NetworkClient;
NetworkClient.fetch = (input, init) => fetch(input, {
    ...init,
    headers: {
        ...init === null || init === void 0 ? void 0 : init.headers,
        "__kentkart_request.agent": "KentKartJS",
        "__kentkart_request.git": "https://github.com/phasenull/KentKartJS.git",
        "__kentkart_request.url": ""
    },
});
