/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useRef, useState } from "react";
import "../../styles/mac.min.css";
import WinBox from "react-winbox";
// required
import "winbox/dist/css/themes/modern.min.css";
// optional
import "winbox/dist/css/themes/white.min.css";
import "winbox/dist/css/winbox.min.css";

const MarcOsWindow2 = () => {

  const [title, setTitle] = useState("Hello");
  const [top, setTop] = useState(30);
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(250);
  const [bottom, setBottom] = useState(50);
  const [theme, setTheme] = useState("mac");
  const [hide, setHide] = useState(false);

  return (
    <>
      <WinBox
        title={title}
        icon="/logo.ico"
        noMin={false}
        noMax={false}
        noFull={true}
        noClose={false}
        width={700}
        height={500}
        x="center"
        y="center"
        top={top}
        right={right}
        bottom={bottom}
        left={left}
        hide={hide}
        className={theme ? theme : ""}
      >
        <div style={{ padding: 10 }}>
          <h3 style={{ margin: 0 }}>React Winbox Demo with Title "{title}"</h3>
        </div>
      </WinBox>
    </>
  );
};

export default MarcOsWindow2;
