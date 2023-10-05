import React from "react";
import {
  Text,
  FlatList,
  View,
  StyleSheet,
  Pressable,
  ActivityIndicator,
  Alert,
} from "react-native";
import CartListItem from "../components/CartListItem";
//import cart from "../data/cart";

import { useDispatch, useSelector } from "react-redux";

import {
  selectDeliveryPrice,
  selectSubtotal,
  selectTotal,
  cartSlice,
} from "../store/cartSlice";
/*
import {
  useCreateOrderMutation,
  useCreatePaymentIntentMutation,
} from "../store/apiSlice";
import { useStripe } from "@stripe/stripe-react-native";
*/

const ShoppingCartTotals = () => {
  const subtotal = useSelector(selectSubtotal);
  const deliveryFee = useSelector(selectDeliveryPrice);
  const total = useSelector(selectTotal);

  return (
    <View style={styles.totalsContainer}>
      <View style={styles.row}>
        <Text style={styles.text}>Subtotal</Text>
        <Text style={styles.text}>{subtotal} US$</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Delivery</Text>
        <Text style={styles.text}>{deliveryFee} US$</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.textBold}>Total</Text>
        <Text style={styles.textBold}>{total} US$</Text>
      </View>
    </View>
  );
};

const ShoppingCart = () => {
  // const subtotal = useSelector(selectSubtotal);
  // const deliveryFee = useSelector(selectDeliveryPrice);
  // const total = useSelector(selectTotal);
  // const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);
  // const [createOrder, { data, error, isLoading }] = useCreateOrderMutation();
  // const [createPaymentIntent] = useCreatePaymentIntentMutation();
  // const { initPaymentSheet, presentPaymentSheet } = useStripe();

  /*const onCheckout = async () => {
    // 1. Create a payment intent
    const response = await createPaymentIntent({
      amount: Math.floor(total * 100),
    });
    if (response.error) {
      Alert.alert("Error", response.error.message);
      return;
    }

    // 2. Initialize the payment sheet
    const initResponse = await initPaymentSheet({
      merchantDisplayName: "Nike",
      paymentIntentClientSecret: response.data.paymentIntent,
    });
    if (initResponse.error) {
      Alert.alert("Error", initResponse.error.message);
      return;
    }

    // 3. Present the payment sheet for Stripe
    const paymentResponse = await presentPaymentSheet();

    if (paymentResponse.error) {
      Alert.alert("Error", paymentResponse.error.message);
      return;
    }

    // 4. If payment ok -> create order
    onCreateOrder();
  };

  const onCreateOrder = async () => {
    const result = await createOrder({
      items: cartItems,
      subtotal,
      deliveryFee,
      total,
      customer: {
        name: "John Doe",
        address: "123 Fake St, Springfield, OR, 97477",
        email: "jonh.doe@test.com",
      },
    });

    if (result.data?.status === "OK") {
      Alert.alert(
        "Order has been submitted",
        `Your order reference is: ${result.data.data.ref}`
      );
      dispatch(cartSlice.actions.clear());
    }
  };*/
  const onCheckout = () => {
    console.log("Checkout");
  };

  return (
    <>
      <FlatList
        data={cartItems}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        ListFooterComponent={ShoppingCartTotals}
        keyExtractor={(item) => item.product._id}
      />
      <Pressable style={styles.button} onPress={onCheckout}>
        <Text style={styles.buttonText}>
          Checkout {/*isLoading && <ActivityIndicator />*/}
        </Text>
      </Pressable>
    </>
  );
};

export default ShoppingCart;

const styles = StyleSheet.create({
  totalsContainer: {
    margin: 20,
    paddingTop: 10,
    borderTopColor: "gainsboro",
    borderTopWidth: 1,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 2,
  },
  text: {
    fontSize: 16,
    color: "gray",
  },
  textBold: {
    fontSize: 16,
    fontWeight: "500",
  },
  button: {
    position: "absolute",
    backgroundColor: "black",
    bottom: 30,
    margin: 10,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    width: "90%",
    alignSelf: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "white",
  },
});
