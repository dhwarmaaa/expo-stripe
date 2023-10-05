import { StatusBar } from "expo-status-bar";
import Navigation from "./src/navigation";
import { Provider } from "react-redux";
import { store } from "./src/store";
import { StripeProvider } from "@stripe/stripe-react-native";
import { Text } from "react-native";

const STRIPE_PUBLISHABLE_KEY =
  "pk_test_51NucmjGeH2Svd03BuJ0Zv6gQ1cxqz2GFCYU25nZL4VN8eppOdYrikrWTGF8XxuhFZ29sNNUBqmqYRSZL7WHiMvMw00bBYDKu90";
export default function App() {
  return (
    <Provider store={store}>
      <StripeProvider publishableKey={STRIPE_PUBLISHABLE_KEY}>
        <Navigation />
      </StripeProvider>
      <StatusBar style="auto" />
    </Provider>
  );
}
