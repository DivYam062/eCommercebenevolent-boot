import React, { useState, useEffect, useMemo, memo } from "react";
import {
  Box,
  Heading,
  Text,
  Image,
  VStack,
  HStack,
  Button,
  Spacer,
  StackDivider,
  Container,
} from "@chakra-ui/react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

export const Cart = () => {
  
  let { isAuth, userSuccessData } = useSelector((store) => {
    return {
      isAuth: store.loginReducer.isAuth,
      userSuccessData: store.loginReducer.userSuccessData,
    };
  }, shallowEqual);

  const [cartData, setCartData] = useState(userSuccessData?.cart);
  
  useEffect(() => {
    setCartData(userSuccessData.cart);
  }, [userSuccessData]);

  const calculateTotalPrice = () => {
    return cartData?.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const increaseQuantity = (itemId) => {
    const updatedCart = cartData?.map((item) =>
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartData(updatedCart);
    axios.patch(`https://products-3jez.onrender.com/product`, {
      cart: updatedCart,
    });
  };

  const decreaseQuantity = (itemId) => {
    const updatedCart = cartData?.map((item) =>
      item.id === itemId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCartData(updatedCart);
    axios.patch(`https://products-3jez.onrender.com/product`, {
      cart: updatedCart,
    });
  };

  // let navigate = useNavigate();

  const makePayment = () => {
    // navigate("/payment");
  };

  const deletehandle = (id) => {
    const updatedCart = cartData?.filter((e) => {
      return e.id !== id;
    });
    setCartData(updatedCart);
    axios.patch(`https://products-3jez.onrender.com/product`, {
      cart: updatedCart,
    });
  };

  return (
    <Container maxW="xl" mt={1}>
      <Heading>Your Shopping Cart</Heading>
      <VStack
        align="start"
        divider={<StackDivider />}
        spacing={4}
        mt={4}
        width="80%"
      >
        {cartData?.map((item) => (
          <HStack key={item.id} width="100%">
            <Image
              src={item.image}
              alt={item.title}
              maxW="100px"
              objectFit="contain"
            />
            <VStack align="start" spacing={5}>
              <Text fontSize="lg" fontWeight="bold">
                {item.title}
              </Text>
              <Text>${item?.price?.toFixed(2)}</Text>
              <Text>Quantity: {item.quantity}</Text>
              <HStack>
                <Button
                  colorScheme="teal"
                  size="sm"
                  onClick={() => increaseQuantity(item.id)}
                >
                  +
                </Button>
                <Button
                  colorScheme="teal"
                  size="sm"
                  onClick={() => decreaseQuantity(item.id)}
                >
                  -
                </Button>
              </HStack>
            </VStack>
            <Spacer />
            <Button
              onClick={() => {
                deletehandle(item.id);
              }}
              colorScheme="red"
              size="sm"
            >
              Remove
            </Button>
          </HStack>
        ))}
      </VStack>
      <Box mt={4}>
        <Text fontSize="lg" fontWeight="bold">
          Total: ${calculateTotalPrice()?.toFixed(2)}
        </Text>
      </Box>
      <Button
        colorScheme="blue"
        mt={4}
        size="lg"
        width="100%"
        onClick={makePayment}
      >
        Proceed to Payment
      </Button>
    </Container>
  );
};
