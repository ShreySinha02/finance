import React from "react";
import { SimpleGrid, Box, Flex, Spacer, Stack, Text,Heading } from "@chakra-ui/react";
import MyChart from "./MyChart";
import PieChart from "./PieChart";
function Main() {
  return (
    <Flex gap={5} flexDir="column" align="center">
      <Stack paddingTop={2} spacing={7} direction="row">
        <Flex
          borderRadius="15"
          width="30em"
          height="10em"
          bg="#094099"
          align="center"
          justifyContent="left"
        >
          <Stack paddingLeft="5">
            <Text color="white" fontSize="md">
              Total Income
            </Text>
            <Heading color='white'as="h4" size="md">
              $ 579,000
            </Heading>
            <Text color='white' fontSize='xs'>Saved 25%</Text>
          </Stack>
        </Flex>

        <Flex borderRadius="15" width="30em" height="10em" bg="#11a2f0" align="center"
          justifyContent="left">
        <Stack paddingLeft="5">
            <Text color="white" fontSize="md">
              Total Expenses
            </Text>
            <Heading color='white'as="h4" size="md">
              $ 79,000
            </Heading>
            <Text color='white' fontSize='xs'>Saved 25%</Text>
          </Stack>
        </Flex>
      </Stack>
      <Stack paddingTop={1} spacing={7} direction="row">
        <Flex borderRadius="15" width="30em" height="10em" bg="#b80998" align="center"
          justifyContent="left">
        <Stack paddingLeft="5">
            <Text color="white" fontSize="md">
              Cash on Hand
            </Text>
            <Heading color='white'as="h4" size="md">
              $ 92,000
            </Heading>
            <Text color='white' fontSize='xs'>Saved 25%</Text>
          </Stack>
        </Flex>
        <Flex borderRadius="15" width="30em" height="10em" bg="#0ddb5c" align="center"
          justifyContent="left">
        <Stack paddingLeft="5">
            <Text color="white" fontSize="md">
              Net Profit Margin
            </Text>
            <Heading color='white'as="h4" size="md">
              $ 179,000
            </Heading>
            <Text color='white' fontSize='xs'>Saved 25%</Text>
          </Stack>
        </Flex>
      </Stack>
      <Stack spacing={7} direction="row">
        <Flex overflow='hidden' borderRadius="15" width="30em" height="15em" bg="#094099" align="center"
          justifyContent="left">
          <MyChart/>
        </Flex>

        <Flex overflow='hidden' borderRadius="15" width="30em" height="15em" bg="#11a2f0" align="center"
          justifyContent="left">
         <PieChart/>
        </Flex>
      </Stack>
    </Flex>
  );
}

export default Main;
