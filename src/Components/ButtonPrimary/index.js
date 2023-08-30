const ButtonPrimary = ({ title, action }) => {
	return (
		<button
			type="button"
			className="btn btn-primary w-75 border-0"
			style={{ backgroundColor: "#0047b6" }}
			onClick={action}
		>
			{title}
		</button>
	);
};

export default ButtonPrimary;
