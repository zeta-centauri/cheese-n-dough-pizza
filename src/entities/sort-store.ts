import { makeAutoObservable } from 'mobx';
import { DropdownProperty } from '../types';

class SortStore {
    currentValue: DropdownProperty = 'name';

    constructor() {
        makeAutoObservable(this);
    }

    updateSortValue = (value: string) => {
        this.currentValue = value;
    };
}

export default new SortStore();
