import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export const getStaticProps: GetStaticProps = async (context) => {
	const data = await fetch("../api/...");

	if (!data) {
		return {
			notFound: true,
		};
	}

	return {
		props: { data }, // will be passed to the page component as props
		revalidate: 10, // re-requests from API within 10 seconds
	};
};

const Home: NextPage = ({ props }: any) => {
	return (
		<>
			<Head>
				<title>NextJS and Tailwind template</title>
				<meta
					name="description"
					content="Template for NextJs and Tailwind site"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				{/* First page */}
				<div className="h-screen bg-blue-200 max-w-full	">
					<Navigation />
					<div className="p-10">
						<div className="container flex">
							<div className="w-6/12">Block 1</div>
							<div className="w-6/12">Block 2</div>
						</div>
					</div>
				</div>
				{/* Second Page - responsiveness */}
				<div className="h-screen bg-red-200">
					<div className="container flex">
						<div className="visible xl:hidden w-6/12">
							Visible on mobile / tablet view
						</div>
						<div className="hidden xl:block w-6/12">
							Visible on large desktop view
						</div>
					</div>
				</div>
				{/* Slide Gallery */}
				<div className="flex h-screen bg-yellow-200">
					<div className="m-auto  w-11/12 ">
						<div className="flex justify-between ">
							<p>left</p>
							<h3>Slide Show</h3>
							<p>right</p>
						</div>
					</div>
				</div>
				{/* Gallery */}
				<div className="flex h-screen bg-purple-200">
					<div className="container mx-auto w-full p-6">
						<h2 className="text-center">Gallery</h2>

						<div className="grid grid-cols-3 gap-4 text-center">
							<div>1</div>
							<div>2</div>
							<div>3</div>
							<div>4</div>
							<div>5</div>
							<div>6</div>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
};

export default Home;
