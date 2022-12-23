import Image from 'next/image';
import contegoBanner from '../../images/contegoBanner.png';
import YouTube from 'react-youtube';
import {FaRegHandPointRight} from "react-icons/fa"

function About() {
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="my-12">
      <div className="w-full lg:w-10/12 xl:w-8/12 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mx-auto text-left text-gray-600  mb-6">
          <div className="mx-6 text-white ">
            {/* <p className="my-6">
              Located at a beautiful place in Houston, TX 77024, Our nail salon
              offers you the ultimate in pampering and boosting your natural
              beauty with our whole-hearted, creative & professional staff.
            </p> */}
            <p className="my-6">
              At <span className="text-amber-400">Palazzio Nail Lounge</span>,
              we are committed to providing our valued customers with the best
              quality services and relaxing every visit. With many years of
              experience in the nail industry, we are proud to provide customers
              with high-end services and indulge your beauty from head to toe.
              Customers’ satisfaction is always on top of our priorities. Our
              nail salon sets the highest standards in pedicures, manicures,
              products, sanitation, and five-star client care.
            </p>
            <p className="my-6">
              Especially, Customers’ cleanness and safety are also one of the
              first priorities at Palazzio Nail Lounge. Our implements are
              medically sterilized and disinfected after each use. Buffers and
              files are used only once and then discarded. All pedicure
              procedures are done with liner protection. And above all, staff
              are trained to follow a proper sanitization protocol that puts the
              client’s hygiene as the number one priority.
            </p>
            {/* <p className="my-6">
              Let your worries behind and pamper yourself at Palazzio Nail
              Lounge!
            </p> */}
          </div>
          <div className="mx-auto relative w-full">
            {/* <Image src={contegoBanner} className="items=center" /> */}
            <YouTube videoId="W9Ls3YQJEXQ" opts={opts} className="" />
          </div>
          <div className="mx-auto">
            <Image src={contegoBanner} className="" />
          </div>
          <div className="mx-6 text-white">
            <p className="">
              At our salon, we offer 𝟭𝟬𝟬% 𝗱𝗶𝘀𝗽𝗼𝘀𝗮𝗯𝗹𝗲 𝗝𝗲𝘁-𝗟𝗶𝗻𝗲𝗿𝘀™️ pedicure
              chairs powered by CONTEGO SPA INC. Say 𝗡𝗢 𝘁𝗼 𝗰𝗿𝗼𝘀𝘀 𝗰𝗼𝗻𝘁𝗮𝗺𝗶𝗻𝗮𝘁𝗶𝗼𝗻
              (magnetic jet) and YES to clean & happy feet (Jet-Liners™️).
              Jet-Liners™️ are the next generation of pedicure spa jets! Our
              technology can protect you from foot infections caused by using
              magnetic jets. If magnetic jets are not cleaned properly,
              cross-contamination of bacteria from the previous client can still
              exist in your foot bath. With our patented jet-liner™️ technology,
              CONTEGO stands alone as the only comprehensive solution.
            </p>
            <p className="my-6">
              Let your worries behind and pamper yourself at Palazzio Nail
              Lounge!
            </p>
            <div className="">
              <a
                href="https://www.youtube.com/watch?v=sVPywJg7IlY"
                target="_blank"
              >
                <button className="flex gap-2 items-center rounded-lg border-white py-2 lg:py-2.5 px-4 lg:px-6 bg-transparent  hover:font-bold underline-offset-4">
                  <span><FaRegHandPointRight /></span>Learn About <span className='text-red-500'>Contégo 𝗝𝗲𝘁-𝗟𝗶𝗻𝗲𝗿𝘀™️</span>
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-10 xl:gap-16">
          <div className="hover:bg-white  p-4 rounded-md transition-all">
            <h2 className="text-xl font-bold mt-3 mb-2 text-amber-600  uppercase">
              Our Location
            </h2>
            <div className="border-b-2 border-amber-600 w-1/4"></div>

            <p className="text-gray-500 mt-2">
              9417 Katy Freeway, <br />
              Houstin, TX 77024
            </p>
            <p className="text-gray-500 mt-2">832-779-3378</p>
          </div>
          <div className="hover:bg-white  p-4 rounded-md transition-all">
            <h2 className="text-xl font-bold mt-3 mb-2 text-amber-600 uppercase">
              business hours
            </h2>
            <div className="border-b-2 border-amber-600 w-1/4"></div>
            <p className="text-gray-500 mt-2 capitalize">
              mon - fri: 9:30am - 7:30pm
            </p>
            <p className="text-gray-500 mt-2 capitalize">
              saturday: 9:30am - 7:30pm
            </p>
            <p className="text-gray-500 mt-2 capitalize">
              sunday: 9:30am - 7:30pm
            </p>
          </div>
          <div className="hover:bg-white  p-4 rounded-md transition-all">
            <h2 className="text-xl font-bold mt-3 mb-2 text-amber-600  uppercase">
              follow us
            </h2>
            <div className="border-b-2 border-amber-600 w-1/4"></div>

            <div className="flex gap-2 mt-4">
              <a
                href="https://www.facebook.com/Palazzionaillounge"
                target="_blank"
              >
                <Image src={Facebook} />
              </a>
              <a
                href="https://www.instagram.com/palazzio_nail_lounge_memorial"
                target="_blank"
              >
                <Image src={Instagram} />
              </a>
              <a
                href="https://www.google.com/search?aqs=chrome.0.69i59.793j0j4&ie=UTF-8&oq=Palazzio+Nail+Lounge+77024&q=Palazzio+Nail+Lounge+77024&rlz=1C1FKPE_viVN958VN958&sourceid=chrome"
                target="_blank"
              >
                <Image src={Google} className="h-1 w-1" />
              </a>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
// _onReady(event) {
//   event.target.pauseVideo();
// }
export default About;
