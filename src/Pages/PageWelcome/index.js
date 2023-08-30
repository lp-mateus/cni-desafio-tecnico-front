import { Link } from "react-router-dom";
// Css
import "./style.css";
import CNI_LOGO_BRANCA from "../../Assets/Images/CNI_LOGO_BRANCA.png";

// Components
import ButtonPrimary from "../../Components/ButtonPrimary";

const PageWelcome = () => {
	return (
		<main className="container-fluid m-0 p-0">
			<section className="row m-0 p-0 justify-content-center">
				<section className="col-md-8 vh-100 ps-md-5 text-start padding-top-20 bg-blue">
					<img src={CNI_LOGO_BRANCA} alt="LOGO CNI BRANCA"></img>
					<h1 className="pt-3 text-white">
						<i>Confederação Nacional da Indústria</i>
					</h1>
					<p className="text-white">
						Author: © 2023 Mateus Leite Pedrosa - Brasíla/DF
					</p>
				</section>

				<section className="col-md-4 ps-md-3 text-center padding-top-20">
					<div className="mt-md-5 pt-md-5">
						<Link to="/dashboard">
							<ButtonPrimary title="Acessar" />
						</Link>
					</div>
				</section>
			</section>
		</main>
	);
};

export default PageWelcome;
