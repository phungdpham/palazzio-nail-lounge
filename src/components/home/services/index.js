import Image from 'next/image';

import DipImg from '../../../images/services/dip.jpg';
import LashImg from '../../../images/services/eyelash2.jpg';
import GelImg from '../../../images/services/gel-polish.jpg';
import ManiImg from '../../../images/services/mani1.jpg';
import PediImg from '../../../images/services/pedi1.jpg';
import WaxImg from '../../../images/services/wax1.jpg';
import KidImg from '../../../images/services/kid.jpg';
import NailImg from '../../../images/services/nail1.jpg';

function Services() {
  const services = [
    { name: 'Nail Enhancements', serviceImg: NailImg },
    { name: 'Manicures', serviceImg: ManiImg },
    { name: 'Pedicures', serviceImg: PediImg },
    { name: 'Polish Change', serviceImg: GelImg },
    { name: 'Power Repair', serviceImg: DipImg },
    { name: 'Wax', serviceImg: WaxImg },
    { name: 'Eyelash Extensions', serviceImg: LashImg },
    { name: 'Little Princess', serviceImg: KidImg },
  ];
  return (
    <div className="py-32">
      <div className="w-11/12 md:w-10/12 lg:w-8/12 mx-auto">
        <div className="text-center text-white mb-12">
          <p className="text-4xl font-bold  mb-3">
            Our Services
          </p>
          <p className="">
            You are ensured to enjoy the best services in our effort of doing a
            great job.
          </p>
        </div>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-10">
            {services.map((item, index) => (
              <div key={index} className="relative overflow-hidden shadow-md hover:shadow-lg">
                <Image
                  src={item.serviceImg}
                  alt=""
                  className="rounded w-full h-full object-cover shadow"
                />
                <div className="bg-gradient-to-t from-zinc-900 via-transparent inset-0 absolute rounded"></div>
                <div className="absolute bottom-2 left-3">
                  <p className="text-white text-lg font-semibold">
                    {item.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 text-center">
          <a
            href="/services"
          >
            <button className="bg-transparent border-2 border-solid border-white p-3 text-white rounded-lg lg:py-2.5 px-4 lg:px-6 hover:bg-amber-400 bo  ">
              All Services
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Services;
