/** @type {import('next').NextConfig} */
module.exports = {
	reactStrictMode: true,
	images: {
		domains: [],
	},
	env: {
		GOOGLE_SITE_KEY: process.env.GOOGLE_SITE_KEY,
	},
};
