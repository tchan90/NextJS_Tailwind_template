import type { NextPage } from "next";
import Head from "next/head";
import Navigation from "../components/navigation";
import Footer from "../components/footer"

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>VHT Perth</title>
				<meta
					name="description"
					content="Authenthic Asian Foods and Liquor. Retail and Wholesale Distribution. WA Owned and Operated Family Business"
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
				{/* Second Page */}
				<div className="h-screen bg-red-200">
					<div className="container flex">
						<div className="w-6/12">Block 1</div>
						<div className="w-6/12">Block 2</div>
					</div>
				</div>
        {/* Gallery */}
        <div className="flex h-screen bg-yellow-200">
  <div className="m-auto  w-11/12 ">
    <div className="flex justify-between ">
      <p>left</p>
    <h3>Slide Show</h3>
    <p>right</p>
      </div>
  </div>
</div>
{/* Instagram */}
<div className="flex h-screen bg-purple-200">
 <div className="container mx-auto w-full p-6">
 <h2 className="text-center">Instagram</h2>

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
	{/* Contact */}
  <div className="h-screen bg-red-200">
					<div className="container flex">
						<div className="w-6/12 p-6">
              <div className="mt-6">  <label className="block text-gray-700 text-sm font-bold mb-2" for="formInput">
        Form input 1
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Form input 1" /></div>
      <div className="mt-6">  <label className="block text-gray-700 text-sm font-bold mb-2" for="formInput">
        Form input 1
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Form input 1" /></div>
          
            </div>
						<div className="w-6/12">Block 2</div>
					</div>
				</div>
			</main>
      <Footer />
		</div>
	);
};

export default Home;
