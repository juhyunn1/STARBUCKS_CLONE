import { atom } from "recoil";

export const CartCountState = atom({
  key: "CartCountState", // 보통 이름이랑 똑같이 설정
  default: 0 // 초기값
});