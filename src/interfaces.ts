export type KentKartResponse<T> = Promise<{
	result: {
		message: "OK" | string
		code: 0 | number
		cmd: string
		dateTime: string
		debugTimeDiff: ""
		authType: "2" | "3" | "4"
	}
} & T>

export interface IRoute {
	routeCode: string
	displayRouteCode: string
	name: string
	type: "route"
	agencyId: string
	agencyName: string
}

export interface ICity {
	id: string
	name: string
	lat: number
	lon: number
	initialRegion: {
		lat: number
		lng: number
	}
	radius: number
	timezone: "Europe/Moscow"
	visible: boolean
	mCharge: string
	supportEmail: string[]
	supportCCEmail: string[]
	bicycleUpdateService: string
	tRefreshBicycle: number
	tRefreshCarpark: number
	paymentTypes: {
		creditCard: boolean
		bkmExpress: boolean
		masterPass: boolean
		sadad: boolean
	}
	testdynamicQrEnable: boolean
	testdynamicQrChangeDuration: number
	disableBusCapacity: boolean
	cacheFlag: boolean
	order: number
	panic: boolean
	trip: boolean
	nfc: boolean
	oCharge: boolean
}
