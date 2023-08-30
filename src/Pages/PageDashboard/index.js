import { useState } from "react";
// Components
import Menu from "../../Components/Menu";
import CardFuncionario from "../../Components/CardFuncionario";
import ButtonPrimary from "../../Components/ButtonPrimary";
import ModalFuncionario from "../../Components/ModalFuncionario";

// Css
import "./style.css";

const PageDashboard = () => {
	const [open, setOpen] = useState(false);

	const handleOpen = () => setOpen(true);

	return (
		<main>
			<Menu />
			<section className="container-fluid w-100 m-0 p-0">
				<div className="m-0 p-0 row">
					<h1 className="text-center text-blue">
						Sistema de Acesso e Controle dos Funcionários
					</h1>
					<div className="mt-5 row justify-content-center">
						<CardFuncionario />
						<CardFuncionario />
						<CardFuncionario />

						<CardFuncionario />
						<CardFuncionario />
						<CardFuncionario />

						<CardFuncionario />
						<CardFuncionario />
						<CardFuncionario />
					</div>

					<div className="mx-5 my-3 p-0 w-50">
						<ButtonPrimary
							title="Cadastrar - Novo Funcionário"
							action={handleOpen}
						/>
					</div>

					{open && <ModalFuncionario open={open} setOpen={setOpen} />}

					<div className="mx-5 my-1 p-0 pb-5 w-50">
						<ButtonPrimary
							title="Gerar - Novo Relatório"
							action={handleOpen}
						/>
					</div>
				</div>
			</section>
		</main>
	);
};

export default PageDashboard;
