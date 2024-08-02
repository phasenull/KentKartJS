import { SERVICE } from "../../../config"
import { IRoute, KentKartResponse } from "../../../interfaces"
import { NetworkClient } from "../../../NetworkClient"

export async function fetchRoteListFromRegionId(args: { region_id: string }): KentKartResponse<{ routeList: IRoute[] }> {
	const request = await NetworkClient.fetch(
		`${SERVICE}/route/list?${new URLSearchParams({
			region: args.region_id,
		}).toString()}`
	)
	return await request.json()
}
