import React, { useState } from "react";

import Header from "../components/Header";
import Filter from "../components/Filters";
import Candidates from "../components/Candidates";
import Resume from "../components/Resume";
import classNames from "classnames";
import toast, { Toaster } from "react-hot-toast";
import { MdOutlineClose } from "react-icons/md";
import { HiLightningBolt } from "react-icons/hi";

import styles from "./src/App.css";

const notify = () =>
  toast.custom(
    (t) => (
      <div
        className={classNames([
          styles.notificationWrapper,
          t.visible ? "top-0" : "-top-96",
        ])}
      >
        <div className={styles.iconWrapper}>
          <HiLightningBolt />
        </div>
        <div className={styles.contentWrapper}>
          <h1>New version available</h1>
          <p>
            An improved version of VESSEL is now available, refresh to update.
          </p>
        </div>
        <div className={styles.closeIcon} onClick={() => toast.dismiss(t.id)}>
          <MdOutlineClose />
        </div>
      </div>
    ),
    { id: "unique-notification", position: "top-center" }
  );

function Home() {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header />
        <div>
          <button onClick={notify}>Notify</button>
          <Toaster />
        </div>
        <main className="flex h-screen">
          <Filter />
          <Candidates />
          <Resume />
        </main>
      </div>
    </div>
  );
}

export default Home;
