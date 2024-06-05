import { useState } from "react";
import { Box, Button, Container, FormControl, FormLabel, Input, Heading, Text, VStack, Alert, AlertIcon } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Client-side validation
    if (!username || !email || !password) {
      setError("All fields are required.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Invalid email format.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    // Simulate API response
    setTimeout(() => {
      setSuccess("Registration successful!");
      setTimeout(() => navigate("/"), 2000); // Redirect to home after 2 seconds
    }, 1000);
  };

  return (
    <Container maxW="md" mt={10}>
      <Box p={8} borderWidth={1} borderRadius={8} boxShadow="lg">
        <Heading as="h1" size="xl" mb={6} textAlign="center">Register</Heading>
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
            <FormControl id="username" isRequired>
              <FormLabel>Username</FormLabel>
              <Input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Email</FormLabel>
              <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </FormControl>
            <Button type="submit" colorScheme="blue" width="full">Register</Button>
          </VStack>
        </form>
      </Box>
    </Container>
  );
};

export default Register;