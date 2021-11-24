import { Provider } from "react-redux";
import { store } from "../app/store";
// import '../styles/reset.css';
import "../styles/globals.css";
import { Provider as AuthProvider } from "next-auth/client";

const MyApp = ({ Component, pageProps }) => {
  return (
    // hight order component - parent component has children components in it
    <AuthProvider session={pageProps.session}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </AuthProvider>
  );
};

export default MyApp;
