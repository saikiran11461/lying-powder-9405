import React from 'react'
import { Box, Center, Container, Flex, Heading, Spacer,Text,Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
         <Box width="100%"  bgColor="white" position="fixed" top="0"  boxShadow='md'  border="">
          <Box  bgColor="white" width="60%" margin="auto" >
          <Flex>
             <Box  bgColor="white" style={{padding:"11px 0px"}}>
            <Link to={"/"}> <Image  padding="11px 0px" src='https://assets.website-files.com/5e6c01bb5212506d6c119069/5ee401ee1f08215e6dbf0661_color-lettermark.svg'/></Link>
            
             </Box>
             <Box bgColor="white" style={{alignItems:"center", marginLeft:"40%", padding:"11px 0px"  }}>
                <Flex  color="black"  fontWeight={700}>
                <Text pt={2} ml="" fontSize='md'><Center><Link to={"/services"}>SERVICES</Link></Center></Text>
                <Text pt={2} ml={6}  fontSize='md'><Link to={"/security"}>SECURITY</Link></Text>
                <Text pt={2} ml={6} fontSize='md'><Link to={"/team"}>TEAM</Link></Text>
                <Text pt={2} ml={6} fontSize='md'>CARRIES</Text>
                <Text pt={2} ml={6} fontSize='md'>INSIGHTS</Text>
                <Text pt={2} ml={6} fontSize='md'>CONTACT</Text>
                </Flex>
             </Box>
          </Flex>
          </Box>
        </Box>

        <Box>
            
        </Box>
    </div>
  )
}

export default Navbar