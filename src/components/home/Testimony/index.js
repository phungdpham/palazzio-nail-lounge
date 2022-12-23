import YouTube from 'react-youtube';

function TestimonyVideo() {
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <div className="bg-gradient-to-r from-black  py-32">
      <div className="w-11/12 lg:w-10/12 xl:w-8/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        <div className="text-center text-white   mb-16 justify-start">
          <p className="text-4xl font-bold capitalize mb-3">
            What Our Client Says
          </p>
          <p className='text-base'>
            Customers’ satisfaction is always on top of our priorities. Our nail
            salon sets the highest standards in pedicures, manicures, products,
            sanitation, and five-star client care.
          </p>
        </div>
        <div className="mx-auto relative w-full">
          {/* <Image src={contegoBanner} className="items=center" /> */}
          <YouTube videoId="zq0UuEJJPHU" opts={opts} className="" />
        </div>
      </div>
    </div>
  );
}

export default TestimonyVideo;
