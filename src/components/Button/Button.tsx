import React, { PropsWithChildren } from "react";
import { button } from "@/components/Button/button.css";

interface props extends PropsWithChildren {}

export function Button({ children }: props) {
  return <button className={button}>{children}</button>;
}
