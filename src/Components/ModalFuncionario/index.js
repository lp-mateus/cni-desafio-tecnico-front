import * as React from "react";

// Components
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import FormFuncionario from "../FormFuncionario";
import FormFuncionarioEdit from "../FormFuncionarioEdit";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 500,
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
};

export default function ModalFuncionario(props) {
	const { open, setOpen, funcionario, scope } = props;
	const handleClose = () => setOpen(false);

	return (
		<div>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					{scope === "UPDATE" ? (
						<FormFuncionarioEdit setOpen={setOpen} funcionario={funcionario} />
					) : (
						<FormFuncionario setOpen={setOpen} />
					)}
					<div className="m-0 p-0 w-100 d-flex justify-content-end">
						<Button onClick={handleClose}>Cancelar</Button>
					</div>
				</Box>
			</Modal>
		</div>
	);
}
