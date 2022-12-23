
export default function GalleryRecord({ dataItem }) {
  // console.log(dataItem);
  return (
    <div className="relative mb-8">
      <img src={dataItem.fields.image[0].url}
        className="w-11/12 md:w-80 md:h-80 mx-auto"
      />
      {/* <div className="bg-gradient-to-t from-black via-transparent inset-0 absolute rounded"></div> */}
      {/* <div className="absolute bottom-2 left-3">
        <p className="text-white text-lg font-semibold">
          {dataItem.fields.name}
        </p>
 
      </div> */}
    </div>
  );
}

// export async function getServerSideProps(context) {
//   let records = await gallery.select({}).firstPage();
//   return {
//     props: {
//       initialGallery: minifyRecords(records)
//     }
//   }
// try {
//   const records = await gallery.select({}).firstPage();
//   return {
//     props: {
//       initialRecords: minifyRecords(records),
//     },
//   };
// } catch (error) {
//   console.log(error);
//   return {
//     props: {
//       err: 'Something went wrong',
//     },
//   };
// }
// }
