import React, { useState, useRef, useEffect, FunctionComponent } from "react";
import { Flex, VStack } from "@chakra-ui/react";
import { toast } from "react-toastify";

import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

import { WEFUND_ID, REQUEST_ENDPOINT } from "../../config/constants";
import { useProjectData } from "../../hook/FetchProject";
import { GetOneProject } from "../../utils/utility";
import { ERROR_OPTION } from "../../config/constants";

interface Props {
  presale: boolean;
  project_id: number;
}
const PDFTemplate: FunctionComponent<Props> = ({ presale, project_id }) => {
  const isWeFund = WEFUND_ID == project_id;
  const [src, setSrc] = useState("/PDFTemplate_presale.pdf");
  const projectData = useProjectData();

  useEffect(() => {
    async function fetchData() {
      const oneprojectData = GetOneProject(projectData, project_id);
      if (oneprojectData == "") {
        toast("Can't fetch project data", ERROR_OPTION);
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
    if (!isWeFund) fetchData();
    else {
      setSrc(presale == true ? "/PDFTemplate_presale.pdf" : "/PDFTemplate.pdf");
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
              <Page
                pageNumber={1}
                scale={scale}
                renderAnnotationLayer={false}
                renderTextLayer={false}
              />
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
