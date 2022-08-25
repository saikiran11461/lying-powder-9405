import React from 'react'
import { Box, Center, Container, Flex, Heading, Spacer,Text,Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
const Navbar = () => {

  return (
    <>
         <Box  width="100%"  bgColor="white" left="0" position="fixed" top="0"  boxShadow='md'  border="">
          <Box  width="60%" bgColor="white"  margin="auto" >
          <Flex>
             <Box  bgColor="white" style={{padding:"11px 0px"}}>
            <Link to={"/"}> <Image width="130px" padding="11px 0px" src='https://assets.website-files.com/5e6c01bb5212506d6c119069/5ee401ee1f08215e6dbf0661_color-lettermark.svg'/></Link>
            
             </Box>
             <Box bgColor="white" style={{alignItems:"center", marginLeft:"40%", padding:"11px 0px"  }}>
                <Flex  color="black"  fontWeight={700}>
                <Text fontWeight='700' pt={2} ml="" fontSize='sm'><Center><Link to={"/services"}>SERVICES</Link></Center></Text>
                <Text pt={2} ml={6}  fontSize='sm'><Link to={"/security"}>SECURITY</Link></Text>
                <Text pt={2} ml={6} fontSize='sm'><Link to={"/team"}>TEAM</Link></Text>
                <Text pt={2} ml={6} fontSize='sm'>CARRIES</Text>
                <Text pt={2} ml={6} fontSize='sm'>INSIGHTS</Text>
                <Text pt={2} ml={6} fontSize='sm'>CONTACT</Text>
                </Flex>
             </Box>
          </Flex>
          </Box>
        </Box>

        <Box>
            
        </Box>
    </>
  )
}

export default Navbar