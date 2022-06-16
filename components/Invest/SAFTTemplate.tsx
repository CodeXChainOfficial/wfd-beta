import React, { useState, useRef, useEffect, FunctionComponent } from "react";
import { Flex, VStack } from "@chakra-ui/react";
import { toast } from "react-toastify";

import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.min.js";

import { WEFUND_ID, REQUEST_ENDPOINT } from "../../config/Constants";
import { useProjectData } from "../../contexts/store";
import { GetOneProject } from "../../utils/Util";
import { errorOption } from "../../config/Constants";

interface Props {
  presale: boolean;
  project_id: number;
}
const PDFTemplate: FunctionComponent<Props> = ({ presale, project_id }) => {
  const isWeFund = WEFUND_ID == project_id;
  const [src, setSrc] = useState(
    "https://squid-app-ozvk2.ondigitalocean.app/PDFTemplate_presale.pdf"
  );
  const projectData = useProjectData();

  async function fetchData() {
    const oneprojectData = GetOneProject(projectData, project_id);
    if (oneprojectData == "") {
      toast("Can't fetch project data", errorOption);
      return "";
    }
    // console.log(oneprojectData.project_saft);
    if (!isWeFund)
      setSrc(
        REQUEST_ENDPOINT +
          "/download_docx?filename=" +
          oneprojectData.project_saft
      );
  }

  useEffect(() => {
    if (!isWeFund) fetchData();
    else {
      setSrc(
        presale == true
          ? "https://squid-app-ozvk2.ondigitalocean.app/PDFTemplate_presale.pdf"
          : "https://squid-app-ozvk2.ondigitalocean.app/PDFTemplate.pdf"
      );
    }
  }, []);

  function onDocumentLoadSuccess() {
    // document.getElementById('loading').innerHTML='';
  }
  const PDFViewer = ({ scale }: { scale: number }) => {
    return (
      <div>
        <div
          style={{ display: "flex", flexDirection: "column", width: "100%" }}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Document file={src} onLoadSuccess={onDocumentLoadSuccess}>
              <Page pageNumber={1} scale={scale} />
            </Document>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <Document file={src} onLoadSuccess={onDocumentLoadSuccess}>
              <Page pageNumber={2} scale={scale} />
            </Document>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <Document file={src} onLoadSuccess={onDocumentLoadSuccess}>
              <Page pageNumber={3} scale={scale} />
            </Document>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <Document file={src} onLoadSuccess={onDocumentLoadSuccess}>
              <Page pageNumber={4} scale={scale} />
            </Document>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <Document file={src} onLoadSuccess={onDocumentLoadSuccess}>
              <Page pageNumber={5} scale={scale} />
            </Document>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <Document file={src} onLoadSuccess={onDocumentLoadSuccess}>
              <Page pageNumber={6} scale={scale} />
            </Document>
          </div>
        </div>
      </div>
    );
  };
  return (
    <Flex direction="column">
      <VStack
        display={{ base: "none", md: "none", lg: "block" }}
        maxW={{ base: "0px", md: "0px", lg: "2560px" }}
        maxH={{ base: "0px", md: "0px", lg: "9999px" }}
        mb={"50px"}
      >
        {isWeFund && (
          <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
            <PDFViewer scale={1.3} />
          </div>
        )}
        {!isWeFund && (
          <Flex w="800px">
            <iframe
              width="100%"
              height="1200"
              frameBorder="0"
              src={`https://docs.google.com/gview?url=${src}&embedded=true`}
            />
          </Flex>
        )}
      </VStack>
      <VStack
        display={{ base: "block", md: "block", lg: "none" }}
        maxW="500px"
        mb={"50px"}
      >
        {isWeFund && (
          <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
            <PDFViewer scale={0.6} />
          </div>
        )}
        {!isWeFund && (
          <Flex w="400px">
            <iframe
              width="100%"
              height="1200"
              frameBorder="0"
              src={`https://docs.google.com/gview?url=${src}&embedded=true`}
            />
          </Flex>
        )}
      </VStack>
    </Flex>
  );
};

export default PDFTemplate;
