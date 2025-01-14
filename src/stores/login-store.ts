import { makeAutoObservable } from "mobx";

class LoginStore {
  isOpen: boolean = false;
  currentMode: Mode = "login";
  constructor() {
    makeAutoObservable(this);
  }

  open = () => {
    this.isOpen = true;
  };

  close = () => {
    this.isOpen = false;
  };

  changeMode = () => {
    if (this.currentMode === "login") {
      this.currentMode = "register";
    } else {
      this.currentMode = "login";
    }
  };
}

export default new LoginStore();

type Mode = "login" | "register";
