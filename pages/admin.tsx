import { Flex, Text, Grid, GridItem, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { SUCCESS_OPTION, WEFUND_CONTRACT } from "../config/constants";
import { useJunoConnection, useStore } from "../contexts/store";
import { useProjectData } from "../hook/ProjectData";

const admin = () => {
  const [list, setList] = useState<any[]>([]);
  const { state, dispatch } = useStore();
  const junoConnection = useJunoConnection();
  const client = junoConnection?.getClient();
  const address = junoConnection?.account;

  useEffect(() => {
    const fetchList = async () => {
      const result = await fetch("/api/whitelist/fetchAll");
      const res = await result.json();

      if (res?.data) setList(res.data);
    };
    fetchList();
  }, []);

  const registerToWhitelist = async (index: number) => {
    try {
      const result = await client.execute(
        address,
        WEFUND_CONTRACT,
        {
          register_whitelist: {
            project_id: list[index].project_id.toString(),
            // card_type: state.cardInfo?.card_type,
            card_type: "Other",
          },
        },
        "auto"
      );
      toast("Register on whitelist success", SUCCESS_OPTION);
      fetchData(state, dispatch, true);
      console.log(result);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Grid
      w="100%"
      templateColumns="repeat(5, 1fr)"
      // templateColumns="repeat(6, 1fr)"
      px={{ base: "0px", lg: "180px" }}
      my="100px"
      gap={{ base: "10px", lg: "50px" }}
    >
      <GridItem>
        <Text>project_id</Text>
      </GridItem>
      <GridItem>
        <Text>wallet</Text>
      </GridItem>
      <GridItem>
        <Text>email</Text>
      </GridItem>
      <GridItem>
        <Text>telegram</Text>
      </GridItem>
      <GridItem>
        <Text>fundraise</Text>
      </GridItem>
      {/* <GridItem></GridItem> */}
      {list.map((item, index) => (
        <>
          <GridItem>
            <Text>{item?.project_id}</Text>
          </GridItem>
          <GridItem>
            <Text>{item?.wallet}</Text>
          </GridItem>
          <GridItem>
            <Text>{item?.email}</Text>
          </GridItem>
          <GridItem>
            <Text>{item?.telegram}</Text>
          </GridItem>
          <GridItem>
            <Text>{item?.fundraise}</Text>
          </GridItem>
          {/* <GridItem>
            <Button onClick={() => registerToWhitelist(index)}>Register</Button>
          </GridItem> */}
        </>
      ))}
    </Grid>
  );
};

export default admin;
