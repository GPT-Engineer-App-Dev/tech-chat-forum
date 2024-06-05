import { useState } from "react";
import { Box, Button, Container, FormControl, FormLabel, Input, Heading, Textarea, Select, VStack, Alert, AlertIcon } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const categories = ["General Discussion", "Programming", "Hardware", "Software"];

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Client-side validation
    if (!title || !content || !category) {
      setError("All fields are required.");
      return;
    }
    if (content.length < 10) {
      setError("Content must be at least 10 characters long.");
      return;
    }

    // Simulate API response
    setTimeout(() => {
      setSuccess("Post created successfully!");
      setTimeout(() => navigate("/"), 2000); // Redirect to home after 2 seconds
    }, 1000);
  };

  return (
    <Container maxW="md" mt={10}>
      <Box p={8} borderWidth={1} borderRadius={8} boxShadow="lg">
        <Heading as="h1" size="xl" mb={6} textAlign="center">Create New Post</Heading>
        {error && (
          <Alert status="error" mb={4}>
            <AlertIcon />
            {error}
          </Alert>
        )}
        {success && (
          <Alert status="success" mb={4}>
            <AlertIcon />
            {success}
          </Alert>
        )}
        <form onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <FormControl id="title" isRequired>
              <FormLabel>Title</FormLabel>
              <Input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </FormControl>
            <FormControl id="content" isRequired>
              <FormLabel>Content</FormLabel>
              <Textarea value={content} onChange={(e) => setContent(e.target.value)} />
            </FormControl>
            <FormControl id="category" isRequired>
              <FormLabel>Category</FormLabel>
              <Select placeholder="Select category" value={category} onChange={(e) => setCategory(e.target.value)}>
                {categories.map((cat, index) => (
                  <option key={index} value={cat}>{cat}</option>
                ))}
              </Select>
            </FormControl>
            <Button type="submit" colorScheme="blue" width="full">Create Post</Button>
          </VStack>
        </form>
      </Box>
    </Container>
  );
};

export default CreatePost;