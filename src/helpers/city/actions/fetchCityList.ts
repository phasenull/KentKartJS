import { NetworkClient } from "../../../NetworkClient"
import { SERVICE } from "../../../config"
import { ICity, KentKartResponse } from "../../../interfaces"
import { Booleanify } from "../../../util"

export async function fetchCityList(): KentKartResponse<{ city: ICity[] }> {
	const request = await NetworkClient.fetch(`${SERVICE}/city`)
	const data = await request.json()
	data.city = data.city.map((e) => ({
		...e,
		lat: parseFloat(e.lat),
		lon: parseFloat(e.lon),
		initialRegion: {
			lat: parseFloat(e.initialRegion.lat),
			lng: parseFloat(e.initialRegion.lng),
		},
		radius: parseInt(e.radius),
		visible: !!e.visible,
		tRefreshBicycle: parseInt(e.tRefreshBicycle),
		tRefreshCarpark: parseInt(e.tRefreshCarpark),
		testdynamicQrEnable: Booleanify(e.testdynamicQrEnable),
		testdynamicQrChangeDuration: parseInt(e.testdynamicQrChangeDuration),
		cacheFlag: Booleanify(e.cacheFlag),
		panic: Booleanify(e.panic),
		nfc: Booleanify(e.nfc),
		oCharge: Booleanify(e.oCharge),
	}))
	return data
}
