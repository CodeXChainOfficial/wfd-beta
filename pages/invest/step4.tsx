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
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { useStore } from "../../contexts/store";
import { ParseParam } from "../../utils/Util";
import { ImageTransition } from "../../components/ImageTransition";
import PageLayout from "../../components/PageLayout";
import {
  successOption,
  WEFUND_ID,
  REQUEST_ENDPOINT,
} from "../../config/Constants";
import { useRouter } from "next/router";

export default function InvestStep4() {
  const router = useRouter();
  const project_id = ParseParam();

  let investAmount = "",
    investWfdAmount = "",
    investDate = "",
    pdfFile = "",
    docxFile = "";

  useEffect(() => {
    if (window != undefined) {
      investAmount = window.localStorage.getItem("invest_amount") ?? "";
      investWfdAmount = window.localStorage.getItem("invest_wfdamount") ?? "";
      investDate = window.localStorage.getItem("invest_date") ?? "";

      pdfFile = window.localStorage.getItem("pdf_file") ?? "";
      docxFile = window.localStorage.getItem("docx_file") ?? "";
    }
  }, []);
  //---------------notification setting---------------------------------
  function download_pdf() {
    toast("Downloading", successOption);

    const xhr = new XMLHttpRequest();
    const a = document.createElement("a");

    if (project_id == WEFUND_ID)
      xhr.open(
        "GET",
        REQUEST_ENDPOINT + "/download_pdf?filename=" + pdfFile,
        true
      );
    else
      xhr.open(
        "GET",
        REQUEST_ENDPOINT + "/download_docx?filename=" + docxFile,
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
      title="Back the Project"
      subTitle1="Invest"
      subTitle2="in WeFund"
    >
      <Box
        width={{ base: "100%", sm: "80%", md: "80%", lg: "80%", xl: "70%" }}
        px="50px"
        style={{ fontFamily: "Sk-Modernist-Regular" }}
      >
        <Flex
          mt="83px"
          justify="center"
          align="center"
          direction="column"
          style={{ fontFamily: "PilatExtended-Regular" }}
        >
          <HStack
            ml={{ base: "0px", md: "0px", lg: "10px" }}
            mt="150px"
            mb="50px"
            px="15px"
            align={"center"}
          >
            <Box
              width={{ base: "50px", md: "40px" }}
              style={{
                paddingTop: "3px",
                paddingLeft: "3px",
                height: "24px",
                border: "3px solid #3BE489",
                background: " #3BE489",
                borderRadius: "50%",
                display: "inline-block",
              }}
            >
              <CheckIcon color="#250E3F" w={3} h={3} marginBottom={"20px"} />
            </Box>
            <Text
              fontSize={{ base: "12px", sm: "16px", md: "22px", lg: "22px" }}
            >
              Step 1
            </Text>
            <Box
              width={{ base: "50px", md: "40px" }}
              style={{
                height: "0x",
                width: "30%",
                border: "2px solid #3BE489",
                background: " #3BE489",
              }}
            ></Box>
            <Box
              style={{
                paddingTop: "3px",
                paddingLeft: "3px",
                height: "24px",
                border: "3px solid #3BE489",
                background: " #3BE489",
                borderRadius: "50%",
                display: "inline-block",
              }}
            >
              <CheckIcon color="#250E3F" w={3} h={3} marginBottom={"20px"} />
            </Box>
            <Text
              fontSize={{ base: "12px", sm: "16px", md: "22px", lg: "22px" }}
            >
              Step 2
            </Text>
            <Box
              width={{ base: "50px", md: "40px" }}
              style={{
                height: "0x",
                width: "30%",
                border: "2px solid #3BE489",
                background: " #3BE489",
              }}
            ></Box>
            <Box
              style={{
                paddingTop: "3px",
                paddingLeft: "3px",
                height: "24px",
                border: "3px solid #3BE489",
                background: " #3BE489",
                borderRadius: "50%",
                display: "inline-block",
              }}
            >
              <CheckIcon color="#250E3F" w={3} h={3} marginBottom={"20px"} />
            </Box>
            <Text
              fontSize={{ base: "12px", sm: "16px", md: "22px", lg: "22px" }}
            >
              Final Step
            </Text>
          </HStack>
          <HStack mb={"20px"}>
            <Image src={"/popperleft.svg"} />
            <Text
              fontSize={{ base: "14px", sm: "16px", md: "22px", lg: "22px" }}
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
            with us. We will confirm your investment status via email.{" "}
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
          <Text fontSize="16px" fontWeight={"300"} mb={"20px"} ml={"100px"}>
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
                  UST <span style={{ color: "#00A3FF" }}>You Invested</span>
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
          maxWidth={{ base: "350px", md: "350px", lg: "0px" }}
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
                UST <span style={{ color: "#00A3FF" }}>You Invested</span>
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
          <ImageTransition
            unitid="submit"
            border1="linear-gradient(180deg, #00A3FF 0%, #0047FF 100%)"
            background1="linear-gradient(180deg, #00A3FF 0%, #0047FF 100%)"
            border2="linear-gradient(180deg, #00A3FF 0%, #0047FF 100%)"
            background2="linear-gradient(180deg, #1A133E 0%, #1A133E 100%)"
            border3="linear-gradient(180deg, #00A3FF 0%, #0047FF 100%)"
            background3="linear-gradient(180deg, #171347 0%, #171347 100%)"
            selected={false}
            width="200px"
            height="50px"
            rounded="33px"
            onClick={() => {
              router.push("/");
            }}
          >
            <Box color="white">Go Home</Box>
          </ImageTransition>
        </Flex>
      </Box>
    </PageLayout>
  );
}
