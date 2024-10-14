import "./ProductCard.scss";

interface CardProps {
  name: string;
  description: string;
  imageUrl: string;
  price: number;
}

export default function ProductCard({
  name,
  description,
  imageUrl,
  price,
}: CardProps) {
  return (
    <div className="product__card">
      <img src={imageUrl} alt={`Изображение продукта '${name}'`} />
      <div className="card__text">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      <div className="card__options">
        <p>от {price} ₽</p>
        <button className="card__btn btn btn-primary btn-lg px-5">
          Выбрать
        </button>
      </div>
    </div>
  );
}
