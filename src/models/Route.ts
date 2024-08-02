import { KentKart } from "../KentKart"

export default class Route {
	// routeInfo
	public readonly routeCode: string
	public readonly name: string
	public readonly type: "route" = "route"
	// common
	public readonly displayRouteCode: string
	private __region: string
	constructor({ routeCode, name, displayRouteCode, region }: { routeCode: string; name: string; displayRouteCode: string; region: string }) {
		this.routeCode = routeCode
		this.name = name
		this.displayRouteCode = displayRouteCode
		this.__region = region
	}

	private loadFrom(data: Record<keyof Route, Route[keyof Route]>) {
		Object.assign(this, data)
		return this
	}
	public toPathCode({ direction }: { direction: 0 | 1 }) {
		return `${this.routeCode}${direction}`
	}
	public async fetchPaths({
		include,
	}: {
		include: {
			pointList: boolean
			busList: boolean
			busStopList: boolean
			timeTableList: boolean
			scheduleList: boolean
		}
	}) {
		const resultType = Object.values(include)
			.map((e) => (e ? "1" : "0"))
			.join("")
		return [{},{}]
	}
}
