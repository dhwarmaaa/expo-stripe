import {
  StyleSheet,
  View,
  Image,
  FlatList,
  useWindowDimensions,
  Text,
  ScrollView,
  Pressable,
  ActivityIndicator,
} from "react-native";
//import products from "../data/products";
import { useSelector, useDispatch } from "react-redux";
import { cartSlice } from "../store/cartSlice";
//import { useGetProductQuery } from "../store/apiSlice";

const ProductsDetailsScreen = ({ route }) => {
  const product = useSelector((state) => state.products.selectedProduct);
  const dispatch = useDispatch();
  /*  const { data, isLoading, error } = useGetProductQuery(id);
  const product = data?.data;

 */

  const { width } = useWindowDimensions();

  const addToCart = () => {
    dispatch(cartSlice.actions.addCartItem({ product }));
  };
  /*
  if (isLoading) {
    return <ActivityIndicator />;
  }
  if (error) {
    return <Text>Error fetching the product. {error.error}</Text>;
  }*/
  return (
    <View>
      <ScrollView>
        {/* Image Carousel */}
        <FlatList
          data={product.images}
          renderItem={({ item }) => (
            <Image
              source={{ uri: item }}
              style={{
                width: width,
                aspectRatio: 1,
              }}
            />
          )}
          keyExtractor={(item) => item.uri}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
        />

        <View style={{ padding: 20 }}>
          {/* Title */}
          <Text style={styles.title}>{product.name}</Text>
          {/* Price */}
          <Text style={styles.price}>$ {product.price}</Text>
          {/* Description */}
          <Text style={styles.description}>{product.description}</Text>
        </View>
      </ScrollView>
      {/* add to cart Button */}
      <Pressable style={styles.button} onPress={addToCart}>
        <Text style={styles.buttonText}>Add to cart</Text>
      </Pressable>
    </View>
  );
};

export default ProductsDetailsScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 34,
    fontWeight: "bold",
    marginVertical: 10,
  },
  price: {
    fontSize: 16,
    fontWeight: "500",
    letterSpacing: 2,
  },
  description: {
    marginVertical: 10,
    lineHeight: 30,
    fontSize: 18,
    fontWeight: "300",
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
