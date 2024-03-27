import { Breadcrumbs, Link } from "@mui/material";
import styles from "./productCard.module.scss";
import { IOSSwitch } from "../../shared/components/Switcher/Switcher";
import { useState } from "react";

const ProductCard = () => {
  const [countProductInCart, setCountProductInCart] = useState(0);

  return (
    <div>
      <Breadcrumbs aria-label="breadcrumb" sx={{ mb: "24px" }}>
        <Link
          underline="hover"
          color="inherit"
          href="##"
          className={styles.breadcrumb}
        >
          Каталог
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="##"
          className={styles.breadcrumb}
        >
          Обувь
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="##"
          className={styles.breadcrumb}
        >
          Кроссовки
        </Link>
        <Link
          underline="hover"
          color="text.primary"
          href="##"
          className={styles.breadcrumb}
          aria-current="page"
        >
          Беговые
        </Link>
      </Breadcrumbs>
      <h2 className={`h2 ${styles.title}`}>
        Кроссовки мужские Skechers Sunny Dale
      </h2>
      <div className={styles.card}>
        <div className={styles.photoSlider}></div>
        <div className={styles.descriptionContainer}>
          <div className={styles.aboutProduct}>
            <div className={styles.details}>
              <div className={styles.priceContainer}>
                <p className={styles.oldPrice}>166 534.00 цена без скидки</p>
                <p className={`${styles.actualPrice} h1`}>
                  122 566 ₽<span className={`${styles.percent} h5`}>-15%</span>
                </p>
              </div>
              <div className={styles.package}>
                <p className={`h6 ${styles.packageCount}`}>12 штук в уп.</p>
                <div className={styles.switch}>
                  <IOSSwitch defaultChecked sx={{ margin: "auto 0" }} />
                  <p className={`${styles.switchText}`}>Заказ упаковкой</p>
                </div>
              </div>
              <div className="horizontalDivider"></div>
              <div className={styles.availability}>
                <div className={styles.availabilityItem}>
                  <h6 className={`${styles.availabilityTitle} h6`}>Завтра</h6>
                  <p className={styles.availabilityDate}>Доставка</p>
                </div>
                <div className={styles.availabilityItem}>
                  <h6 className={`${styles.availabilityTitle} h6`}>7 шт.</h6>
                  <p className={styles.availabilityDate}>Тарасовка</p>
                </div>
                <div className={styles.availabilityItem}>
                  <h6 className={`${styles.availabilityTitle} h6`}>7 шт.</h6>
                  <p className={styles.availabilityDate}>Тарасовка</p>
                </div>
              </div>
              <div className={styles.buttonsContainer}>
                {countProductInCart ? (
                  <div className={`${styles.toCartBtn} ${styles.counterBtn}`}>
                    <button
                      className={styles.decrementBtn}
                      onClick={() =>
                        setCountProductInCart(countProductInCart - 1)
                      }
                    ></button>
                    <p className={styles.countInCart}>
                      {countProductInCart}{" "}
                      {(countProductInCart > 4 && countProductInCart < 21) ||
                      countProductInCart % 10 > 4 ||
                      countProductInCart % 10 === 0
                        ? "штук"
                        : (countProductInCart % 10) - 1 === 0
                        ? "штука"
                        : "штуки"}
                    </p>
                    <button
                      className={styles.incrementBtn}
                      onClick={() =>
                        setCountProductInCart(countProductInCart + 1)
                      }
                    ></button>
                  </div>
                ) : (
                  <button
                    className={`${styles.toCartBtn} ${styles.emptyCount}`}
                    onClick={() =>
                      setCountProductInCart(countProductInCart + 1)
                    }
                  >
                    <span className={styles.cartIcon}></span>
                    <p className={`${styles.menuButtonText} lightText`}>
                      В корзину
                    </p>
                  </button>
                )}

                <button className={styles.likeBtn}>
                  <i className={styles.likeIcon}></i>
                </button>
              </div>
            </div>
            <div className={`verticalDivider`}></div>
            <div className={styles.characteristicsContainer}>
              <h4 className={`${styles.characteristicsTitle} h4`}>
                Характеристики
              </h4>
            </div>
          </div>
          <div className={styles.description}>
            <h3 className={`${styles.descriptionTitle} h3`}>Описание товара</h3>
            <p className="p">
              Создание приверженного покупателя специфицирует неопровержимый
              комплексный анализ ситуации. CTR существенно индуцирует из ряда
              вон выходящий SWOT-анализ. Воздействие на потребителя определяет
              возрастающий интеграл по поверхности, что известно даже
              школьникам. Отсюда естественно следует, что коммуникация
              уравновешивает косвенный фактор коммуникации. Поле направлений
              естественно допускает экспериментальный скачок функции, таким
              образом сбылась мечта идиота - утверждение полностью доказано.
              Арифметическая прогрессия притягивает линейно зависимый пул
              лояльных изданий.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
