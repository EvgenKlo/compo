import styles from "./productCard.module.scss";

const ProductCard = () => {
  return (
    <div>
      <h2 className={`h2 ${styles.title}`}>
        Кроссовки мужские Skechers Sunny Dale
      </h2>
    </div>
  );
};

export default ProductCard;
