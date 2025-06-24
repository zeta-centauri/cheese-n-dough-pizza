import { observer } from 'mobx-react-lite';
import Dropdown from '../../Buttons/Forms/Dropdown/Dropdown';
import sortStore from '../../../entities/sort-store';
import { DropdownOption } from '../../../types';

const sortProperties: DropdownOption[] = [
    { property: 'name', name: 'По названию' },
    { property: 'price', name: 'По цене' },
    { property: 'rating', name: 'По популярности' },
];

const Sort = observer(() => {
    const { currentValue, updateSortValue } = sortStore;

    const handleSortPropertyClick = (value: string) => {
        updateSortValue(value);
    };

    return (
        <Dropdown
            currentValue={currentValue}
            onChange={handleSortPropertyClick}
            options={sortProperties}
        />
    );
});

export default Sort;
