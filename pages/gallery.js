import HeaderBanner from '../src/components/common/headerBanner';
import Layout from '../src/components/layout';
import serviceBanner from '../src/images/serviceBanner.jpg';
import GalleryRecord from '../src/components/gallery/index';
import { gallery, minifyRecords } from './api/utils/airtable';

export default function GalleryPage({ initialDataItems }) {
  // const { dataItems, setDataItems} = useContext(DataItemsContext);
  // useEffect((() => {
  //   setDataItems(initialDataItems)
  // }),[])

  console.log(initialDataItems);
  return (
    <Layout homePage={false}>
      <main className="">
        <HeaderBanner title="Our Gallery" pageBanner={serviceBanner} />
          <div className="w-full md:w-8/12 mx-auto py-32">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-auto place-items-center items-start gap-8">
              {initialDataItems &&
                initialDataItems.map((dataItem) => (
                  <div
                    key={dataItem.id}
                    className="relative w-full overflow-hidden shadow-md hover:shadow-lg"
                  >
                    <GalleryRecord dataItem={dataItem} />
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
    const records = await gallery.select({}).firstPage();
    return {
      props: {
        initialDataItems: minifyRecords(records),
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
