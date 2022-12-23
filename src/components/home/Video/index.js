

function Video() {
  return (
    <div className="bg-slate-50 dark:bg-gray-800  py-32">
      <div className="w-11/12 lg:w-10/12 xl:w-8/12 mx-auto">
        <div className="text-center text-gray-600 dark:text-gray-100 mb-16">
          <p className="text-4xl font-bold capitalize mb-3">
            We care for your pedicure safety
          </p>
            You will be safe with Contégo Pedicure Care · 100%  Disposible
          <p className="text-gray-600 dark:text-gray-100">
          </p>
          
          
        </div>
        <div className="flex flex-wrap justify-center">
       
          <iframe className='w-[1280px] h-[250px] md:h-[420px]'
            src={`https://player.vimeo.com/video/477376080?autoplay=1&loop=1&title=0&byline=0&portrait=0`}
            frameborder="0"
            allow="allowFullScreen; picture-in-picture"
            allowfullscreen
          ></iframe>
          <p className="text-gray-600 mt-8 font-bold text-xl text-center">
            View Video to learn more about Contégo Pedicure Care
          </p>
        </div>
      </div>
    </div>
  );
}

export default Video;
