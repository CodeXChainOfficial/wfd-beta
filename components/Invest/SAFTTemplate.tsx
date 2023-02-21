import React from "react";
import { Flex, VStack } from "@chakra-ui/react";

import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PDFTemplate = () => {
  // setSrc(presale == true ? "/PDFTemplate_presale.pdf" : "/PDFTemplate.pdf");

  const src = "/PDFTemplate_presale.pdf";
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
        <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
          <PDFViewer scale={1.3} />
        </div>
      </VStack>
      <VStack
        display={{ base: "block", md: "block", lg: "none" }}
        maxW="500px"
        mb={"50px"}
      >
        <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
          <PDFViewer scale={0.6} />
        </div>
      </VStack>
    </Flex>
  );
};

export default PDFTemplate;
