

function GoogleMap() {
  return (
    <div className="">
      <div className="w-full mx-auto">
        {/* <div className="text-center text-gray-600 dark:text-gray-100 mb-16">
          <p className="text-4xl font-bold capitalize mb-3">
            We care for your pedicure safety
          </p>
            You will be safe with Contégo Pedicure Care · 100%  Disposible
          <p className="text-gray-600 dark:text-gray-100">
          </p>
          
          
        </div> */}
        <div className="flex flex-wrap justify-center">
       
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13851.319862498505!2d-95.5255822!3d29.7825578!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2bb5dabc7836bc3e!2sPalazzio%20Nail%20Lounge!5e0!3m2!1sen!2sus!4v1669960249227!5m2!1sen!2sus"
            width="100%"
            height="400px"
            frameBorder="0"
            allowFullScreen
            title="salon map"
          ></iframe>
          
        </div>
      </div>
    </div>
  );
}

export default GoogleMap;
