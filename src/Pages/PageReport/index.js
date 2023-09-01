import React from "react";
import { PDFViewer } from "@react-pdf/renderer";

// Components
import Menu from "../../Components/Menu";
import ReportDocument from "../../Components/ReportDocument";

const PageReport = () => {
	return (
		<main className="m-0 p-0 w-100 d-flex row justify-content-center">
			<Menu />
			<div className="m-0 p-0 w-100 col-12 vh-100">
				<PDFViewer>
					<ReportDocument />
				</PDFViewer>
			</div>
		</main>
	);
};

export default PageReport;
