import { useState, useContext } from "react";
import GlobalContext from "../../Contexts/GlobalContext";

const FormFuncionarioEdit = ({ setOpen, funcionario }) => {
	// context - global
	const { updadeFuncionario } = useContext(GlobalContext);

	// state - form
	const [nome, setNome] = useState(funcionario?.nome);
	const [email, setEmail] = useState(funcionario?.email);
	const [area, setArea] = useState(funcionario?.area);
	const [cargo, setCargo] = useState(funcionario?.cargo);

	// method - form submit
	const handleSubmit = (event) => {
		event.preventDefault();

		// payload
		const payload = {
			id: funcionario?.id,
			nome,
			email,
			area,
			cargo,
		};

		// action - update
		updadeFuncionario(payload);
		setOpen(false);
	};

	return (
		<form
			className="m-0 p-0 row g-3"
			id="form-funcionario-edit"
			onSubmit={handleSubmit}
		>
			<h5>Formulário - Atualizar Funcionário</h5>
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
					value={nome}
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
					value={email}
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
					value={area}
					onChange={(event) => setArea(event.target.value)}
				></input>
			</div>

			<div className="col-md-12">
				<label htmlFor="cargo" className="form-label">
					Cargo
				</label>
				<input
					required
					type="text"
					className="form-control"
					id="cargo"
					value={cargo}
					onChange={(event) => setCargo(event.target.value)}
				></input>
			</div>

			<div className="col-md-12">
				<button
					type="submit"
					form="form-funcionario-edit"
					className="btn btn-primary"
				>
					Salvar
				</button>
			</div>
		</form>
	);
};

export default FormFuncionarioEdit;
