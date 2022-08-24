import { Box,Center,Heading,Text,Button, Flex,Image, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import styles from "../Styles/Home.module.css";
import {AiOutlineTwitter,AiFillLinkedin } from 'react-icons/ai'; //
import {FaAngellist } from 'react-icons/fa';
const Home = () => {
  return (
    <div>
       <Box marginTop="67px" className={styles.main1}>
         <Center>
            <Heading fontFamily="IBM Plex Serif, sans-serif"color="white" padding="140px 0px" paddingBottom="20px" fontSize='7xl' fontWeight="450" >AI built for medical coding</Heading>
         </Center>
         <Center>
         <Text color="white" paddingTop="40px"  paddingBottom="50px" fontSize='2xl'>What if you had a coder who could code millions of <br></br> charts per day at unparalleled accuracy and cost?</Text>
         </Center>
         <Center>
            <Button marginBottom="90px"  padding="25px 40px" color='#9A76D3' bg="white" borderRadius={30} ><Text fontSize='xs'>GET STARTED</Text></Button>
         </Center>
       </Box>

       <Box >
        <Center paddingTop="30px" paddingBottom="110px">
           <Text  fontSize='2xl'>Read NVIDIA's spotlight on Fathom: The Cure for the Common Code</Text>
           </Center>
       </Box>

       <Box className={styles.main2}>
          <Text>SERVICES</Text>
          <Text  fontSize="5xl">Coding services tailored to your workflow</Text>
          <Center>
          <SimpleGrid  columns={[1,2,3,3]} gap={40} marginTop="70px">
           
             <Box   >
               <Image margin="auto" src='https://assets.website-files.com/5e6c01bb5212506d6c119069/5e811cc79d75515e2ecd54be_automation.svg' />
               <Text fontFamily="IBM Plex Serif, sans-serif"  fontSize="2xl" padding={5}>Coding automation</Text>
               <Text fontFamily="IBM Plex Serif, sans-serif" color="gray" textAlign="center">Our AI takes a first pass, automating<br></br> what it can and flagging the remainder<br/> for your existing coding operations.</Text>
             </Box>
             <Box >
              <Image margin="auto" src='https://assets.website-files.com/5e6c01bb5212506d6c119069/5e811cc7d802d608218cac51_full-service.svg'/>
              <Text fontFamily="IBM Plex Serif, sans-serif" fontSize="2xl" padding={5}>Full-service coding</Text>
              <Text fontFamily="IBM Plex Serif, sans-serif" color="gray" textAlign="center">AI combined with our human<br/> infrastructure to maximize speed, and<br/> accuracy while reducing costs.</Text>
             </Box>
             <Box>
              <Image margin="auto" src='https://assets.website-files.com/5e6c01bb5212506d6c119069/5e811cc7dc544573caf55a0b_audit.svg'/>
              <Text fontFamily="IBM Plex Serif, sans-serif"  fontSize="2xl" padding={5}>Real-time audit</Text>
              <Text fontFamily="IBM Plex Serif, sans-serif" color="gray" textAlign="center">Use Fathom to review the work of your<br/> coding team, editing errors and flagging<br/> problematic coding for review.</Text>
             </Box>
          </SimpleGrid>
          </Center>
          <Center>
                <Button border="3px solid #9A76D0" padding="23px 35px" borderRadius="40px" marginTop="60px" marginBottom="30px"><Text color="#9A76D0"  fontSize='xs'>EXPLORE SERVICES</Text></Button>
             </Center>
       </Box>

       <Box border="2px solid transprent">
              <Center>
                <Heading paddingTop="100px" paddingBottom="30px" fontWeight="450" fontSize="5xl">Fathom powers coding operations across</Heading>
                </Center>
                <Center>
                  <SimpleGrid  columns={[1,2,3,3]} gap={40}>
                      <Box><Heading color="#6F8093" fontSize='8xl'>4K+</Heading>
                           <Text fontSize="17px" fontWeight="700">PROVIDER SITES</Text>
                      </Box>
                      <Box><Heading color="#6F8093" fontSize='8xl'>60M+</Heading>
                          <Text fontSize="17px" fontWeight="700">PATIENTS</Text>
                      </Box>
                      <Box><Heading color="#6F8093" fontSize='8xl'>25K+</Heading>
                          <Text fontSize="17px" fontWeight="700">PROVIDERS</Text>
                      </Box>
                  </SimpleGrid>
                </Center>  
       </Box>
       <Box>
        <Image marginTop="70px" marginBottom="30" height="50px" width="350px" src='https://assets.website-files.com/5e6c01bb5212506d6c119069/5e86784321e17d5b3e1ca947_dots-left.svg'/>
       </Box>

       <Box>
          <Center>
          <Text fontFamily="IBM Plex Serif, sans-serif"   marginTop="60px">BENEFITS</Text>
          </Center>
          <Center>
          <Text fontFamily="IBM Plex Serif, sans-serif"  fontSize="5xl">Cost, speed, and accuracy</Text>
          </Center>
          <Center>
          <Text fontFamily="IBM Plex Serif, sans-serif" fontSize="2xl" color="gray" fontWeight="200">No need to make trade-offs,choose all three</Text>
          </Center>
          
          <Center>
          <SimpleGrid  columns={[1,2,3,3]} gap={40} marginTop="70px">
           
             <Box   border="2px solid transprent">
               <Image margin="auto" src='https://assets.website-files.com/5e6c01bb5212506d6c119069/5e81210fd802d6d4d78cc141_cost.svg' />
               <Text  fontSize="2xl" padding={5}>Cost</Text>
               <Text fontFamily="IBM Plex Serif, sans-serif" color="gray" textAlign="center">Reduce the total cost of your coding<br/> operations by up to 50%.</Text>
             </Box>
             <Box border="2px solid transprent">
              <Image margin="auto" src='https://assets.website-files.com/5e6c01bb5212506d6c119069/5e81250b9d7551effbcd8483_accuracy.svg'/>
              <Text fontFamily="IBM Plex Serif, sans-serif" fontSize="2xl" padding={5}>Accuracy</Text>
              <Text fontFamily="IBM Plex Serif, sans-serif" color="gray" textAlign="center">Instantly reduce claim denials and<br/> mitigate audit risk.</Text>
             </Box>
             <Box border="2px solid transprent">
              <Image margin="auto" src='https://assets.website-files.com/5e6c01bb5212506d6c119069/5e811b57a7eca1abcc96f85e_speed.svg'/>
              <Text fontFamily="IBM Plex Serif, sans-serif"  fontSize="2xl" padding={5}>Speed</Text>
              <Text fontFamily="IBM Plex Serif, sans-serif" color="gray" textAlign="center">Cut your coding turnaround by days,<br/>not hours or minutes.</Text>
             </Box>
          </SimpleGrid>
          </Center>

          <Center>
          <SimpleGrid  columns={[1,2,3,3]} gap={40} marginTop="70px">
           
             <Box   border="2px solid transprent">
               <Image margin="auto" src='https://assets.website-files.com/5e6c01bb5212506d6c119069/5e81244ea7eca1517f971f83_scale.svg' />
               <Text fontFamily="IBM Plex Serif, sans-serif"  fontSize="2xl" padding={5}>Scale</Text>
               <Text fontFamily="IBM Plex Serif, sans-serif" color="gray" textAlign="center">Effortlessly add the capacity to code<br/>millions of charts per day.</Text>
             </Box>
             <Box border="2px solid transprent">
              <Image margin="auto" src='https://assets.website-files.com/5e6c01bb5212506d6c119069/5e81244e957e0aca8631fe64_reliability.svg'/>
              <Text fontFamily="IBM Plex Serif, sans-serif" fontSize="2xl" padding={5}>Reliability</Text>
              <Text fontFamily="IBM Plex Serif, sans-serif" color="gray" textAlign="center">Ensure that your coding operations<br/> never slow down or stop.</Text>
             </Box>
             <Box border="2px solid transprent">
              <Image margin="auto" src='https://assets.website-files.com/5e6c01bb5212506d6c119069/5e81235429502fec7abc4315_security.svg'/>
              <Text fontFamily="IBM Plex Serif, sans-serif"  fontSize="2xl" padding={5}>Security</Text>
              <Text fontFamily="IBM Plex Serif, sans-serif" color="gray" textAlign="center">Keep your PHI secure with industry<br/> leading technology and protocol.</Text>
             </Box>
          </SimpleGrid>
          </Center>

          <Center>
                <Button border="3px solid #9A76D0" padding="23px 35px" borderRadius="40px" marginTop="60px" marginBottom="100px"><Text color="#9A76D0"  fontSize='xs'>SCHUDULE A CALL</Text></Button>
             </Center>
       </Box>

       <Box>  
       <Center>
          <Text fontFamily="IBM Plex Serif, sans-serif"  fontSize="5xl">Industry news and insights</Text>
          </Center>
          <Center>
          <Text fontFamily="IBM Plex Serif, sans-serif" paddingBottom="50px" fontSize="2xl" color="gray" fontWeight="200">Stay up to date with the latest from the Fathom team</Text>
          </Center>

          <Center>
            <SimpleGrid  columns={[1,2,3,3]} gap={30}>
               <Box boxShadow='rgb(60 64 67 / 30%) 0px 1px 2px 0px, rgb(60 64 67 / 15%) 0px 2px 6px 2px'   textAlign="left">
                <Image objectFit="cover"  marginBottom="25px" width="400px" height="200px" src='https://assets.website-files.com/5e6c01bb5212506d6c119069/5eb9b1074520f059d6908e06_future.jpg'/>
                <Text fontFamily="IBM Plex Serif, sans-serif"  padding="0px 15px" fontSize='xs' >INDUSTRY NEWS</Text>
                <Text fontFamily="IBM Plex Serif, sans-serif" padding="0px 15px" fontSize='25px' fontWeight="500">Top 10 revenue cycle<br/> trends</Text>
                <Text fontFamily="IBM Plex Serif, sans-serif" padding="0px 15px" paddingBottom="18px" fontSize='21px' fontWeight="500" color="gray">Our CEO provides a look for what can<br/> expect to see happen in the RCM <br/>  landscape in the year ahead.</Text>
               </Box>
               <Box  boxShadow='rgb(60 64 67 / 30%) 0px 1px 2px 0px, rgb(60 64 67 / 15%) 0px 2px 6px 2px'   textAlign="left">
                <Image objectFit="cover" marginBottom="25px"  width="400px" height="200px" src='https://blog.fathomhealth.com/hubfs/andy-kelly-0E_vhMVqL9g-unsplash.jpg'/>
                <Text fontFamily="IBM Plex Serif, sans-serif"  padding="0px 15px"  fontSize='xs'>ARTIFICAL INTELLIGENCE</Text>
                <Text fontFamily="IBM Plex Serif, sans-serif" padding="0px 15px" fontSize='25px' fontWeight="500">Artificial intelligence vs.<br/> robotic process automation</Text>
                <Text fontFamily="IBM Plex Serif, sans-serif" padding="0px 15px" paddingBottom="18px" fontSize='21px' fontWeight="500" color="gray">A brief rundown of the differences<br/> between between these two<br/> technologies and their applications.</Text>
               </Box>
               <Box  boxShadow='rgb(60 64 67 / 30%) 0px 1px 2px 0px, rgb(60 64 67 / 15%) 0px 2px 6px 2px'  textAlign="left">
                <Image objectFit="cover" marginBottom="25px"  width="400px" height="200px" src='https://blog.fathomhealth.com/hubfs/derek-thomson-NqJYQ3m_rVA-unsplash.jpg'/>
                <Text fontFamily="IBM Plex Serif, sans-serif"  padding="0px 15px"  fontSize='xs'>ARTIFICAL INTELLIGENCE</Text>
                <Text fontFamily="IBM Plex Serif, sans-serif" padding="0px 15px" fontSize='25px'  fontWeight="500">6 ways that AI can minimize<br/> your revenue cycle</Text>
                <Text fontFamily="IBM Plex Serif, sans-serif"  padding="0px 15px" paddingBottom="18px" fontSize='21px' color="gray" fontWeight="500">With the advent of artificial intelligence<br/> technology and its application in solving<br/> some of the most complex challenges...</Text>
               </Box>
            </SimpleGrid>
          </Center>

         </Box>

         
          <Center padding="100px 0px">
           <Flex gap={250}>
           <Box>
                <Heading fontWeight="500">Ready to get started?</Heading>
            </Box>
         
            <Box>
            <Button marginRight="40px" border="3px solid #9A76D0" padding="23px 35px" borderRadius="40px" ><Text color="#9A76D0"  fontSize='xs'> SCHUDLE A CALL</Text></Button>
            <Button border="3px solid #9A76D0" padding="23px 35px" borderRadius="40px" ><Text colorScheme="#411386"  fontSize='xs'> REQUEST A QUOTE</Text></Button>
            </Box>
           </Flex>
           </Center>


          
           
            <Box className={styles.insidefooter}>
              <Flex textAlign="left"  paddingTop="100px" gap="60px">
            <Box className={styles.footer}>
              <Image width="170px"  src='https://assets.website-files.com/5e6c01bb5212506d6c119069/5e6edda6e64d7d84dcdae233_logo-white.png'/>
              <Text fontSize="18px" color="gray" padding="19px 0px" textAlign="left">Medical coding automation</Text>
              <Flex gap={3}>
              <AiOutlineTwitter size={25} color="white" />
              <AiFillLinkedin size={25} color="white"/>
              <FaAngellist size={25} color="white"/>
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

export default Home

