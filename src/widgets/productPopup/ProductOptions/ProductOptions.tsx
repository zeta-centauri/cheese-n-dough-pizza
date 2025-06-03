import { observer } from 'mobx-react-lite';
import IngredientsPanel from './IngridientsPanel/IngridientsPanel';
import RadioButton from '../../../components/Buttons/RadioButton/RadioButton';
import { Wrapper } from './ProductOptions.styled';
import { Product } from '../../../types';

interface Props {
    product: Product;
}

const ProductOptions = observer(({ product }: Props) => {
    // const { currentPrice, packProduct } = productStore;
    // const { addProduct } = cartStore;

    // const navigate = useNavigate();

    // const handleAddProduct = () => {
    //     // addProduct(packProduct());
    //     navigate('/');
    // };

    return (
        <Wrapper>
            <RadioButton types={product.types} />
            <IngredientsPanel />
            {/* <AddProductButton onclick={handleAddProduct} price={currentPrice} /> */}
        </Wrapper>
    );
});

export default ProductOptions;
