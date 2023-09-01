import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
	page: {
		flexDirection: "row",
		backgroundColor: "#f8f9fa",
	},
	section: {
		margin: 10,
		padding: 10,
		flexGrow: 1,
	},
});

const ReportDocument = () => {
	const data = JSON.parse(localStorage.getItem("data"));
	console.log(data[0]);
	return (
		<Document>
			<Page size="A4" style={styles.page}>
				<View style={styles.section}>
					<Text>Relatório - Sistema de Controle e Acesso aos Funcionários</Text>
					<Text>&nbsp;</Text>
					{data?.map((item, index) => (
						<div key={index}>
							<Text>Funcionário</Text>
							<Text>ID: {item.id}</Text>
							<Text>Nome: {item.nome}</Text>
							<Text>E-mail: {item.email}</Text>
							<Text>Área: {item.area}</Text>
							<Text>Cargo: {item.cargo}</Text>
							<Text>&nbsp;</Text>
						</div>
					))}
				</View>
			</Page>
		</Document>
	);
};

export default ReportDocument;
