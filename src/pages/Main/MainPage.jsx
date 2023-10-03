import { useState } from "react";
import { createPortal } from "react-dom";
import { Restaurant } from "../../components/Restaurant/Restaurant";
import { RestaurantTabs } from "../../components/RestaurantTabs/RestaurantTabs";
import { restaurants } from "../../constans/mock";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { ThemeProvider } from "../../contexts/Theme";

import { ReviewForm } from "../../components/ReviewForm/ReviewForm";
import styles from "./MainPage.module.scss";

export const MainPage = () => {
  const [restaurantId, setRestaurantId] = useState(0);
  const [showReview, serShowReview] = useState(false);

  return (
    <ThemeProvider theme={"light"}>
      <div className={styles.wrapper}>
        <Header className={styles.header} />
        <div className={styles.content}>
          <RestaurantTabs
            restaurants={restaurants}
            onIndexSelect={setRestaurantId}
            className={styles.tabsRestaurant}
          />
          <Restaurant
            restaurant={restaurants[restaurantId]}
            onClose={() => {
              serShowReview(true);
            }}
          />
          {showReview &&
            createPortal(
              <ReviewForm
                className={styles.reviewForm}
                onClose={() => {
                  serShowReview(false);
                }}
              />,
              document.getElementById("portal")
            )}
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
};
