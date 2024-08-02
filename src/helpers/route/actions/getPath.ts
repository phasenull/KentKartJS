import { WEB } from "../../../config"
import { NetworkClient } from "../../../NetworkClient"

export async function getPathInfoFromDisplayRouteCode(args: {
	displayRouteCode: string
	resultType: {
		includeBusList: boolean
		includeStopList: boolean
		includeTimeTableList: boolean
		includeScheduleList: boolean
		includePointList: boolean
	}
	direction: "0" | "1"
	region_id: string
}) {
	const request = await NetworkClient.fetch(
		`${WEB}/getPathInfo?${new URLSearchParams({
			region: args.region_id,
			displayRouteCode: args.displayRouteCode,
			direction: args.direction,
			resultType: Object.entries(args.resultType)
				.map((e) => e[1])
				.join(""),
		}).toString()}`
	)
	console.log(request.url)
	return await request.json()
}
