import mongoose from "mongoose";
import app from "./app";
import config from "./config";
async function main() {
  try {
    await mongoose.connect(config.databse_url as string);
    console.log(`databse connected successfuly`);
    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (error) {
    console.log(`database not connected ${error}`);
  }
}

main();
