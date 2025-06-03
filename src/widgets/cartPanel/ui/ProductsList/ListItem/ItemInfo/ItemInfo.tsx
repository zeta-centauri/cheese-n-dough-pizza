import {
    ItemImg,
    ItemText,
    ItemTitle,
    ItemDescription,
    Wrapper,
} from './ItemInfo.styled';

type ItemInfoProps = {
    imageUrl: string;
    productName: string;
    productDescription: string | null;
};

const ItemInfo = ({
    imageUrl,
    productDescription,
    productName,
}: ItemInfoProps) => {
    return (
        <Wrapper>
            <ItemImg src={imageUrl} alt={productName} />
            <ItemText>
                <ItemTitle>{productName}</ItemTitle>
                <ItemDescription>{productDescription ?? ''}</ItemDescription>
            </ItemText>
        </Wrapper>
    );
};
export default ItemInfo;
