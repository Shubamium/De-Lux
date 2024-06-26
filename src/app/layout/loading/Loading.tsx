"use client";
import React, { useEffect, useState } from "react";
import "./loading.scss";
import { VscLoading } from "react-icons/vsc";
import { TbLoader2, TbLoader3, TbTruckLoading } from "react-icons/tb";
import { LiaTruckLoadingSolid } from "react-icons/lia";
import { CgSearchLoading } from "react-icons/cg";
import { BiLoaderAlt, BiLoaderCircle } from "react-icons/bi";
import { RiLoader4Fill } from "react-icons/ri";
type Props = {};

export default function Loading({}: Props) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 4000);
  }, []);
  return (
    <div id="loading" className={!isLoaded ? "loading" : "loaded"}>
      <img
        src="/decors/load-card-deck_bottom.png"
        alt=""
        className="decor_load-deck b"
      />
      <img
        src="/decors/load-card-deck_top.png"
        alt=""
        className="decor_load-deck t"
      />
      <img src="/graphics/main_logo.png" alt="" className="loog" />
      <p>- LOADING -</p>
      <TbLoader3 />
    </div>
  );
}
