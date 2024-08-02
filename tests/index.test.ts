import { test, expect } from "vitest"
import {fetchCityList} from "../src/helpers/city"
import {fetchRoteListFromRegionId, getPathInfoFromDisplayRouteCode} from "../src/helpers/route"

test("city.list", async () => {
	const data = await fetchCityList()
	// console.log(JSON.stringify(data[0],undefined,4))
	// console.log(await data[0].fetchRoutes())
	// console.log(data)
	expect(data.result.code).toBe(0)
	expect(data.city.map((e) => e.id)).toContain("004")
})

test("route.list",async ()=>{
	const data = await fetchRoteListFromRegionId({region_id:"004"})
	expect(data.result.code).toBe(0)
	expect(data.routeList.length).toBeGreaterThan(0)
})
test("route.info",async ()=>{
	const data = await getPathInfoFromDisplayRouteCode({region_id:"004",displayRouteCode:"33",resultType:{
		
	}})
	expect(data.result.code).toBe(0)
	expect(data.routeList.length).toBeGreaterThan(0)
})