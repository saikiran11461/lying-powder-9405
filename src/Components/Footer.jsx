import { Flex,Text,Box,Center,Image} from '@chakra-ui/react'
import React from 'react'
import styles from "../Styles/Home.module.css";
const Footer = () => {
  return (
    <div>
        
        <Box className={styles.insidefooter}>
              <Flex textAlign="left"  paddingTop="100px" gap="60px">
            <Box className={styles.footer}>
              <Image width="170px"  src='https://assets.website-files.com/5e6c01bb5212506d6c119069/5e6edda6e64d7d84dcdae233_logo-white.png'/>
              <Text fontSize="18px" color="gray" padding="19px 0px" textAlign="left">Medical coding automation</Text>
              <Flex gap={3}>
              {/* <AiOutlineTwitter size={25} color="white" />
              <AiFillLinkedin size={25} color="white"/> */}
              {/* <FaAngellist size={25} color="white"/> */}
              </Flex>
            </Box>
          
            <Box>
              <Text mb={4} color="gray">Technology</Text>
              <Text mb={4} color="white">Solutions</Text>
              <Text mb={4}  color="white">Scurity</Text>
            </Box>
            <Box>
              <Text mb={4} color="gray">Company</Text>
              <Text mb={4}  color="white">Team</Text>
              <Text mb={4}  color="white">Contact</Text>
              <Text mb={4}  color="white">Carries</Text>
            </Box>
            <Box>
              <Text mb={4} color="gray">Legal</Text>
              <Text mb={4}  color="white">Privacy&Ploycy</Text>
              <Text mb={4}  color="white">Cookies</Text>
            </Box>
            <Box>
              <Text mb={4} color="gray">Resouces</Text>
              <Text mb={4}  color="white">Articles</Text>
              <Text mb={4}  color="white">RFP guide for medical coding</Text>
              <Text mb={4}  color="white">MRsNshsxhzQDxhRKxeq7ueBM7EgXBaLxS5</Text>
            </Box>
          
            </Flex> 
            <Box>
              <Center color="gray" pt={20}>© Fathom, Inc. 2022</Center>
            </Box>
            </Box>
           
    </div>
  )
}

export default Footer