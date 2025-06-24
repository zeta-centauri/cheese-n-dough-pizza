/* eslint-disable react-refresh/only-export-components */
import { observer } from 'mobx-react-lite';
import { Wrapper, Inner, Slider, Option } from './RadioButton.styled';
import { productsEndpoints } from 'shared/api';
import { useProductStore } from 'widgets/productPopup/lib/ProductStoreContext';
import { useState } from 'react';
import { toJS } from 'mobx';

export const pizzaSizes: Record<number, string> = {
    25: 'Маленькая',
    30: 'Средняя',
    35: 'Большая',
};

type RadioButtonProps = {
    sizes: productsEndpoints.Size[];
};

const RadioButton = observer(({ sizes }: RadioButtonProps) => {
    const [currentSizeIndex, setCurrentSizeIndex] = useState(0);

    const { currentSize, setSize } = useProductStore();

    const handleOptionClick = (size: productsEndpoints.Size, index: number) => {
        setCurrentSizeIndex(index);
        setSize(size);
    };

    if (sizes.length < 2) return null;
    return (
        <Wrapper>
            <Inner $typesCount={sizes.length}>
                {sizes.map((size, index) => (
                    <Option
                        key={index}
                        onClick={() => {
                            handleOptionClick(size, index);
                        }}
                    >
                        {pizzaSizes[size.size]}
                    </Option>
                ))}
                <Slider
                    $typesCount={sizes.length}
                    $currentSizeIndex={currentSizeIndex}
                />
            </Inner>
        </Wrapper>
    );
});

export default RadioButton;
