"use client";
import { Provider } from "react-redux";
import "./globals.scss";
import store from "@/shared/redux/store";
import { ClerkProvider } from "@clerk/nextjs";

const RootLayout = ({ children }: any) => {
  return (
    <>
      <Provider store={store}>
        <ClerkProvider>{children}</ClerkProvider>
      </Provider>
    </>
  );
};
export default RootLayout;
