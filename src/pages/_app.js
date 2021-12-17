import { Provider } from "react-redux";
import { store } from "../app/store";
// import '../styles/reset.css';
import "../styles/globals.css";
// this aloew the app to use all the next auth authentication methods
import { Provider as AuthProvider } from "next-auth/client";

const MyApp = ({ Component, pageProps }) => {
  return (
    // AuthProvider wrap the entire app and give it access to next authentication for all of it
    // hight order component - parent component has children components in it
    <AuthProvider session={pageProps.session}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </AuthProvider>
  );
};

export default MyApp;
