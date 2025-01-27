"use client";
import { Provider } from "react-redux";
import "./globals.scss";
import store from "@/shared/redux/store";
import { ClerkProvider } from "@clerk/nextjs";
import { Analytics } from "@vercel/analytics/react"

const RootLayout = ({ children }: any) => {
  return (
    <>
      <Analytics />
      <Provider store={store}>
        <ClerkProvider>{children}</ClerkProvider>
      </Provider>
    </>
  );
};
export default RootLayout;
