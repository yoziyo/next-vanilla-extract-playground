import { globalStyle, style } from "@vanilla-extract/css";

export const button = style({
  border: "3px",
  borderRadius: "10px",
  color: "#fff",
  background: "#000",
  /**
   * 부모에서 불특정 자식을 변경하는게 불가능함
   * 자식에서 부모를 지칭해서 변경하거나,
   * globalStyle 이용해서 먹어야 함
   */
  // "> a": {
  //   color: "#fff",
  // },
});

globalStyle(`${button} > a`, {
  color: "#fff",
});
