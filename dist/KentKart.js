"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KentKart = void 0;
const NetworkClient_1 = require("./NetworkClient");
var KentKart;
(function (KentKart) {
    // Turkey server
    const SERVICE = "https://service.kentkart.com/rl1/api";
    async function getCityList() {
        const request = await NetworkClient_1.NetworkClient.fetch(`${SERVICE}/city`);
        let data;
        try {
            data = (await request.json()).city;
        }
        catch {
            data = [];
        }
        return data;
    }
    KentKart.getCityList = getCityList;
})(KentKart || (exports.KentKart = KentKart = {}));
