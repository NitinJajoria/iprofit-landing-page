const firstDefined = (...keys: string[]) => {
	for (const k of keys) {
		const v = process.env[k];
		if (v !== undefined && v !== "") return v;
	}
	return undefined;
};

const assertValue = (value: string | undefined, names: string[]) => {
	if (!value) {
		throw new Error(
			`Missing environment variable: one of [${names.join(
				", ",
			)}] must be defined`,
		);
	}
	return value;
};

export const projectId = assertValue(
	firstDefined("NEXT_PUBLIC_SANITY_PROJECT_ID", "SANITY_PROJECT_ID"),
	["NEXT_PUBLIC_SANITY_PROJECT_ID", "SANITY_PROJECT_ID"],
);

export const dataset = assertValue(
	firstDefined("NEXT_PUBLIC_SANITY_DATASET", "SANITY_DATASET"),
	["NEXT_PUBLIC_SANITY_DATASET", "SANITY_DATASET"],
);

export const apiVersion =
	firstDefined("NEXT_PUBLIC_SANITY_API_VERSION", "SANITY_API_VERSION") ||
	"2024-01-01";

export const studioTitle =
	firstDefined("NEXT_PUBLIC_SANITY_STUDIO_TITLE") || "iProfit Content";

export const useCdn = process.env.NODE_ENV === "production";

export const token =
	firstDefined("SANITY_API_READ_TOKEN", "SANITY_READ_TOKEN", "SANITY_TOKEN") ||
	undefined;
