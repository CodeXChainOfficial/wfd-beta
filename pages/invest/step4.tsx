import { CheckIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Image,
  HStack,
  Button,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

import PageLayout from "../../components/PageLayout";
import { SUCCESS_OPTION, REQUEST_ENDPOINT } from "../../config/constants";
import { useRouter } from "next/router";
import Footer from "../../components/Footer";

export default function InvestStep4() {
  const router = useRouter();

  const [investAmount, setInvestAmount] = useState("0");
  const [investDate, setInvestDate] = useState("");
  const [investWfdAmount, setInvestWfdAmount] = useState("0");

  let pdfFile = "";
  useEffect(() => {
    if (window != undefined) {
      setInvestAmount(window.localStorage.getItem("invest_amount") ?? "");
      setInvestWfdAmount(window.localStorage.getItem("invest_wfdamount") ?? "");
      setInvestDate(window.localStorage.getItem("invest_date") ?? "");

      pdfFile = window.localStorage.getItem("pdf_file") ?? "";
      // docxFile = window.localStorage.getItem("docx_file") ?? "";
    }
  }, []);
  //---------------notification setting---------------------------------
  function download_pdf() {
    toast("Downloading", SUCCESS_OPTION);

    const xhr = new XMLHttpRequest();
    const a = document.createElement("a");

    xhr.open(
      "GET",
      REQUEST_ENDPOINT + "/download_pdf?filename=" + pdfFile,
      true
    );

    xhr.responseType = "blob";
    xhr.onload = function () {
      const file = new Blob([xhr.response], {
        type: "application/octet-stream",
      });
      window.URL = window.URL || window.webkitURL;
      a.href = window.URL.createObjectURL(file);
      a.download = "confirm.pdf";
      a.click();
    };
    xhr.send();

    toast.dismiss();
  }

  useEffect(() => {
    download_pdf();
  }, []);

  return (
    <PageLayout
      title="Contribute"
      subTitle1=""
      subTitle2="Contribute"
      subTitle3="&nbsp;to WeFund"
    >
      <Flex
        justify="center"
        align="center"
        direction="column"
        style={{ fontFamily: "PilatExtended-Regular" }}
      >
        <HStack mt="50px" mb="50px" w="400px" justifyContent={"center"}>
          <Flex direction={"column"} w="80px" align={"center"} gap={2}>
            <Box
              width={{ base: "18px", md: "20px" }}
              height={{ base: "18px", md: "20px" }}
              style={{
                paddingTop: "1px",
                paddingLeft: "2px",
                border: "3px solid #3BE489",
                backgroundColor: "#3BE489",
                borderRadius: "50%",
                display: "inline-block",
              }}
            >
              <CheckIcon
                color="#250E3F"
                w={{ base: 2, md: 3 }}
                h={{ base: 2, md: 3 }}
                marginBottom={{ base: "30px", md: "20px" }}
              />
            </Box>
            <Text
              fontSize={{
                base: "12px",
                sm: "12px",
                md: "14px",
                lg: "14px",
              }}
            >
              Step 01
            </Text>
          </Flex>
          <Box
            style={{
              height: "0x",
              width: "15%",
              border: "2px solid rgba(255, 255, 255, 0.3799999952316284)",
              background: " rgba(255, 255, 255, 0.3799999952316284)",
            }}
          />
          <Flex direction={"column"} w="80px" align={"center"} gap={2}>
            <Box
              width={{ base: "18px", md: "20px" }}
              height={{ base: "18px", md: "20px" }}
              style={{
                paddingTop: "1px",
                paddingLeft: "2px",
                border: "3px solid #3BE489",
                backgroundColor: "#3BE489",
                borderRadius: "50%",
                display: "inline-block",
              }}
            >
              <CheckIcon
                color="#250E3F"
                w={{ base: 2, md: 3 }}
                h={{ base: 2, md: 3 }}
                marginBottom={{ base: "30px", md: "20px" }}
              />
            </Box>
            <Text
              fontSize={{
                base: "12px",
                sm: "12px",
                md: "14px",
                lg: "14px",
              }}
            >
              Step 02
            </Text>
          </Flex>
          <Box
            style={{
              height: "0px",
              width: "15%",
              border: "2px solid rgba(255, 255, 255, 0.3799999952316284)",
              background: " rgba(255, 255, 255, 0.3799999952316284)",
            }}
          ></Box>
          <Flex direction={"column"} w="80px" align={"center"} gap={2}>
            <Box
              width={{ base: "18px", md: "20px" }}
              height={{ base: "18px", md: "20px" }}
              style={{
                paddingTop: "1px",
                paddingLeft: "2px",
                border: "3px solid #3BE489",
                backgroundColor: "#3BE489",
                borderRadius: "50%",
                display: "inline-block",
              }}
            >
              <CheckIcon
                color="#250E3F"
                w={{ base: 2, md: 3 }}
                h={{ base: 2, md: 3 }}
                marginBottom={{ base: "30px", md: "20px" }}
              />
            </Box>
            <Text
              fontSize={{
                base: "12px",
                sm: "12px",
                md: "14px",
                lg: "14px",
              }}
            >
              Confirm
            </Text>
          </Flex>
        </HStack>
      </Flex>
      <Box
        w={{ base: "90%", md: "600px", lg: "800px" }}
        background="#540d56"
        backdropBlur={"54px"}
        pt="40px"
        style={{ fontFamily: "Sk-Modernist" }}
        rounded={"3xl"}
      >
        <Box
          width={"100%"}
          style={{ fontFamily: "Sk-Modernist-Regular" }}
          px={"2em"}
        >
          <Flex
            justify="center"
            align="center"
            direction="column"
            style={{ fontFamily: "PilatExtended-Regular" }}
          >
            <HStack mb={"20px"}>
              <Image src={"/popperleft.svg"} />
              <Text
                fontSize={{
                  base: "14px",
                  sm: "16px",
                  md: "22px",
                  lg: "22px",
                }}
                fontWeight={"300"}
              >
                Congratulations
              </Text>
              <Image src={"/popperright.svg"} />
            </HStack>
            <Text
              fontSize="16px"
              color="rgba(255, 255, 255, 0.54)"
              fontWeight={"normal"}
              maxWidth={"500px"}
              justifyContent={"center"}
              textAlign={"center"}
              maxW={"390px"}
            >
              You have invested in WeFund. For more update, please get in touch
              with us.{" "}
            </Text>
          </Flex>
          {/* --------Table confirmation dekstop---------- */}
          <Flex
            mt="60px"
            justify="center"
            align="center"
            direction="column"
            maxWidth={{ base: "0px", md: "0px", lg: "999px" }}
            maxHeight={{ base: "0px", md: "0px", lg: "999px" }}
            visibility={{ base: "hidden", md: "hidden", lg: "visible" }}
          >
            <Text fontSize="16px" fontWeight={"300"} mb={"20px"}>
              Transaction History
            </Text>
            <Table variant="simple">
              <TableCaption>
                Your download has been procced automatically. Do you want to
                download again? Click on <Text color={"#FE8600"}>Download</Text>
              </TableCaption>
              <Thead
                bgColor={"rgba(255, 255, 255, 0.12)"}
                borderRadius={"10px 10px 0px 0px"}
              >
                <Tr>
                  <Th>Date</Th>
                  <Th>
                    USD <span style={{ color: "#00A3FF" }}>You Invested</span>
                  </Th>
                  <Th>
                    WFD <span style={{ color: "#00A3FF" }}>You will get</span>
                  </Th>
                  <Th>
                    SAFT <span style={{ color: "#00A3FF" }}>Ready</span>
                  </Th>
                </Tr>
              </Thead>
              <Tbody
                bgColor={" rgba(196, 196, 196, 0.08)"}
                borderRadius={"10px 10px 0px 0px"}
              >
                <Tr>
                  <Td>{investDate}</Td>
                  <Td
                    borderLeft={"1px solid rgba(255, 255, 255, 0.1)"}
                    borderRight={"1px solid rgba(255, 255, 255, 0.1)"}
                  >
                    {investAmount}
                  </Td>
                  <Td
                    borderLeft={"1px solid rgba(255, 255, 255, 0.1)"}
                    borderRight={"1px solid rgba(255, 255, 255, 0.1)"}
                  >
                    {investWfdAmount}
                  </Td>
                  <Td cursor="pointer">
                    {/* <a href={state.request+"/download_pdf?filename=" + state.pdfFile} 
                    download="confirm.pdf"> */}
                    <a
                      onClick={() => {
                        download_pdf();
                      }}
                    >
                      <Text color={"#FE8600"}>Download</Text>
                    </a>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </Flex>
          {/* --------Table confirmation mobile---------- */}
          <Flex
            maxWidth={{ base: "100%", md: "100%", lg: "0px" }}
            maxHeight={{ base: "999px", md: "999px", lg: "0px" }}
            justify="center"
            align="center"
            direction="column"
            visibility={{ base: "visible", md: "visible", lg: "hidden" }}
          >
            <Text fontSize="16px" fontWeight={"300"} mb={"20px"}>
              Transaction History
            </Text>
            <Table variant="simple">
              <TableCaption>
                Your download has been procced automatically. Do you want to
                download again? Click on{" "}
                <span style={{ color: "#FE8600" }}>Download</span>
              </TableCaption>
              <Tr>
                <Th
                  bgColor={"rgba(255, 255, 255, 0.12)"}
                  borderRadius={"10px 0px 0px 0px"}
                >
                  Date
                </Th>
                <Td
                  bgColor={" rgba(196, 196, 196, 0.08)"}
                  borderRadius={"0px 10px 0px 0px"}
                  borderLeft={"1px solid rgba(255, 255, 255, 0.1)"}
                >
                  {investDate}
                </Td>
              </Tr>
              <Tr>
                <Th bgColor={"rgba(255, 255, 255, 0.12)"}>
                  USD <span style={{ color: "#00A3FF" }}>You Invested</span>
                </Th>
                <Td
                  bgColor={" rgba(196, 196, 196, 0.08)"}
                  borderLeft={"1px solid rgba(255, 255, 255, 0.1)"}
                >
                  {investAmount}
                </Td>
              </Tr>
              <Tr>
                <Th bgColor={"rgba(255, 255, 255, 0.12)"}>
                  WFD <span style={{ color: "#00A3FF" }}>You will get</span>
                </Th>
                <Td
                  bgColor={" rgba(196, 196, 196, 0.08)"}
                  borderLeft={"1px solid rgba(255, 255, 255, 0.1)"}
                >
                  {investWfdAmount}
                </Td>
              </Tr>
              <Tr borderColor={"transparent !important"}>
                <Th
                  bgColor={"rgba(255, 255, 255, 0.12)"}
                  borderRadius={"0px 0px 0px 10px"}
                >
                  SAFT <span style={{ color: "#00A3FF" }}>Ready</span>
                </Th>
                <Td
                  bgColor={" rgba(196, 196, 196, 0.08)"}
                  borderRadius={"0px 0px 10px 0px"}
                  borderLeft={"1px solid rgba(255, 255, 255, 0.1)"}
                >
                  <a
                    onClick={() => {
                      download_pdf();
                    }}
                  >
                    <Text color={"#FE8600"}>Download</Text>
                  </a>
                </Td>
              </Tr>
            </Table>
          </Flex>

          <Flex w="100%" mt="60px" justify="center" mb="170px">
            <Button
              colorScheme="pink"
              w="200px"
              onClick={() => router.push("/")}
            >
              Back Home
            </Button>
          </Flex>
        </Box>
      </Box>
    </PageLayout>
  );
}
