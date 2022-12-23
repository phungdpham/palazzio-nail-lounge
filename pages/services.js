import HeaderBanner from '../src/components/common/headerBanner';
import Layout from '../src/components/layout';
import Pricing from '../src/components/pricing';
import serviceBanner from '../src/images/serviceBanner.jpg';
import { pricing, services, minifyRecords } from './api/utils/airtable';

export default function Services({ initialDataServices, initialDataPricing }) {
  console.log(initialDataServices);
  console.log(initialDataPricing);

  return (
    <Layout>
      <main>
        <HeaderBanner title="Our Services" pageBanner={serviceBanner} />
        <div className=" text-white  w-full md:w-10/12 lg:w-8/12 mx-auto py-12 px-4">
          <p className='text-base md:text-lg'>
            With the full of beauty care services and new colors for you to
            choose from, you are ensured to enjoy the best services in our
            effort of doing a great job. Let’s take a look at our price list
            below!! Our nail salon is always committed to bringing you a
            reasonable price!
          </p>
          <div className="mt-8">
            {initialDataServices.map((serviceItem) => (
                <div
                  key={serviceItem.id}
                  className="py-6"
                >
                  <div className={`flex flex-col gap-4 ${ serviceItem.fields.order % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row" }`}>
                    <img
                      src={serviceItem.fields.image[0].url}
                      className="mx-auto border-primary border-4  rounded-full w-[250px] h-[250px]"
                    />

                    <div className="w-full divide-y-[1px] divide-primary ">
                      <h2 className="font-bold text-xl color-primary uppercase">
                        {serviceItem.fields.name}
                      </h2>
                      <div>
                        {initialDataPricing &&
                          initialDataPricing
                            .filter(
                              (categories) =>
                                categories.fields.category ===
                                serviceItem.fields.name
                            )
                            .map((pricingItem) => (
                              <Pricing
                                key={pricingItem.id}
                                pricingItem={pricingItem}
                              />
                            ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
           
          </div>
        </div>
      </main>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  // let records = await gallery.select({}).firstPage();
  try {
    const serviceRecords = await services.select({sort:[{field:"order", direction: "asc"}]}).firstPage();
    const pricingRecords = await pricing.select({sort: [{field: "order", direction: "asc"}]}).firstPage();

    return {
      props: {
        initialDataServices: minifyRecords(serviceRecords),
        initialDataPricing: minifyRecords(pricingRecords),
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        err: 'Something went wrong',
      },
    };
  }
}
