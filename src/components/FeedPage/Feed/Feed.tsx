import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { TailSpin } from "react-loader-spinner";

import Card from "./Card/Card";

import usePictures from "../../../hooks/usePictures";
import { Picture } from "../../../types/Interfaces";
import styles from "./Feed.module.scss";
import globals from "../../../App.module.scss";
import usePicture from "../../../hooks/usePicture";
import moment from "moment";

export default function Feed() {
  const { pictures, loading, error, fetchMore } = usePictures(8);

  const currentDate = moment().format("YYYY-MM-DD");
  const { picture } = usePicture(currentDate);

  const { ref, inView } = useInView({
    threshold: 1,
  });

  useEffect(() => {
    if (inView) {
      fetchMore();
    }
  }, [inView]);

  const picOfDayMarkup = (
    <div className={styles.OftheDay}>
      {picture ? (
        <>
          <h3 className={globals.SectionTitle}>Astronomy picture of the day</h3>
          <Card picture={picture} />
        </>
      ) : null}
    </div>
  );

  const picturesMarkup = pictures ? (
    <div>
      {picture ? (
        <h3 className={globals.SectionTitle}>Our previous pictures</h3>
      ) : null}
      <div className={styles.Pictures}>
        {pictures.slice(1).map((picture: Picture, index: number) =>
          pictures.length === index + 2 ? (
            <div ref={ref} key={picture.date}>
              <Card picture={picture} />
            </div>
          ) : (
            <Card picture={picture} key={picture.date} />
          )
        )}
      </div>
    </div>
  ) : null;

  const noDataMarkup = (
    <div className={styles.NoData}>
      {loading && <TailSpin color="#357cf2" height={30} width={30} />}
      {error && <p>Error fetching the pictures. Please refresh the page.</p>}
    </div>
  );

  return (
    <section className={styles.Feed}>
      {picOfDayMarkup}
      {picturesMarkup}
      {noDataMarkup}
    </section>
  );
}
