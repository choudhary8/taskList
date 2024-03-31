const cloudinary = require('cloudinary').v2;
const fs = require("fs");
require('dotenv').config()


cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET 
  });

  
const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null;
        // Upload the file on Cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        });
        // File has been uploaded successfully
        //console.log("file is uploaded on cloudinary ", response.url);
        fs.unlinkSync(localFilePath);
        return response;
    } catch (error) {
        console.log(error);
        fs.unlinkSync(localFilePath); // Remove the locally saved temporary file as the upload operation got failed
        return null;
    }
};

// const deleteOnCloudinary=async(l)

module.exports = uploadOnCloudinary 
