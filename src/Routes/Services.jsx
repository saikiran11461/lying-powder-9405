import { Box, Center, Heading,Text,Button, SimpleGrid,Image } from '@chakra-ui/react'
import React from 'react'
import styles from "../Styles/Home.module.css";
const Services = () => {
  return (
    <div>
          <Box marginTop="67px" className={styles.main1} >
         <Center>
            <Heading fontFamily="IBM Plex Serif, sans-serif"color="white" padding="140px 0px" paddingBottom="20px" fontSize='7xl' fontWeight="450" >Medical coding automation<br/> services built for you</Heading>
         </Center>
         <Center>
         <Text color="white" paddingTop="40px"  paddingBottom="50px" fontSize='2xl'>Fathom's AI seamlessly integrates into your workflow</Text>
         </Center>
         <Center>
            <Button marginBottom="90px"  padding="25px 40px" color='#9A76D3' bg="white" borderRadius={30} ><Text fontSize='xs'>GET STARTED</Text></Button>
         </Center>
       </Box>

       <Box >
        <Center paddingTop="30px" paddingBottom="110px">
           <Text  fontSize='2xl'>Read NVIDIA's spotlight on Fathom: <span color='#9A76D3'>The Cure for the Common Code</span> </Text>
           </Center>
       </Box>

       <Box  width="80%" margin="auto" padding="100px 0px">     
        <SimpleGrid gap="100px" columns={[1,1,2,2]} spacing={10}>
        <Box>
          <Image  src='https://assets.website-files.com/5e6c01bb5212506d6c119069/5e8a616cf99d7caf1875c8a0_automation.svg'/>
        </Box>
        <Box textAlign="left" >
          <Text color="gray">AI-DRIVEN EFFICIENCY</Text>
          <Text fontSize='4xl'>Coding automation</Text>
          <Text padding="10px 0px" color="gray">Let us take a first pass</Text>
          <Text>Use our AI to ease the burden on your coding team.<br/> In one quick step, we can review your incoming<br/> charts, process the charts that can be coded by our<br/> system and then pass the remainder to your current<br/> coding operation, allowing them to focus on the most<br/> critical charts while drastically reducing your overall<br/> coding costs.</Text>
          <Button margin="30px 0px" borderRadius="30px" padding="25px 26px" color="#9A76D3" border="3px solid #9A76D3" colorScheme="#814fd3">REQUEST A CALL</Button>
        </Box>
       </SimpleGrid>
       </Box>

       <Box  width="75%" margin="auto" padding="100px 0px">     
        <SimpleGrid gap="50px" columns={[1,1,2,2]} spacing={5}>
        <Box textAlign="left" >
          <Text color="gray">100% COVERAGE</Text>
          <Text fontSize='4xl'>Full-service coding</Text>
          <Text padding="10px 0px" color="gray">Automation augmented by<br/> world-class medical coders.</Text>
          <Text>A turn-key solution that combines our AI system with<br/> world class medical coders to handle all your coding<br/> needs, resulting in up to a 70% reduction in coding<br/> costs while increasing speed, accurracy, and security.</Text>
          <Button margin="30px 0px" borderRadius="30px" padding="25px 26px" color="#9A76D3" border="3px solid #9A76D3" colorScheme="#814fd3">REQUEST A CALL</Button>
        </Box>
        <Box>
          <Image  src='https://assets.website-files.com/5e6c01bb5212506d6c119069/5e8a617bacdbb51df33f6af8_full-service.svg'/>
        </Box>
       </SimpleGrid>
       </Box>


       
       <Box>
          <Center>
          <Text fontFamily="IBM Plex Serif, sans-serif"   marginTop="60px">BENEFITS</Text>
          </Center>
          <Center>
          <Text fontFamily="IBM Plex Serif, sans-serif"  fontSize="5xl">Faster, cheaper, and more accurate</Text>
          </Center>
          <Center>
          <Text fontFamily="IBM Plex Serif, sans-serif" fontSize="2xl" color="gray" fontWeight="200">Supercharge your medical coding operations</Text>
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
    </div>
  )
}

export default Services