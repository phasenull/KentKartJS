import { NetworkClient } from "./NetworkClient"
import { City } from "./types/Static"
import { Booleanify } from "./util"

export namespace KentKart {
	// Turkey server
	const SERVICE = "https://service.kentkart.com/rl1/api"
	export async function getCityList() : Promise<City[]> {
		const request = await NetworkClient.fetch(`${SERVICE}/city`)
		let data : any[]
		try {
			data = (await request.json() as any).city
		} catch {
			data = []
		}
		data = data.map((e)=>({
			...e,
			lat:parseFloat(e.lat),
			lon:parseFloat(e.lon),
			initialRegion: {
				lat:parseFloat(e.initialRegion.lat),
				lng:parseFloat(e.initialRegion.lng)
			},
			radius:parseInt(e.radius),
			visible: !!e.visible,
			tRefreshBicycle:parseInt(e.tRefreshBicycle),
			tRefreshCarpark:parseInt(e.tRefreshCarpark),
			testdynamicQrEnable: Booleanify(e.testdynamicQrEnable),
			testdynamicQrChangeDuration: parseInt(e.testdynamicQrChangeDuration),
			cacheFlag: Booleanify(e.cacheFlag),
			panic: Booleanify(e.panic),
			nfc: Booleanify(e.nfc),
			oCharge: Booleanify(e.oCharge)
		})) as City[]
		return data
	}
}