import { pricing, minifyRecords } from "./utils/airtable";


export default async (req, res) => {
  try {
    const records = await gallery.select({}).firstPage();
    const minifiedRecords = minifyRecords(records);
    res.status=200;
    res.json(minifiedRecords);
  } catch(error) {
    res.statusCode = 500;
    res.json({msg: "Something went wrong!"});
  }
};