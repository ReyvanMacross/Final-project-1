import * as React from "react";

function Footer(props) {
  return (
    <div className="flex-col fill-black overflow-hidden relative flex min-h-[549px] items-center px-5">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/de10ba5c-2566-44f9-b0c1-4064d5487d50?"
        className="absolute h-full w-full object-cover object-center inset-0"
      />
      <div className="relative flex w-full max-w-[1638px] flex-col items-center mt-12 mb-16 max-md:max-w-full max-md:my-10">
        <div className="self-stretch flex items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
          <div className="flex grow basis-[0%] flex-col items-start max-md:max-w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0044baea-1a03-40e9-816f-90154e9cd58d?"
              className="aspect-[1.36] object-contain object-center w-[135px] overflow-hidden max-w-full"
            />
            <div className="text-white text-3xl font-light leading-9 self-stretch mt-9 max-md:max-w-full">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard.printing
              and typesetting industry. Lorem Ipsum has been the industry's
              standard
            </div>
          </div>
          <div className="flex basis-[0%] flex-col mt-4 self-start">
            <div className="text-white text-xl  font-light leading-10 self-stretch whitespace-nowrap">
              Tentang kami
            </div>
            <div className="text-white text-xl  font-light leading-10 self-stretch whitespace-nowrap mt-9">
              Blog
            </div>
            <div className="text-white text-xl  font-light leading-10 self-stretch whitespace-nowrap mt-10">
              Layanan
            </div>
            <div className="text-white text-xl  font-light leading-10 whitespace-nowrap  mt-8 self-start max-md:ml-2.5">
              Karir
            </div>
            <div className="text-white  text-xl font-light leading-10 self-stretch whitespace-nowrap mt-8">
              Pusat Media
            </div>
          </div>
          <div className="flex grow basis-[0%] flex-col items-stretch mt-5 self-start max-md:max-w-full">
            <div className="text-white text-4xl font-medium leading-10 whitespace-nowrap ml-4 self-start max-md:ml-2.5">
              Download
            </div>
            <div className="flex p-5 gap-2.5 mt-3.5 items-start max-md:max-w-full max-md:flex-wrap">
              <img
                loading="lazy"
                srcSet="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/1200px-Google_Play_Store_badge_EN.svg.png"
                className="aspect-[2.78] object-contain object-center w-[250px] overflow-hidden"
              />
              <img
                loading="lazy"
                srcSet="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/800px-Download_on_the_App_Store_Badge.svg.png"
                className="aspect-[2.6] object-contain object-center w-[242px] overflow-hidden"
              />
            </div>
            <div className="flex w-[295px] max-w-full flex-col items-stretch ml-4 mt-5 self-start max-md:ml-2.5">
              <div className="text-white text-4xl font-medium leading-10 whitespace-nowrap">
                Social media
              </div>
              <div className="flex justify-between gap-5 mt-7 pr-3 items-start max-md:justify-center">
                <img
                  loading="lazy"
                  srcSet="https://cdn2.downdetector.com/static/uploads/logo/FB-f-Logo__blue_512.png"
                  className="aspect-[0.9] object-contain object-center w-[65px] overflow-hidden shrink-0 max-w-full"
                />
                <img
                  loading="lazy"
                  srcSet="https://static.vecteezy.com/system/resources/thumbnails/023/986/660/small_2x/pinterest-logo-pinterest-logo-transparent-pinterest-icon-transparent-free-free-png.png"
                  className="aspect-[1.18] object-contain object-center w-[79px] overflow-hidden self-center shrink-0 max-w-full my-auto"
                />
                <img
                  loading="lazy"
                  srcSet="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/2048px-Instagram_logo_2022.svg.png"
                  className="aspect-[1.13] object-contain object-center w-[85px] overflow-hidden self-stretch shrink-0 max-w-full"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-neutral-300 self-stretch shrink-0 h-1.5 mt-9 max-md:max-w-full" />
        <div className="text-white text-4xl leading-10 ml-0 max-w-[1065px] mt-12 max-md:max-w-full max-md:mt-10">
          Copyright © . All Rights Reserved
        </div>
      </div>
    </div>
  );
}

export default Footer;
