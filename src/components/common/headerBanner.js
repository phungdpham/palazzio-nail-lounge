import Image from 'next/image';

function HeaderBanner({ title, content, pageBanner }) {
  return (
    <div className="relative">
      <Image src={pageBanner} layout="fill" objectFit="cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 bg-zinc-900/30"></div>
  
      <div className="relative mx-auto py-24 px-6 w-full md:w-3/4 ">
        <h2 className="px-3 mb-6 text-white text-3xl  font-semibold text-center md:text-4xl ">
          {title}
        </h2>
        <p className="mb-6 text-lg tracking-widest text-center text-white ">
          {content}
       </p>
      </div>
    </div>
  );
}

export default HeaderBanner;
