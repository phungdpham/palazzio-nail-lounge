export default function Pricing({ pricingItem }) {
  // const categoryList = Array.from(new Set(dataItem.fields.category))
  // console.log(categoryList)
  return (
    <div className="my-4">
      <div className="w-full flex text-white text-base content-end gap-2 justify-between capitalize mb-1 ">
        <div className="font-bold relative min-w-max ">{pricingItem.fields.name}</div>
        <div className="w-full border-b-2 border-dotted h-[18px]"></div>
        <div className="color-primary min-w-max">{pricingItem.fields.price}</div>
      </div>
      <div className="align-justify">{pricingItem.fields.description}</div>
    </div>
  );
}
