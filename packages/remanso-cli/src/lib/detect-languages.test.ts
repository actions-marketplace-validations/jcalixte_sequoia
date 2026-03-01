import { describe, expect, test } from "bun:test";
import { detectLanguage } from "./detect-languages";

describe("Detect languages", () => {
	test("Detect English", () => {
		const lang = detectLanguage("Hello, World!");
		expect(lang).toBe("eng");
	});

	test("Detect French", () => {
		const lang = detectLanguage("Bonjour le monde !");
		expect(lang).toBe("fra");
	});

	test("Detect Portuguese", () => {
		const lang = detectLanguage("Oi, gente! Tudo bom?");
		expect(lang).toBe("por");
	});

	test("Detect the most used langage, here French", () => {
		const lang = detectLanguage("Hello World! J'espère que vous allez bien.");

		expect(lang).toBe("fra");
	});

	test("Detect the most used langage, here English", () => {
		const lang = detectLanguage(
			"Bonjour le monde! I hope, you're doing well in this incredible day!",
		);

		expect(lang).toBe("eng");
	});
});
