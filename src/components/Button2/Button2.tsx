import React, { PropsWithChildren } from "react";
import { button } from "@/components/Button2/button2.css";

interface props extends PropsWithChildren {}

export function Button2({ children }: props) {
  return <button className={button}>{children}</button>;
}
