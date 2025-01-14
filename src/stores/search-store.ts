import { makeAutoObservable } from "mobx";

class SearchStore {
  currentValue: string = "";

  updateSearchValue = (value: string) => {
    this.currentValue = value;
  };

  constructor() {
    makeAutoObservable(this);
  }
}

export default new SearchStore();
