import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  FormControl,
  FormLabel,
  Input,
  Button,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from '@chakra-ui/react';

const LoginPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    setIsOpen(true);
    setTimeout(() => {
      setIsOpen(false);
       navigate('/dashboard');
      // window.location.href = '/dashboard';
    }, 2000);
  };

  return (
    <Box
      bgGradient="linear(to bottom right, #3B82F6, #DB2777)"
      minH="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Container
        p={8}
        borderWidth={1}
        borderRadius="xl"
        boxShadow="2xl"
        borderColor="white" 
        textAlign="center"
        maxW="lg"
        bg="white"
      >
        <h1 style={{ color: '#3B82F6', fontSize: '2rem', marginBottom: '1rem' }}>Welcome Admin !!!</h1>
        <form>
          <FormControl>
            <FormLabel fontWeight="bold">Admin Email</FormLabel>
            <Input
              type="text"
              placeholder="Enter your username"
              value="admin@gmail.com"
              borderColor="#3B82F6" 
              disabled
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel fontWeight="bold">Password</FormLabel>
            <Input
              type="password"
              placeholder="Enter your password"
              value="admin" 
              borderColor="#3B82F6"
              disabled
            />
          </FormControl>
          <Button 
            colorScheme="pink" 
            mt={6} 
            w="100%" 
            onClick={handleLogin}
            _hover={{ bg: '#DB2777' }}
          >
            Login
          </Button>
          {/* AlertDialog */}
          <AlertDialog isOpen={isOpen} leastDestructiveRef={undefined}>
            <AlertDialogOverlay>
              <AlertDialogContent bg="#DB2777" color="white">
                <AlertDialogHeader>Welcome Admin !!!</AlertDialogHeader>
                <AlertDialogBody>
                  Redirecting to the dashboard page...
                </AlertDialogBody>
                <AlertDialogFooter>
                  <Button 
                    onClick={() => setIsOpen(false)}
                    colorScheme="pink"
                    _hover={{ bg: '#DB2777' }}
                  >
                    Cancel
                  </Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialogOverlay>
          </AlertDialog>
        </form>
      </Container>
    </Box>
  );
};

export default LoginPage;
