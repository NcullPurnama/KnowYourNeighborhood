import React from "react";

const Features = () => {
  return (
    <section className="grid md:grid-cols-3 mt-8 md:mt-14 gap-5 md:gap-10">
      <div className="flex flex-col text-center p-5 border rounded bg-gray-100 shadow-sm space-y-4">
        <h2 className="font-bold text-primary text-lg">
          Directory of local businesses
        </h2>
        <i className="fa-solid fa-warehouse text-5xl" />
        <p className="text-gray-500 text-[15px]">
        Residents may find it helpful to consult a list of nearby establishments, such as restaurants, shops, and service providers.
        </p>
      </div>

      <div className="flex flex-col text-center p-5 border rounded bg-gray-100 shadow-sm space-y-4">
        <h2 className="font-bold text-primary text-lg">
          New to the neighborhood
        </h2>
        <i className="fa-solid fa-people-group text-5xl" />
        <p className="text-gray-500 text-[15px]">
        A section providing resources and information to help local newcomers settle in could be useful. 
        Information on relevant ordinances, transportation, and educational facilities may be included.
        </p>
      </div>

      <div className="flex flex-col text-center p-5 border rounded bg-gray-100 shadow-sm space-y-4">
        <h2 className="font-bold text-primary text-lg">
          User-generated content
        </h2>
        <i className="fa-solid fa-user text-5xl" />
        <p className="text-gray-500 text-[15px]">
        On the website, allowing users to post their own images, films, 
        and reviews of nearby establishments and events helps foster a sense of community.
        </p>
      </div>
    </section>
  );
};

export default Features;
