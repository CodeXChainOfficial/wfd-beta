import React, { useState, useRef } from "react";

import { Flex, Input, Button, Box } from "@chakra-ui/react";
import PageLayout from "../../components/PageLayout";
import {
  InputTransition,
  ButtonTransition,
} from "../../components/ImageTransition";

import { useRouter } from "next/router";
import Footer from "../../components/Footer";

export default function InvestStep0() {
  const [showInput, setShowInput] = useState(false);
  const passRef = useRef();
  const router = useRouter();

  const projectId = router.query["project_id"];

  function onPresale() {
    router.push({
      pathname: "/invest/step1",
      query: {
        project_id: 1,
      },
    });
  }
  function onSeed() {
    setShowInput(!showInput);
  }

  function onConfirm() {
    router.push("/invest/step1");
    // const CryptoJS = require('crypto-js');

    // if(CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(passRef.current.value)) === 'V2VGdW5kVkMyMDIy')
    // {
    //   dispatch({
    //     type: 'setPresale',
    //     message: false,
    //   })
    //   navigate('/invest_step1?project_id=' + state.wefundID);
    // }
    // else{
    //   toast("Sorry, wrong password", errorOption);
    // }
  }
  return (
    <PageLayout
      title="Contribute"
      subTitle1="Invest"
      subTitle2="Contribute"
      subTitle3="&nbsp;in WeFund"
    >
      <Flex
        width="100%"
        justify="center"
        py={"4em"}
        backgroundImage="url('/media/Home/2.png')"
      >
        <Box
          w={{ base: "300px", md: "600px", lg: "800px" }}
          bgGradient={
            "linear(180deg, #501992 0%, #300F71 18.84%, #09044B 75.22%)"
          }
          backdropBlur={"54px"}
          pt="30px"
          style={{ fontFamily: "Sk-Modernist" }}
          rounded={"3xl"}
        >
          <Flex
            direction="column"
            pt="100px"
            justify="center"
            align="center"
            pb="100px"
          >
            <ButtonTransition
              unitid="presale"
              selected={false}
              width="200px"
              height="50px"
              rounded="33px"
              onClick={onPresale}
            >
              Presale
            </ButtonTransition>

            <ButtonTransition
              unitid="Seed"
              selected={false}
              width="200px"
              height="50px"
              rounded="33px"
              onClick={onSeed}
              mt="50px"
            >
              Private Sale
            </ButtonTransition>
            <Flex
              display={showInput ? "flex" : "none"}
              mt="30px"
              direction="column"
              justify="center"
              align="center"
            >
              <InputTransition
                unitid="inputpassword"
                selected={false}
                width="300px"
                height="45px"
                rounded="md"
              >
                <Input
                  background={"transparent"}
                  border="0px"
                  h="45px"
                  type={"password"}
                  placeholder="Enter password"
                  boxShadow={""}
                  rounded="md"
                  ref={passRef.current}
                />
              </InputTransition>
              <Button
                w="120px"
                h="35px"
                mt="15px"
                onClick={onConfirm}
                background={"blue"}
              >
                Ok
              </Button>
            </Flex>
          </Flex>
        </Box>
      </Flex>
      <Footer />
    </PageLayout>
  );
}
