import Image from 'next/image';
import Link from '../../../constant/link';
import heroBanner from '../../../images/homeBanner.jpg';
import salonDb from "../../../constant/db";


function Banner() {
  return (
    <div className="relative h-screen z-0">
      <Image src={heroBanner} layout="fill" objectFit="cover" />
      <div className="absolute inset-0  bg-black/70"></div>
      <div className="absolute inset-0 h-ful w-full">
        <div className="flex min-h-full w-full items-center justify-center">
          <div className="space-y-6">
            <div className="text-white text-center hero-header">
              <p className="text-2xl lg:text-4xl capitalize font-bold mb-4 font-comf">
                {salonDb.banner.bannerTitle}
              </p>
              <p className="text-lg w-11/12 mx-auto md:w-10/12 lg:w-8/12">
                {salonDb.banner.bannerContent}
              </p>
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-5">
              <h3 className="rounded-md py-2 lg:py-2.5 px-4 lg:px-6 bg-transparent border text-lg text-white capitalize hover:bg-amber-500">
                <a href="/about">about us</a>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
