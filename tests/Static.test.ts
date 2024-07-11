import { test, expect } from "vitest"
import { KentKart } from "../src"
test("KentKart.getCityList", async () => {
	const data = await KentKart.getCityList()
	expect(data.map((e) => e.id)).toContain("004")
})
