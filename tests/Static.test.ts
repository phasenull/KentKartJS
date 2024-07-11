import { test, expect } from "vitest"
import { KentKart } from "../src"
test("KentKart.getCityList", async () => {
	const data = await KentKart.City.getCityList()
	// console.log(JSON.stringify(data[0],undefined,4))
	console.log(await data[0].fetchRoutes())
	expect(data.map((e) => e.id)).toContain("004")
})
