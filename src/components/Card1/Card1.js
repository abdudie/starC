import React, { useState, useEffect } from "react";
import "./Card1.css";

const Card1 = ({ image11, image22, image33, image44 }) => {
  // const [cardData, setCardData] = useState([]);
  // useEffect(() => {
  //   setCardData(dummyData);
  // }, []);
  const [myData, setMyData] = useState("");
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const [image4, setImage4] = useState("");
  const [inDisplay, setInDisplay] = useState("");
  const [selecbtnToggle, setselecbtnToggle] = useState(false);

  useEffect(() => {
    setInDisplay(image11);
    setImage1(image11);
    setImage2(image22);
    setImage3(image33);
    setImage4(image44);
  }, []);

  const imageChange = (e) => {
    if (e == 1) {
      setInDisplay(image11);
    } else if (e == 2) {
      setInDisplay(image22);
    } else if (e == 3) {
      setInDisplay(image33);
    } else if (e == 4) {
      setInDisplay(image44);
    }
  };

  const handleSelect = () => {
    if (selecbtnToggle) {
      setselecbtnToggle(false);
    } else {
      setselecbtnToggle(true);
    }
  };
  return (
    <div>
      {/* {cardData.map((e, index) => {
        return (
          <> */}
      <div className="card cardheight1 carddetailing ">
        <div className="actorImg">
          <img className="cardimagedetailing" src={inDisplay}></img>
        </div>
        <div className="details d-flex flex-column align-items-center w-100">
          <div className="mt-1 d-flex flex-column text-center">
            <span className="text-30 weight600 text-dark p-0 m-0">
              The Masked
            </span>
            <span className="text-18px text-dark mt-0">Singer</span>
          </div>
          <div className="w-100 mt-3 ">
            <span className=" mx-3 text-18px text-dark weight600">
              Location
            </span>
            <div className="mx-3 d-flex justify-content-between">
              <span className="text-18px text-dark weight600">
                Event Booking
              </span>
              <span className="text-16px text-dark weight600">
                <i>3608</i>
              </span>
            </div>
            <div className="d-flex justify-content-center mt-2">
              <div className="col-10 d-flex justify-content-around">
                <img
                  className="smallimg"
                  src={image1}
                  onClick={() => imageChange(1)}
                ></img>
                <img
                  className="smallimg"
                  src={image2}
                  onClick={() => imageChange(2)}
                ></img>
                <img
                  className="smallimg"
                  src={image3}
                  onClick={() => imageChange(3)}
                ></img>
                <img
                  className="smallimg"
                  src={image4}
                  onClick={() => imageChange(4)}
                ></img>
              </div>
            </div>
          </div>
        </div>
        {selecbtnToggle ? (
          <>
            <div className="buttondiv">
              <button
                className="w-100 selectbtndiv1"
                onClick={() => handleSelect()}
              >
                SELECTED
              </button>
            </div>
          </>
        ) : (
          <div className="buttondiv">
            <button
              className="w-100 selectbtndiv"
              onClick={() => handleSelect()}
            >
              SELECT
            </button>
          </div>
        )}
      </div>
      {/* </>
        );
      })} */}
    </div>
  );
};

export default Card1;
