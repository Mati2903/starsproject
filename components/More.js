import Card from "./Card";

const More = () => {
	const date = new Date();
	const year = date.getFullYear();
	return (
		<section className="more">
			<Card title="First Tip" paragraph="Always do what You love" />
			<Card title="Second Tip" paragraph="Work for Your success" />
			<Card title="Third Tip" paragraph="Never stop learning new things" />
			<footer className="footer">Copyright &copy; {year} Mati2903</footer>
		</section>
	);
};

export default More;
