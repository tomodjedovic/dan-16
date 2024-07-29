import { config } from "dotenv";
import createApp from "./app/app";
import conectDatabase from "./services/database.servise";
config();
const app = createApp();

const PORT = Number(process.env.PORT) || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port 3000` );
  conectDatabase();
});
