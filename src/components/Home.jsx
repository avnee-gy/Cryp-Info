import { Box, Image, Text } from '@chakra-ui/react';
import React from 'react'
// import { Box, Image, Text } from '@chakra-ui/react';
import { motion } from "framer-motion";



const Home = () => {
  return (
    <Box bgColor={"blackAlpha.900"} w={"full"} h={"88vh"}>
      <motion.div
        style={{
          height: "80vh",
        }}
        animate={{
          translateY: "20px",
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Image
          w={"full"}
          h={"65vh"}
          objectFit={"contain"}
          src={"https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/1285492/regular_1708x683_Untitled-e7fde53f1e5631a8728cc9aefc1538e8.png"}
          filter={"grayscale(1)"}
        />
      </motion.div>

      <Text
        fontSize={"6xl"}
        textAlign={"center"}
        fontFamily={"Caprasimo"}
        fontWeight={"thin"}
        color={"whiteAlpha.700"}
        mt={"-20"}
      >
        Cryp-Info
      </Text>
    </Box>
  );
};

export default Home