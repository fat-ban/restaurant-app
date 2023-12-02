import recommends from "../../assets/recommendsImg.png";
import "./Recommends.css";
//react-multi-carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

//icons
import { AiFillStar } from "react-icons/ai";

//images

import { arrayMeals } from "../../DataImg";

const Recommends = () => {
  //console.log(meals)
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 3,
      slidesToSlide: 2,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const MealsComp = arrayMeals.map((meal, index) => {
    return (
      <div className="card-slid card  border-0 m-2 " key={index}>
        <img src={meal.url} className="product--image rounded" alt="imgslid" />
        <div className="card-body  ">
          <div className="title-card-slid card-title d-flex justify-content-between">
            <h3 className="text-white fs-5">{meal.title}</h3>
            <span
              className="text-italic fw-bold fs-5 fw-bold"
              style={{
                fontFamily: "Dancing Script",
                color: "#ffc107",
                letterSpacing: "2px",
              }}
            >
              {meal.price}
            </span>
          </div>
          <p className="card-text text-white">{meal.description}</p>
          <div className="d-flex">
            <AiFillStar style={{ color: "#ffcc0d" }} />
            <AiFillStar style={{ color: "#ffcc0d" }} />
            <AiFillStar style={{ color: "#ffcc0d" }} />
            <AiFillStar style={{ color: "#ffcc0d" }} />
            <AiFillStar style={{ color: "#ffcc0d" }} />
          </div>
        </div>
      </div>
    );
  });

  return (
    <section
      className="recommend-section w-100"
      style={{
        //height: "100vh",
        backgroundImage: `url(${recommends})`,

        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        overflow: "hidden",
      }}
    >
      <div className="container container-sect py-5">
        <div className="row my-5  ">
          <div
            className="col pb-5  d-flex justify-content-center align-items-center"
            style={{ zIndex: "1" }}
          >
            <div className="line-title mx-3"></div>
            <h1
              className=" main-title-rec text-white text-capitalize"
              style={{ fontSize: "3rem", fontWeight: "600", lineHeight: "1.5" }}
            >
              Chef Recommends
            </h1>
            <div className="line-title mx-3"></div>
          </div>
          <div
            className="swiper-recommend w-100 my-4"
            //style={{ width: "100%", height: "auto" }}
          >
            <Carousel responsive={responsive}>{MealsComp}</Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recommends;
