import lande, { type Language } from "lande";

export const DEFAULT_LANG: Language = "eng";

export const detectLanguage = (text: string): Language => {
	const probabilities = lande(text);

	if (!probabilities.length) {
		return DEFAULT_LANG;
	}

	const language = probabilities[0];

	return language?.[0] ?? DEFAULT_LANG;
};
