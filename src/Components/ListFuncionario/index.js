import { useContext } from "react";
import GlobalContext from "../../Contexts/GlobalContext";

// Components
import CardFuncionario from "../CardFuncionario";

const ListFuncionario = () => {
	const { readFuncionario } = useContext(GlobalContext);
	console.log(readFuncionario);

	return (
		<>
			{readFuncionario?.map((funcionario, index) => (
				<CardFuncionario
					key={funcionario?.id}
					id={funcionario?.id}
					nome={funcionario?.nome}
					email={funcionario?.email}
					area={funcionario?.area}
					cargo={funcionario?.cargo}
				/>
			))}
		</>
	);
};

export default ListFuncionario;
