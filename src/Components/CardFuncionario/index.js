import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import IMG_USER from "../../Assets/Images/USER.png";

export default function CardFuncionario() {
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
						8238234798
					</p>
					<p>
						<b>Nome:&nbsp;</b>
						ghnjrgnrjgbrjgb
					</p>
					<p>
						<b>Email:&nbsp;</b>
						ubvdirbvdihvbridhbv@email.com
					</p>
					<p>
						<b>Área:&nbsp;</b>
						djnfbjdnbjdnnbj
					</p>
					<p>
						<b>Cargo:&nbsp;</b>
						djifbgjidfbgidhjbgifd
					</p>
				</div>
			</CardContent>
			<CardActions disableSpacing>
				<IconButton aria-label="edit">
					<EditIcon />
				</IconButton>
				<IconButton aria-label="delete">
					<DeleteIcon />
				</IconButton>
			</CardActions>
		</Card>
	);
}
