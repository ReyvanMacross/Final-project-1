import React from "react";

const InformationKitty = () => {
  return (
    <div className="px-10 py-10">
      <section className="flex justify-between items-center gap-5 max-md:flex-wrap">
        <div className="text-2xl font-bold max-md:text-4xl">Synopsis</div>
        <div className="bg-stone-300 w-[1350px] max-w-full h-3 my-auto" />
      </section>

      <div className="text-xl mt-7 max-md:text-4xl">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took.
        <br />
        <br />
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took.
      </div>

      <section className="flex justify-between items-center gap-4 mt-11 max-md:flex-wrap max-md:mt-10">
        <div className="text-2xl font-bold max-md:text-4xl">Movie Info</div>
        <div className="bg-stone-300 w-[1327px] max-w-full h-3 my-auto" />
      </section>

      <div className="text-xl mt-10 max-md:text-4xl max-md:mt-10">
        <InfoItem title="Release date" content="January 5, 1998" />
        <InfoItem title="Director" content="John Doe" />
        <InfoItem title="Featured song" content="Pegasus fantasi" />
        <InfoItem title="Budget" content="200 million USD" />
      </div>
    </div>
  );
};

const InfoItem = ({ title, content }) => (
  <>
    <span className="font-medium">{title}</span>
    <span>: {content} <br /></span>
  </>
);

export default InformationKitty;
