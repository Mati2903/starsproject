import Head from "next/head";
import Stars from "../components/Stars";
import More from "../components/More";
import { BsChevronDoubleDown } from "react-icons/bs";

export default function Home() {
	return (
		<>
			<Head>
				<title>Your way to the Stars &#9734;</title>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
				<link
					href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&family=Lato:ital@0;1&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<Stars />
			<section className="main">
				<h1>
					Your Way <br />
					to the Stars
				</h1>
				<div className="details">
					<p className="details__text">Scroll down to check for details</p>
					<BsChevronDoubleDown className="details__arrow-down" />
				</div>
			</section>

			<More />
		</>
	);
}
