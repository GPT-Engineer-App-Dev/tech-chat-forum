import { Box, Container, Flex, Heading, Link, Text, VStack, HStack, Spacer } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const categories = [
  { title: "General Discussion", description: "Talk about anything tech-related.", postCount: 120 },
  { title: "Programming", description: "Discuss coding, algorithms, and best practices.", postCount: 80 },
  { title: "Hardware", description: "Share insights on the latest hardware.", postCount: 45 },
  { title: "Software", description: "Discuss software tools and applications.", postCount: 60 },
];

const Index = () => {
  return (
    <Container maxW="container.xl">
      <Flex as="nav" bg="blue.500" color="white" p={4} align="center">
        <Heading size="md">Tech Forum</Heading>
        <Spacer />
        <HStack spacing={4}>
          <Link href="#">Home</Link>
          <Link href="#">Categories</Link>
          <Link href="#">About</Link>
          <Link href="#">Contact</Link>
          <Link href="/register">Register</Link>
          <Link href="/create-post">Create Post</Link>
        </HStack>
      </Flex>

      <Box as="main" py={8}>
        <Heading as="h1" size="xl" mb={6}>Forum Categories</Heading>
        <VStack spacing={8}>
          {categories.map((category, index) => (
            <Box key={index} p={5} shadow="md" borderWidth="1px" width="100%">
              <Heading fontSize="xl">{category.title}</Heading>
              <Text mt={4}>{category.description}</Text>
              <Text mt={2} color="gray.500">{category.postCount} posts</Text>
            </Box>
          ))}
        </VStack>
      </Box>

      <Flex as="footer" bg="blue.500" color="white" p={4} justify="space-between" align="center">
        <Text>&copy; 2023 Tech Forum. All rights reserved.</Text>
        <HStack spacing={4}>
          <Link href="#"><FaFacebook /></Link>
          <Link href="#"><FaTwitter /></Link>
          <Link href="#"><FaLinkedin /></Link>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Index;