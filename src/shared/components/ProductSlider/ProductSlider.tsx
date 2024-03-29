import styles from "./product.slider.module.scss";

import photo1 from "../../../assets/productPhoto/img1.png";
import photo2 from "../../../assets/productPhoto/img2.png";
import photo3 from "../../../assets/productPhoto/img3.png";
import photo4 from "../../../assets/productPhoto/img4.png";
import photo5 from "../../../assets/productPhoto/img5.png";

const photos = [
  // { id: 1, photo: photo1 },
  { id: 2, photo: photo2 },
  { id: 3, photo: photo3 },
  { id: 4, photo: photo4 },
  { id: 5, photo: photo5 },
];

const ProductSlider = () => {
  return (
    <div>
      <img src={photo1} alt="Фото товара" className={styles.grandPhoto} />
      <div className={styles.sliderPanel}>
        <button className={`${styles.sliderBtn} ${styles.prevBtn}`}></button>
        <div className={styles.miniPhotoList}>
          {photos.map((item) => (
            <img
              src={item.photo}
              key={item.id}
              alt="Фото товара"
              className={styles.miniPhoto}
            ></img>
          ))}
        </div>
        <button className={`${styles.sliderBtn} ${styles.nextBtn}`}></button>
      </div>
    </div>
  );
};

export default ProductSlider;
