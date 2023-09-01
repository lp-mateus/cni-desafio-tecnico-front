import { useState, useContext } from "react";
import GlobalContext from "../../Contexts/GlobalContext";

const FormFuncionario = ({ setOpen }) => {
	// context - global
	const { createFuncionario } = useContext(GlobalContext);

	// state - form
	const [nome, setNome] = useState("");
	const [email, setEmail] = useState("");
	const [area, setArea] = useState("");
	const [cargo, setCargo] = useState("");

	// method - form submit
	const handleSubmit = (event) => {
		event.preventDefault();

		// payload
		const payload = {
			id: Date.now(),
			nome,
			email,
			area,
			cargo,
		};

		// action - create
		createFuncionario(payload);
		setOpen(false);
	};

	return (
		<form
			className="m-0 p-0 row g-3"
			id="form-funcionario"
			onSubmit={handleSubmit}
		>
			<h5>Formulário - Cadastrar Funcionário</h5>
			<hr></hr>
			<div className="col-md-12">
				<label htmlFor="nome" className="form-label">
					Nome
				</label>
				<input
					required
					type="text"
					className="form-control"
					id="nome"
					placeholder="Insira seu nome completo..."
					onChange={(event) => setNome(event.target.value)}
				></input>
			</div>

			<div className="col-md-12">
				<label htmlFor="email" className="form-label">
					E-mail
				</label>
				<input
					required
					type="email"
					className="form-control"
					id="email"
					placeholder="mateus.pedrosa@cni.com.br"
					onChange={(event) => setEmail(event.target.value)}
				></input>
			</div>

			<div className="col-md-12">
				<label htmlFor="area" className="form-label">
					Área
				</label>
				<input
					required
					type="text"
					className="form-control"
					id="area"
					placeholder="Departamento de Tecnologia da Informação"
					onChange={(event) => setArea(event.target.value)}
				></input>
			</div>

			<div className="col-md-12">
				<label htmlFor="inputAddress2" className="form-label">
					Cargo
				</label>
				<input
					required
					type="text"
					className="form-control"
					id="inputAddress2"
					placeholder="Analista - Desenvolvedor Frontend"
					onChange={(event) => setCargo(event.target.value)}
				></input>
			</div>

			<div className="col-md-12">
				<button
					type="submit"
					form="form-funcionario"
					className="btn btn-primary"
				>
					Salvar
				</button>
			</div>
		</form>
	);
};

export default FormFuncionario;
