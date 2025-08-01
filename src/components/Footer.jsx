import React, { useRef, useEffect } from "react";
import Heading from "./Heading";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef(null);
  const topSectionRef = useRef(null);
  const middleSectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Top section: Logo
      gsap.from(topSectionRef.current.querySelector("img"), {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: topSectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      // Top section: Contact info and social icons
      gsap.from(topSectionRef.current.querySelectorAll("ul li"), {
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: topSectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      // Middle section: Headings
      gsap.from(middleSectionRef.current.querySelectorAll(".heading"), {
        opacity: 0,
        x: -50,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: middleSectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      // Middle section: Links
      gsap.from(middleSectionRef.current.querySelectorAll("ul li"), {
        opacity: 0,
        x: 30,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: middleSectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer className="relative py_section !pb-0 z-[2]" ref={footerRef}>
      <div className="">
        <img
          src="./assets/images/footer_bg.jpg"
          className="absolute top-0 left-0 w-[100%] object-cover h-[100%]"
          alt="footer bg"
        />
        <div className="relative">
          <div
            className="lg:py-[90px] py-[50px] border-t-[0.7px] border-b-[0.7px] border-[#a78a8061]"
            ref={topSectionRef}
          >
            <div className="container">
              <div className="grid grid-cols-2 lg:grid-cols-12">
                <div className="col-span-3 lg:me-auto">
                  <img
                    src="./assets/images/tarc_logo_1.png"
                    alt=""
                    width={"180"}
                    className="lg:w-[130px] w-[130px] lg:m-[auto] mx-[auto] mb-[30px]"
                  />
                </div>
                <div className="col-span-3 lg:m-auto">
                  <ul className="">
                    <li className="font-[300] lg:mb-0 mb-[35px]">
                      <a
                        href=""
                        className="text-[16px] flex place-items-start leading-[30px] gap-[20px]"
                      >
                        <img
                          width={"17"}
                          src="./assets/icons/icon_location.svg"
                          alt=""
                          className="mt-[6px]"
                        />
                        <span>
                          2nd Floor, C-3, Qutab{" "}
                          <span className="lg:block"></span>
                          Institutional Area Road, Block C,
                          <span className="lg:block"></span>
                          Katwaria Sarai, Delhi 110016
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-span-3 lg:m-auto">
                  <ul className="">
                    <li className="text-[16px] lg:mb-[18px] mb-[35px]">
                      <a
                        href=""
                        className="flex font-[300] place-items-center leading-[30px] gap-[20px]"
                      >
                        <img
                          width={"17"}
                          src="./assets/icons/icon_phone.svg"
                          alt=""
                        />
                        (+91) 9999 8888 44
                      </a>
                    </li>
                    <li className="mb-[16px] text-[16px] lg:mb-[20px]">
                      <a
                        href=""
                        className="flex font-[300] place-items-center leading-[30px] gap-[20px]"
                      >
                        <img
                          width={"17"}
                          src="./assets/icons/icon_email.svg"
                          alt=""
                        />
                        info@tarc.com
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-span-3 lg:ml-auto">
                  <ul className="flex justify-center gap-[18px] lg:m-0 mt-[35px]">
                    <li>
                      <a href="">
                        <img
                          width={"17"}
                          src="./assets/icons/icon_facebook.svg"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <img
                          width={"17"}
                          src="./assets/icons/icon_linkedin.svg"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <img
                          width={"17"}
                          src="./assets/icons/icon_twitter.svg"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <img
                          width={"17"}
                          src="./assets/icons/icon_youtube.svg"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <img
                          width={"17"}
                          src="./assets/icons/icon_insta.svg"
                          alt=""
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="relative" ref={middleSectionRef}>
            <div className="lg:py-[90px] py-[50px]">
              <div className="container">
                <div className="grid grid-cols-2 lg:grid-cols-12">
                  <div className="col-span-3 lg:me-auto">
                    <Heading
                      className="lg:mb-[20px] lg:text-[auto] !text-[20px] mb-[4px] heading"
                      Heading={"INVERTER"}
                    />
                    <ul className="lg:mb-0 mb-[25px]">
                      <li className="font-[300] lg:mb-[12px]">
                        <a
                          href=""
                          className="text-[16px] leading-[30px] gap-[20px]"
                        >
                          Corporate Governance
                        </a>
                      </li>
                      <li className="font-[300]">
                        <a
                          href=""
                          className="text-[16px] leading-[30px] gap-[20px]"
                        >
                          Board of Directors
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-span-3 lg:mx-auto">
                    <Heading
                      className="lg:mb-[20px] lg:text-[auto] !text-[20px] mb-[4px] heading"
                      Heading={"MEDIA"}
                    />
                    <ul className="lg:mb-0 mb-[25px]">
                      <li className="font-[300] lg:mb-[12px]">
                        <a
                          href=""
                          className="text-[16px] leading-[30px] gap-[20px]"
                        >
                          Press Releases
                        </a>
                      </li>
                      <li className="font-[300]">
                        <a
                          href=""
                          className="text-[16px] leading-[30px] gap-[20px]"
                        >
                          Blogs
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-span-3 lg:mx-auto">
                    <Heading
                      className="lg:mb-[20px] lg:text-[auto] !text-[20px] mb-[4px] heading"
                      Heading={"CAREER"}
                    />
                    <ul className="lg:mb-0 mb-[25px]">
                      <li className="font-[300] lg:mb-[12px]">
                        <a
                          href=""
                          className="text-[16px] leading-[30px] gap-[20px]"
                        >
                          Join our team
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-span-3 lg:ml-auto">
                    <Heading
                      className="lg:mb-[20px] lg:text-[auto] !text-[20px] mb-[4px] heading"
                      Heading={"OTHER LINKS"}
                    />
                    <ul className="">
                      <li className="font-[300] lg:mb-[12px]">
                        <a
                          href="https://tarc.in/tarc_nri.php"
                          className="text-[16px] leading-[30px] gap-[20px]"
                        >
                          NRI Support
                        </a>
                      </li>
                      <li className="font-[300] lg:mb-[12px]">
                        <a
                          href="https://tarc.in/tarc_nri.php"
                          className="text-[16px] leading-[30px] gap-[20px]"
                        >
                          Newsletter
                        </a>
                      </li>
                      <li className="font-[300]">
                        <a
                          href="https://tarc.in/tarc_nri.php"
                          className="text-[16px] leading-[30px] gap-[20px]"
                        >
                          POSH Policy
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-[#9f7f75cf] abolute bottom-0 left-0 w-[100%] lg:py-[10px] py-[20px] relative"
      >
        <div className="container">
          <ul className="lg:flex text-[13px] text-white justify-between">
            <li className="lg:mb-0 font-[300] mb-[10px]">
              <a href="">Privacy Policy | Disclaimer</a>
            </li>
            <li className="font-[300] ">
              Copyright <a href="">@ TARC</a> Limited | 2025 | Curated by:
               <a href="https://www.gtftechnologies.com/" target="_blank">
                GTF Technologies
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}