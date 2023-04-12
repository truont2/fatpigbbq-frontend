import React from "react";

import grubhub from "../../assets/logo_grubhub.avif";
import uber from '../../assets/uber.jpg'
import doordash from '../../assets/doordash-860x452.png'

const SectionTwo = ({ images }) => {
  return (
    <div className="max-w-[1400px] h-[400px] bg-[#db6a6a] mx-auto my-16 pt-16 lg:mb-[20%] md:mb-[35%] px-6 grid lg:grid-cols-3 gap-4">
      <div className="lg:top-20 relative lg:col-span-1 col-span-2 text-white">
        <h3 className="text-3xl font-bold">
          Order Online for pickup or for delivery{" "}
        </h3>
        <p className="text-lg pt-4">Choose to have your food delivered through these partnered companies!</p>
      </div>
      <div className="grid grid-cols-2 col-span-2 gap-2">
        <a href='https://www.grubhub.com/restaurant/fat-pig-bbq-7533-olympic-view-dr-edmonds/970085?utm_source=google&utm_medium=cpc&utm_campaign=GH+PMax+ACQ+Test+9/20-10/31+INTERESTS+Final&utm_term=&utm_content=acct_id-4611562977:camp_id-18383322228:adgroup_id-::creative_id-:ext_id-:matchtype_id-:network-x:device-c:loc_interest-9033269:loc_physical-9033260&gclid=CjwKCAjwitShBhA6EiwAq3RqAyAqcmERfXPXkgKkLZTJgV3MIyULJORsfxrwG1Q67zBu5k_zt85bIRoClu4QAvD_BwE&gclsrc=aw.ds'>
          <img
            className="object-cover w-full h-full"
            src={grubhub}
            alt="grubhub"
          />
        </a>
        <a href='https://www.grubhub.com/restaurant/fat-pig-bbq-7533-olympic-view-dr-edmonds/970085?utm_source=google&utm_medium=cpc&utm_campaign=GH+PMax+ACQ+Test+9/20-10/31+INTERESTS+Final&utm_term=&utm_content=acct_id-4611562977:camp_id-18383322228:adgroup_id-::creative_id-:ext_id-:matchtype_id-:network-x:device-c:loc_interest-9033269:loc_physical-9033260&gclid=CjwKCAjwitShBhA6EiwAq3RqAyAqcmERfXPXkgKkLZTJgV3MIyULJORsfxrwG1Q67zBu5k_zt85bIRoClu4QAvD_BwE&gclsrc=aw.ds'>
          <img
            className="object-cover w-full h-full"
            src={uber}
            alt="grubhub"
          />
        </a>
        <a className="col-span-2" href='https://www.grubhub.com/restaurant/fat-pig-bbq-7533-olympic-view-dr-edmonds/970085?utm_source=google&utm_medium=cpc&utm_campaign=GH+PMax+ACQ+Test+9/20-10/31+INTERESTS+Final&utm_term=&utm_content=acct_id-4611562977:camp_id-18383322228:adgroup_id-::creative_id-:ext_id-:matchtype_id-:network-x:device-c:loc_interest-9033269:loc_physical-9033260&gclid=CjwKCAjwitShBhA6EiwAq3RqAyAqcmERfXPXkgKkLZTJgV3MIyULJORsfxrwG1Q67zBu5k_zt85bIRoClu4QAvD_BwE&gclsrc=aw.ds'>
          <img
            className="object-contain w-full w-4/6 m-auto"
            src={doordash}
            alt="uber"
          />
        </a>
      </div>
    </div>
  );
};

export default SectionTwo;
