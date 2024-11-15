import {v2 as cloudinary} from "cloudinary";
import dotenv from "dotenv";
dotenv.config();

cloudinary.config({
    // cloud_name:process.env.CLOUD_NAME,
    // api_key:process.env.API_KEY,
    // api_secret:process.env.API_SECRET
    cloud_name:dpdf2mecd,
    api_key:971631563821326,
    api_secret:H7ucTKhOdWk_RbZfd4qxFruXGf0
});
export default cloudinary;