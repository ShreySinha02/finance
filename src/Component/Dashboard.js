import React from "react";
import {
    Text,
  Flex,
  Heading,
  Icon,Link
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { GoGraph } from "react-icons/go";
import { AiFillHome,AiFillAndroid } from "react-icons/ai";
import {BiBarChartSquare} from "react-icons/bi"
import {FaWpforms} from "react-icons/fa"
import {MdWidgets} from "react-icons/md"
import {TbComponents} from "react-icons/tb"
import {RiPagesLine} from "react-icons/ri"
import './Dashboard.css';
function Dashboard() {
  return (
    <Flex flexDir="column" alignItems="center">
      <Flex flexDir="column" justifyContent="center">
        <Flex paddingLeft={5} flexDir="column" as="nav">
          <Heading mt={2} mb={100} color="#2587e8">
            <Flex>
              {" "}
              <GoGraph /> Finance{" "}
            </Flex>
          </Heading>

          <Flex flexDir="column" align="flex-start" justifyContent="center">
            <Flex className="side-items">
                <Link>
                <Icon as={AiFillHome} className='active-icon' fontSize='2xl'></Icon>
                </Link>
                <Link _hover={{textDecor:'none'}}>
                <Text className="active" fontSize='2xl'>Dashboard</Text>
                </Link>
                <Icon as={ChevronDownIcon} className='active-icon' fontSize='2xl'></Icon>
            </Flex>
            <Flex className="side-items" >
                <Link>
                <Icon as={RiPagesLine}  fontSize='2xl'></Icon>
                </Link>
                <Link _hover={{textDecor:'none'}}>
                <Text fontSize='2xl'>Pages</Text>
                </Link>
                <Icon as={ChevronDownIcon}  fontSize='2xl'></Icon>
            </Flex>
            <Flex className="side-items">
                <Link>
                <Icon as={AiFillAndroid}  fontSize='2xl'></Icon>
                </Link>
                <Link _hover={{textDecor:'none'}}>
                <Text fontSize='2xl'>Applications</Text>
                </Link>
                <Icon as={ChevronDownIcon}  fontSize='2xl'></Icon>
            </Flex>
            <Flex className="side-items">
                <Link>
                <Icon as={TbComponents}  fontSize='2xl'></Icon>
                </Link>
                <Link _hover={{textDecor:'none'}}>
                <Text fontSize='2xl'>Ui Components</Text>
                </Link>
                <Icon as={ChevronDownIcon}  fontSize='2xl'></Icon>
            </Flex>
            <Flex className="side-items">
                <Link>
                <Icon as={MdWidgets}  fontSize='2xl'></Icon>
                </Link>
                <Link _hover={{textDecor:'none'}}>
                <Text fontSize='2xl'>Widgets</Text>
                </Link>
                <Icon as={ChevronDownIcon}  fontSize='2xl'></Icon>
            </Flex>
            <Flex className="side-items">
                <Link>
                <Icon as={FaWpforms}  fontSize='2xl'></Icon>
                </Link>
                <Link _hover={{textDecor:'none'}}>
                <Text fontSize='2xl'>Forms</Text>
                </Link>
                <Icon as={ChevronDownIcon}  fontSize='2xl'></Icon>
            </Flex>
            <Flex className="side-items">
                <Link>
                <Icon as={BiBarChartSquare}  fontSize='2xl'></Icon>
                </Link>
                <Link _hover={{textDecor:'none'}}>
                <Text fontSize='2xl'>Charts</Text>
                </Link>
                <Icon as={ChevronDownIcon}  fontSize='2xl'></Icon>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Dashboard;
