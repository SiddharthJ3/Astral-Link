import React, { useEffect } from "react";
import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import Login from "../Components/Authentication/Login";
import Signup from "../Components/Authentication/Signup";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) {
      navigate("/chats");
    }
  }, [navigate]);
  return (
    <Container>
      <Box
        centerContent
        pl="19%"
        bg={"transparent"}
        w="100"
        m="60px 0 15px 0"
        borderRadius="10px"
        borderWidth="0px"
      >
        <Text fontSize="5xl" fontFamily="Tourney" fontWeight="bold">
          <span
            style={{ color: "blue", filter: "drop-shadow(0px 0 5px blue)" }}
          >
            ASTRAL
          </span>{" "}
          <span
            style={{ color: "orange", filter: "drop-shadow(0px 0 5px orange)" }}
          >
            LINK
          </span>
        </Text>
      </Box>

      <Box
        bg="white"
        w="100%"
        p={4}
        borderRadius="lg"
        borderWidth="1px"
        mt={20}
      >
        <Tabs variant="soft-rounded">
          <TabList mb="1em">
            <Tab width="50%" _selected={{ color: "white", bg: "blue.500" }}>
              Login
            </Tab>
            <Tab width="50%" _selected={{ color: "white", bg: "orange.500" }}>
              Sign Up
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};
export default HomePage;
