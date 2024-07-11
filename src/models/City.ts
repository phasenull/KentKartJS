import { KentKart } from "../KentKart"

export default class City {
	public readonly id: string
	public readonly name: string
	public readonly lat: number
	public readonly lon: number
	public readonly initialRegion: {
		lat: number
		lng: number
	}
	public readonly radius: number
	public readonly timezone: "Europe/Moscow"
	public readonly visible: boolean
	public readonly mCharge: string
	public readonly supportEmail: string[]
	public readonly supportCCEmail: string[]
	public readonly bicycleUpdateService: string
	public readonly tRefreshBicycle: number
	public readonly tRefreshCarpark: number
	public readonly paymentTypes: {
		creditCard: boolean
		bkmExpress: boolean
		masterPass: boolean
		sadad: boolean
	}
	public readonly testdynamicQrEnable: boolean
	public readonly testdynamicQrChangeDuration: number
	public readonly disableBusCapacity: boolean
	public readonly cacheFlag: boolean
	public readonly order: number
	public readonly panic: boolean
	public readonly trip: boolean
	public readonly nfc: boolean
	public readonly oCharge: boolean
	constructor(initial_info?: { region_code: string }) {
		const  region_code = initial_info?.region_code
		this.id = region_code
	}
	async fetch() {
		if (!this.id) throw new Error(`Tried to fetch city with invalid id (expected string, got ${this.id})`)
		return this.loadFrom(await KentKart.City.fetchCityDataFromRegionCode({ region: this.id }))
	}

	async fetchRoutes() {
		if (!this.id) throw new Error(`Tried to fetch city with invalid id (expected string, got ${this.id})`)
		return await KentKart.City.getRouteListFromRegionCode({region:this.id})
	}

	toJSON() {
		return Object.fromEntries(Object.entries(this))
	}
	loadFrom(data: Record<keyof City, City[keyof City]>) {
		Object.assign(this, data)
		return this
	}
}
