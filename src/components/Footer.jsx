import React from 'react'
import  { Avatar, Box, Stack, VStack, Text } from "@chakra-ui/react"


function Footer() {
    return (
        <Box 
            bgColor={"blackAlpha.900"} 
            color={"whatsapp.700"}
            minH={"48"}
            px={"16"}
            py={["16", "8"]}
        >
            <Stack direction={["column", "row"]} h={"full"} alignItems={"center"} color={"white"}>
                <VStack w={"full"} alignItems={["center", "flex-start"]}>
                    <Text fontWeight={"bold"}>About Us</Text>
                    <Text 
                        fontSize={"sm"} 
                        letterSpacing={"widest"} 
                        textAlign={["center","left"]}
                    >
                        Velit non voluptate ea aliquip sit.
                        Cillum ea non cupidatat proident tempor non ea officia culpa esse exercitation et Lorem consequat.
                    </Text>
                </VStack>
                <VStack>
                    <Avatar boxSize={"28"} mt={["4", "0"]} />
                    <Text>Our Founder</Text>
                </VStack>
            </Stack>
        </Box>
    )
}

export default Footer
