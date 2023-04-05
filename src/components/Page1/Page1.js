import React, { useState, useEffect } from "react";
import "./Page1.css";
import Card1 from "../Card1/Card1";

import logo from "../../images/starImage.png";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import axios from "axios";

const Page1 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("../dummy.json")
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div className="d-flex flex-column container">
        <div>
          <span className="text-45px weight600 text-black">Shortlist</span>
        </div>
        <div className="">
          <span className="fs-5 weight400">Details :</span>
        </div>
        <div className="d-flex justify-content-around mt-4">
          <div className="d-flex flex-column">
            <span className="text-25 text-black weight500">Event Date</span>
            <span className="text-20px weight400">2023-02-22</span>
          </div>
          <div className="d-flex flex-column">
            <span className="text-25 text-black weight500">Location</span>
            <span className="text-20px weight400">Delhi, India</span>
          </div>
        </div>
        <div className="d-flex justify-content-center flex-column align-items-center mt-2">
          <div>
            <span className="text-30 weight500 text-black">Budget</span>
          </div>
          <div>
            <span className="badge text-25 text-white bg-black borderradius1 py-3">
              ₹500,000
            </span>
          </div>
          <div className="mt-3">
            <span className="text-40 text-black weight600">Singers</span>
          </div>
          <div className="col-8 mt-2 text-center">
            <span className="text-18px">
              Select an artist that matches your vibe.
            </span>
          </div>
        </div>

        {data.map((e) => {
          return (
            <div className="d-flex justify-content-center flex-column align-items-center mt-3">
              <Card1
                image11={e.image1}
                image22={e.image2}
                image33={e.image3}
                image44={e.image4}
              />
            </div>
          );
        })}
      </div>
      <div className="bg-black pt-5 d-flex flex-column px-3 pb-5">
        <div className="d-flex justify-content-center flex-column text-center">
          <span className="text-30 text-white weight600">
            6000+ Users trust StarClinch.
          </span>
          <span className="text-16px text-white weight300">
            Booking Terms & Conditions
          </span>
          <span className="mt-5 text-25 text-white weight500">
            BOOKING TERMS & CONDITIONS FOR CLIENT
          </span>
          <span className="text-16px weight300 text-white">
            Advance Fee and Payment Terms
          </span>
        </div>
        <div className="mt-5 d-flex flex-column">
          <span className="mt-5 text-white text-16px weight300">
            All acts are subject to availability
          </span>
          <span className="text-white text-16px weight300">
            GST @18% will be applicable
          </span>
          <span className="text-white text-16px weight300">
            We take an advance of 50% to confirm a show
          </span>
          <span className="text-white text-16px weight300">
            Quotation is valid for 14 days and subject to change
          </span>
          <span className="text-white text-16px weight300">
            The balance amount needs to be paid 7 days before the show
          </span>
          <span className="text-white text-16px weight300">
            TBL (Travel, Boarding & Lodging) will be arranged by the organizer
          </span>
          <span className="text-white text-16px weight300">
            Tech-Rider (sound, stage & lighting) will be arranged by the
            organizer
          </span>
          <span className="text-white text-16px weight300">
            EMI is applicable for payments made by Credit Cards only
          </span>
        </div>
      </div>
      <div className="mt-4 mx-3 d-flex flex-column">
        <div className="d-flex align-items-center">
          <img className="logoSize1" src={logo}></img>
          <span className="text-35 text-black weight600">StarClinch</span>
        </div>
        <div className="row d-flex">
          <div className="col-2"></div>
          <div className="col-7 d-flex">
            <div className="col-3">
              <BsFacebook className="text-black" />
            </div>
            <div className="col-3">
              <BsTwitter className="text-black" />
            </div>
            <div className="col-3">
              <BsYoutube className="text-black" />
            </div>
            <div className="col-3">
              <BsInstagram className="text-black" />
            </div>
          </div>
        </div>
        <div className="mt-4">
          <div className="row d-flex justify-content-center">
            <div className="col-5  d-flex flex-column px-3">
              <span className="text-20px weight500 text-black">FOR BUYERS</span>
              <span className="text-info text-14px weight300">Our Buyers</span>
              <span className="text-info text-14px weight300">Browse</span>
              <span className="text-info text-14px weight300">
                Post Your Requirement
              </span>
              <span className="text-info text-14px weight300">
                Entertainment on EMI
              </span>
            </div>
            <div className="col-5  d-flex flex-column px-3">
              <span className="text-20px weight500 text-black">FOR BUYERS</span>
              <span className="text-info text-14px weight300">Our Buyers</span>
              <span className="text-info text-14px weight300">Browse</span>
              <span className="text-info text-14px weight300">
                Post Your Requirement
              </span>
              <span className="text-info text-14px weight300">
                Entertainment on EMI
              </span>
            </div>
          </div>
        </div>
        <div className="d-flex mt-3 flex-column col-9">
          <span className="text-20px weight600 text-black">
            REGISTERED OFFICE ADDRESS
          </span>
          <span className="text-16px weight400 text-black">
            Percept House, Ground Floor
          </span>
          <span className="text-16px weight400 text-black">
            East of Kailash, New Delhi
          </span>
          <span className="text-16px weight400 text-black">
            CIN: U52605DL2012PTC236944
          </span>
          <span className="text-16px weight400 text-black">
            Phone: +91 11 498 498 01
          </span>
          <span className="text-16px mt-2 weight400 text-info">Contact Us</span>
        </div>
        <div className="d-flex justify-content-center mt-5 flex-column text-center">
          <img
            className="footerimg"
            src="https://verdant-biscuit-f278ad.netlify.app/payment.c2c1222d.png"
          ></img>
          <span>
            © Copyright 2015-2023 |
            <span className="text-info"> VINSM Globe Pvt. Ltd. </span>| All
            Rights Reserved.
          </span>
        </div>
      </div>
    </>
  );
};

export default Page1;
