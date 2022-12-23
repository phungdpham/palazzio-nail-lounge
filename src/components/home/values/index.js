import salonDb from '../../../constant/db';

function Value() {
  return (
    <div className=" py-32">
      <div className="w-8/12 lg:w-10/12 xl:w-8/12 mx-auto">
        <div className="text-center text-white  mb-6">
          <p className="text-4xl font-bold mb-2">Our Value</p>
          <p className="">
            We are committed to providing our valued customers with the best
            quality services and relaxing every visit
          </p>
        </div>
        <div className="text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-8">
          {salonDb.values.map((value) => (
            <div key={value.title} className=" border border-transparent d hover:shadow-lg p-4 rounded-md transition-all">
              <p className="text-xl font-bold mt-3 mb-2 t">
                {value.title}
              </p>
              <p className="text-white">
                {value.content}
              </p>
            </div>
          ))}
         
        </div>
      </div>
    </div>
  );
}

export default Value;
