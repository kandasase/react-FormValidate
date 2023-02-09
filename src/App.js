import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Grid,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  Text,
  VStack
} from "@chakra-ui/react";
import { Controller, useForm } from "react-hook-form";
import React, { useState } from "react";
import { Card } from "./components/card";
import './App.css'
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'

const App = () => {
  const [showPassword, setShowPassword] = React.useState(false)
  const handleClick = () => setShowPassword(!showPassword)
  const [showPasswordConfirm, setShowPasswordConfirm] = React.useState(false)
  const handleClickSecond = () => setShowPasswordConfirm(!showPasswordConfirm)
  const [content, setContent] = useState({
    name: '',
    email: '',
    tel: '',
    password: '',
    confirm: '',
    gender: ''
  });
  const {
    handleSubmit,
    control,
    formState: { errors },
    watch
  } = useForm();

  function onSubmit(data) { setContent(data) }

  return (
    <Flex direction='column'>
      <Center w='full' bg='#FBFBFA' fontSize='20px' fontWeight='bold' p='20px'>
        <Text color='#6495ED' pr='5px'>Form</Text>
        <Text>Fetch Api</Text>
      </Center>
      <Center pt='20px' w='full' h='full' bg="#F0F1F6">
        <Card>
          <form onSubmit={handleSubmit(onSubmit)}>
            <VStack py='3em' px='3em'>
              <Flex direction='column' justifyContent='space-between'>
                <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }} gap={{ base: 1, md: 3 }} w='full' alignItems="center" mb='20px'>
                  <Flex w="100%" justifyContent={{ base: 'flex-start', md: 'end' }}>
                    <FormLabel w='max-content' >
                      <span style={{ color: 'red' }}>{`* `}</span>
                      Name :
                    </FormLabel>
                  </Flex>
                  <Box w="100%">
                    <Controller
                      name='name'
                      control={control}
                      defaultValue=''
                      rules={{
                        required: {
                          value: true,
                          message: "Please input your name!"
                        }
                      }
                      }
                      render={({ field: { name, onChange, onBlur, value, ref } }) => (
                        <FormControl isInvalid={errors[name]} w='full'>
                          <HStack w='full'>

                            <Input
                              w='100%'
                              onChange={onChange}
                              onBlur={onBlur}
                              value={value}
                            />
                          </HStack>
                          <FormErrorMessage>
                            {errors[name] && errors[name]?.message}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    />
                  </Box>
                  <Flex w="100%" justifyContent={{ base: 'flex-start', md: 'end' }}>
                    <FormLabel w='max-content'>
                      <Text>
                        <span style={{ color: 'red' }}>{`* `}</span>
                        E-Mail :
                      </Text>
                    </FormLabel>
                  </Flex>
                  <Box w="100%">
                    <Controller
                      name='email'
                      control={control}
                      defaultValue=''
                      rules={{
                        required: {
                          value: true,
                          message: "Please input your E-Mail!"
                        }
                      }
                      }
                      render={({ field: { name, onChange, onBlur, value, ref } }) => (
                        <FormControl isInvalid={errors[name]}>
                          <Input
                            onChange={onChange}
                            onBlur={onBlur}
                            value={value}
                            type="email"
                          />
                          <FormErrorMessage>
                            {errors[name] && errors[name]?.message}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    />
                  </Box>
                  <Flex w="100%" justifyContent={{ base: 'flex-start', md: 'end' }}>
                    <FormLabel w='max-content'>
                      <span style={{ color: 'red' }}>{`* `}</span>
                      Tel :
                    </FormLabel>
                  </Flex>
                  <Box w="100%">
                    <Controller
                      name='tel'
                      control={control}
                      defaultValue=''
                      rules={{
                        required: {
                          value: true,
                          message: "Please input your tel!"
                        }
                      }
                      }
                      render={({ field: { name, onChange, onBlur, value, ref } }) => (
                        <FormControl isInvalid={errors[name]}>
                          <Input

                            onChange={onChange}
                            onBlur={onBlur}
                            value={value}
                            type="number"
                          />
                          <FormErrorMessage>
                            {errors[name] && errors[name]?.message}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    />
                  </Box>
                  <Flex w="100%" justifyContent={{ base: 'flex-start', md: 'end' }}>
                    <FormLabel w='max-content'>
                      <span style={{ color: 'red' }}>{`* `}</span>
                      Password :
                    </FormLabel>
                  </Flex>
                  <Box w="100%">
                    <Controller
                      name='password'
                      control={control}
                      defaultValue=''
                      rules={{
                        required: {
                          value: true,
                          message: "Please input your password!"
                        }
                      }
                      }
                      render={({ field: { name, onChange, onBlur, value, ref } }) => (
                        <FormControl isInvalid={errors[name]}>
                          <InputGroup>
                            <Input
                              pr='4.5rem'
                              type={showPassword ? 'text' : 'password'}
                              onChange={onChange}
                              // onChange={getPassword}
                              onBlur={onBlur}
                              value={value}
                            />
                            <InputRightElement width='4.5rem'>
                              <Flex
                                color='gray.600'
                                onClick={handleClick}
                                _hover={{
                                  cursor: 'pointer'
                                }}>
                                {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                              </Flex>
                            </InputRightElement>
                          </InputGroup>
                          <FormErrorMessage>
                            {errors[name] && errors[name]?.message}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    />
                  </Box>
                  <Flex w="100%" justifyContent={{ base: 'flex-start', md: 'end' }}>
                    <FormLabel w='max-content'>
                      <span style={{ color: 'red' }}>{`* `}</span>
                      Confirm Password :
                    </FormLabel>
                  </Flex>
                  <Box w="100%">
                    <Controller
                      name='confirm'
                      control={control}
                      defaultValue=''
                      rules={{
                        required: {
                          value: true,
                          message: "Please input your confirm password!"
                        },
                        validate: (val) => {
                          if (watch('password') !== val) {
                            return 'Password does not match'
                          }
                        }

                      }}
                      render={({ field: { name, onChange, onBlur, value, ref } }) => (
                        <FormControl isInvalid={errors[name]}>
                          <InputGroup>
                            <Input
                              pr='4.5rem'
                              type={showPasswordConfirm ? 'text' : 'password'}
                              onChange={onChange}
                              onBlur={onBlur}
                              value={value.confirm}
                            />
                            <InputRightElement width='4.5rem'>
                              <Flex
                                color='gray.600'
                                onClick={handleClickSecond}
                                _hover={{
                                  cursor: 'pointer'
                                }}>
                                {showPasswordConfirm ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                              </Flex>
                            </InputRightElement>
                          </InputGroup>
                          <FormErrorMessage>
                            {errors[name] && errors[name]?.message}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    />
                  </Box>
                  <Flex w="100%" justifyContent={{ base: 'flex-start', md: 'end' }}>
                    <FormLabel w='max-content'>
                      <span style={{ color: 'red' }}>{`* `}</span>
                      Gender :
                    </FormLabel>
                  </Flex>
                  <Box w="100%">
                    <Controller
                      name='gender'
                      control={control}
                      defaultValue=''
                      rules={{
                        required: {
                          value: true,
                          message: "Please select gender!"
                        }
                      }
                      }
                      render={({ field: { name, onChange, onBlur, value, ref } }) => (
                        <FormControl isInvalid={errors[name]}>
                          <Select placeholder=' '
                            onChange={onChange}
                            onBlur={onBlur}
                            value={value}>
                            <option value='male'>Male</option>
                            <option value='female'>Female</option>
                          </Select>
                          <FormErrorMessage>
                            {errors[name] && errors[name]?.message}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    />
                  </Box>
                </Grid>
              </Flex>
              <Button type="submit" backgroundColor='#188FFF' color='white'>
                Submit
              </Button>
              <Flex direction='column' w='full' pt='20px' >
                <Text>Name: {content.name}</Text>
                <Text>E-Mail: {content.email}</Text>
                <Text>Tel: {content.tel}</Text>
                <Text>Gender : {content.gender}</Text>
              </Flex>
            </VStack>
          </form>
        </Card>
      </Center>
    </Flex>
  );
};

export default App;

