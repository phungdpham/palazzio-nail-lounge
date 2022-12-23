const airtable = require('airtable');

// Authenticate
// airtable.configure({
//   apiKey: process.env.AIRTABLE_API_KEY
// });

// Authenticate and Initialize a base
const base = new airtable({ apiKey: `${process.env.AIRTABLE_API_KEY}` }).base(
  `${process.env.AIRTABLE_BASE_ID}`
);
// const base =  airtable.base(process.env.AIRTABLE_BASE_ID);

// Reference a table
const gallery = base(`${process.env.AIRTABLE_TABLE_GALLERY}`);
const pricing = base(`${process.env.AIRTABLE_TABLE_PRICING}`);
const services = base(`${process.env.AIRTABLE_TABLE_SERVICES}`);

// To get minified recoreds array
const minifyRecords = (records) => {
  return records.map((record) => getMinifiedRecord(record));
};

// To make record meaningful
const getMinifiedRecord = (record) => {
  // if (!record.fields.brought) {
  //   record.fields.brought = false;
  // }
  return {
    id: record.id,
    fields: record.fields,
  };
};

export { gallery, pricing, services, minifyRecords, getMinifiedRecord };
