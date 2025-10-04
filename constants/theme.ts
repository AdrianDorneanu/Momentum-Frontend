// theme.ts
export const colors = {
	appBackground: "#F8F5EF",   // app background
	card:       "#FFFFFF",   // cards / containers
	primary:    "#2E8B83",   // CTA green
	primaryDark:"#1E6B66",   // dark teal (icons, strong text)
	muted:      "#E7EDF0",   // inactive / progress track
	header:       "#0F172A",   // headings
	label:  "#475569",   // labels
	alert:      "#E67A3C",   // optional accent (strength)
};

export const radii = { sm: '8px', md: '12px', lg: '16px', xl: '20px' };
export const spacing = (n: number) => `${4 * n}px`;
