import React from "react";
import Nav from "./Nav";

import { UserProvider } from "../lib/authContext";
import Footer from "./Footer";
function Layout({ user, loading = false, children }) {
  return (
    <UserProvider value={{ user, loading }}>
      <Nav />
      <main className="">
        <div
          className="flex-col
          justify-center
          items-center
          "
        >
          {children}
        </div>
      </main>
      <Footer />
    </UserProvider>
  );
}

export default Layout;
