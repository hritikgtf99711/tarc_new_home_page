import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const images = [
      "./assets/images/home/image_banner_1.jpg",
      "./assets/images/home/image_banner_2.jpg",
      "./assets/images/home/image_banner_3.jpg",
      "./assets/images/home/image_banner_4.jpg",
      "./assets/images/home/image_banner_5.jpg",
      "./assets/images/home/image_banner6.jpg",
      "./assets/images/home/image_banner_8.jpg",
      "./assets/images/home/image_banner_1.jpg",
      "./assets/images/home/image_banner_2.jpg",
      "./assets/images/home/image_banner_3.jpg",
      "./assets/images/home/image_banner_4.jpg",
      "./assets/images/home/image_banner_5.jpg",
      "./assets/images/home/image_banner6.jpg",
      "./assets/images/home/image_banner_8.jpg",
      "./assets/images/home/image_banner_1.jpg",
      "./assets/images/home/image_banner_2.jpg",
      "./assets/images/home/image_banner_3.jpg",
      "./assets/images/home/image_banner_4.jpg",
      "./assets/images/home/image_banner_5.jpg",
      "./assets/images/home/image_banner6.jpg",
      "./assets/images/home/image_banner_8.jpg",
      "./assets/images/home/image_banner_1.jpg",
      "./assets/images/home/image_banner_2.jpg",
      "./assets/images/home/image_banner_3.jpg",
      "./assets/images/home/image_banner_4.jpg",
      "./assets/images/home/image_banner_5.jpg",
      "./assets/images/home/image_banner6.jpg",
      "./assets/images/home/image_banner_8.jpg",
];


export default function Slider() {
  const trackRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const track = trackRef.current;
    const imageWidth = 300;
    const totalImages = images.length;
    let totalWidth = imageWidth * totalImages;

    const appendImages = () => {
      images.forEach((src) => {
        const img = document.createElement("img");
        img.src = src;
        img.classList.add("banner-image");
        track.appendChild(img);
      });
    };
    appendImages();

  
    const loopTl = gsap.timeline({ repeat: -1 });

    loopTl.to(track, {
      x: "-=30%",
      duration: 250,
      scale: 1,
      ease: "none",
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
      },
      onComplete: function () {
        appendImages();
        const newTotalImages = track.querySelectorAll("img").length;
        totalWidth = imageWidth * newTotalImages - 600;
        this.modifiers.x = gsap.utils.unitize((x) => parseFloat(x) % totalWidth);
      },
    });
 
    const onRaf = () => {
      cardRefs.current.forEach((card) => {
        const img = card.querySelector("img");
        const cardX = card.getBoundingClientRect().left;
        const winW = window.innerWidth;
        const offset = (cardX - winW / 2) / winW;
        gsap.to(img, {
          x: -offset * 300,
          scale: 1.8,
          duration: 0.1,
          ease: "ease.in",
        });
      });
      requestAnimationFrame(onRaf);
    };
    requestAnimationFrame(onRaf);
  }, []);

  return (
    <div className=" slider-wrapper relative z-[2] ">
      <div className="slider-track" ref={trackRef}>
        {images.concat(images, images).map((src, i) => (
          <div
            className="slider-card"
            key={i}
            ref={(el) => (cardRefs.current[i] = el)}
          >
            <img src={src} alt={`img-${i}`} />
          </div>
        ))}
      </div>
    </div>
  );
}