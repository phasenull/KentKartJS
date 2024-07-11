import C_City from "./models/City"
import { NetworkClient } from "./NetworkClient"
import { Booleanify } from "./util"

export namespace KentKart {
	// Turkey server
	const SERVICE = "https://service.kentkart.com/rl1/api"
	export namespace City {
		export async function getCityList(): Promise<C_City[]> {
			const request = await NetworkClient.fetch(`${SERVICE}/city`)
			let data: any[]
			try {
				data = ((await request.json()) as any).city
			} catch {
				data = []
			}
			data = data.map((e) =>
				new C_City().loadFrom({
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
				})
			) as C_City[]
			return data
		}
		export async function getRouteListFromRegionCode({ region }: { region: string }) {
			const request = await NetworkClient.fetch(
				`${SERVICE}/route/list?${new URLSearchParams({
					region: region,
				}).toString()}`
			)
			let data: any[]
			try {
				data = ((await request.json()) as any).city
			} catch {
				data = []
			}

		}
		export async function fetchCityDataFromRegionCode({ region }: { region: string }) {
			let regions = await getCityList()
			return regions.find((e) => e.id === region)
		}
	}
}
