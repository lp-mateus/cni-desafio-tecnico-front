import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import GlobalContext from "../../Contexts/GlobalContext";

// Components
import Menu from "../../Components/Menu";
import ListFuncionario from "../../Components/ListFuncionario";
import ButtonPrimary from "../../Components/ButtonPrimary";
import ModalFuncionario from "../../Components/ModalFuncionario";

// Css
import "./style.css";

const PageDashboard = () => {
	const { readFuncionario } = useContext(GlobalContext);

	// states - modal
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleReport = () => {
		localStorage.setItem("data", JSON.stringify(readFuncionario));
	};

	return (
		<main>
			<Menu />
			<section className="container-fluid w-100 m-0 p-0">
				<div className="m-0 p-0 row">
					<h1 className="text-center text-blue">
						Sistema de Controle e Acesso aos Funcionários
					</h1>
					<div className="mx-0 my-5 p-0 w-100 row justify-content-center">
						<ListFuncionario />
					</div>

					<div className="mx-0 my-3 p-0 w-100 d-flex row justify-content-center">
						<ButtonPrimary
							title="Cadastrar - Novo Funcionário"
							action={handleOpen}
						/>
					</div>

					<Link
						to="/report"
						className="m-0 mb-5 p-0 w-100 d-flex row justify-content-center"
						style={{ textDecoration: "none" }}
					>
						<ButtonPrimary
							title="Gerar - Novo Relatório"
							action={handleReport}
						/>
					</Link>

					{open && <ModalFuncionario open={open} setOpen={setOpen} />}
				</div>
			</section>
		</main>
	);
};

export default PageDashboard;
