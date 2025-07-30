import React from "react";
import Heading from "../Heading";
import Paragraph from "../Paragraph";

export default function LeadershipSec() {
  return (
    <section className="py_section">
      <div className="container">
          <div className="grid grid-cols-6 lg:grid-cols-12">
          <div className="col-span-3"></div>
           <div className="col-span-1"></div>
          <div className="col-span-7">
        <div className="line_heading lg:flex hidden  place-items-center">
                <Heading Heading={"our leadership"} />
                <span className="w-[100%] h-[0.8px] ml-[30px] block bg-[var(--primary-color)] flex-1"></span>
              </div>
              </div>
              </div>
        <div className="grid grid-cols-6 lg:grid-cols-12 lg:pt-[60px]">
          <div className="lg:col-span-3 col-span-6">
            <Heading
              className={"!leading-[36px] mb-[30px]"}
              Heading={
                <span>
                  guiding tarc <span className="lg:block hidden"></span> to new
                  horizons
                </span>
              }
            />
            <div className="lg:w-[65%] ml-[auto]">
              <Paragraph
                className={"mb-[15px]"}
                text={
                  "TARC stands out as a leading luxury real estate developer in New Delhi. "
                }
              />
              <a
                href=""
                className="text-primary capitalize flex place-items-center font-[Baskervville]"
              >
                <span className="me-[8px]">know more </span>
                <img src="./assets/icons/arrow-right.png" width={"20"} alt="" />
              </a>
            </div>
          </div>
          <div className="col-span-1"></div>
          <div className="col-span-7 lg:mt-[0] mt-[30px]">
            <div className="">
              
              <div className="grid-cols-1 lg:grid-cols-12 grid gap-[35px]">
                <div className="col-span-4">
                  <figure>
                    <img
                      src="./assets/images/home/leaders/leading_1.jpg"
                      alt=""
                      className="w-[100%]"
                    />
                    <figcaption className="mt-[10px] pt-[10px]">
                        <h3 className="font-baskerville uppercase text-[20px] text-primary mb-[8px]">ANIL SARIN</h3>
                        <span className="text-[#AA8A80] text-[14px]">Chairman</span>
                    </figcaption>
                  </figure>
                </div>
                <div className="col-span-4">
                  <figure>
                    <img
                      src="./assets/images/home/leaders/leading_2.jpg"
                      alt=""
                      className="w-[100%]"
                    />
                      <figcaption className="mt-[10px] pt-[10px]">
                        <h3 className="font-baskerville uppercase text-[20px] text-primary mb-[8px]">AMAR SARIN</h3>
                        <span className="text-[#AA8A80] text-[14px]">Managing director and CEO</span>
                    </figcaption>
                  </figure>
                </div>
                <div className="col-span-4">
                  <figure>
                    <img
                      src="./assets/images/home/leaders/leading_3.jpg"
                      alt=""
                      className="w-[100%]"
                    />
                     <figcaption className="mt-[10px] pt-[10px]">
                        <h3 className="font-baskerville uppercase text-[20px] text-primary mb-[8px]">mUSKAN SARIN</h3>
                        <span className="text-[#AA8A80] text-[14px]">Director</span>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
