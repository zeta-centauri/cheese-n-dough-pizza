import { makeAutoObservable } from "mobx";

class SideBarStore {
  isOpen: boolean = false;
  constructor() {
    makeAutoObservable(this);
  }
  open = () => {
    this.isOpen = true;
  };
  close = () => {
    this.isOpen = false;
  };
}

export default new SideBarStore();
