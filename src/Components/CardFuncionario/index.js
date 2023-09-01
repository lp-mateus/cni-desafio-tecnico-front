import * as React from "react";
import GlobalContext from "../../Contexts/GlobalContext";
import IMG_USER from "../../Assets/Images/USER.png";

// Components
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ModalFuncionario from "../ModalFuncionario";

export default function CardFuncionario(props) {
	const { deleteFuncionario } = React.useContext(GlobalContext);
	const { id, nome, email, area, cargo } = props;

	// modal - states
	const [open, setOpen] = React.useState(false);

	// method - edit user
	const handleUpdate = () => setOpen(true);

	// method - delete user
	const handleDelete = () => {
		const payload = { id };
		deleteFuncionario(payload);
	};

	return (
		<Card sx={{ maxWidth: 325 }} className="m-3">
			<CardMedia
				component="img"
				height=""
				image={IMG_USER}
				alt="Funcionario"
				style={{ objectFit: "cover" }}
			/>
			<CardContent>
				<div>
					<p>
						<b>ID:&nbsp;</b>
						{id}
					</p>
					<p>
						<b>Nome:&nbsp;</b>
						{nome}
					</p>
					<p>
						<b>Email:&nbsp;</b>
						{email}
					</p>
					<p>
						<b>Área:&nbsp;</b>
						{area}
					</p>
					<p>
						<b>Cargo:&nbsp;</b>
						{cargo}
					</p>
				</div>
			</CardContent>
			<CardActions disableSpacing>
				<IconButton aria-label="edit" onClick={handleUpdate}>
					<EditIcon />
				</IconButton>
				<IconButton aria-label="delete" onClick={handleDelete}>
					<DeleteIcon />
				</IconButton>
			</CardActions>
			{open && (
				<ModalFuncionario
					open={open}
					setOpen={setOpen}
					funcionario={props}
					scope="UPDATE"
				/>
			)}
		</Card>
	);
}
