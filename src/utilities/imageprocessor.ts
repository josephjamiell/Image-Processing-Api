import fs from "fs";
import {promises as fsPromises} from "fs";
import path from "path";
import sharp from "sharp";

const originalImagesDir = "./images/";
const cachedImagesDir = "./images/cached/";

const resizeImage = async (image: string, height: number, width: number): Promise<string> => {

    const newImage = `${cachedImagesDir}${image}_${height}x${width}.jpg`;
    const sourceImage  = `${originalImagesDir}/${image}.jpg`;

    return new Promise((resolve, reject)=> {
        try{

            if(!fs.existsSync(sourceImage)){
                reject(`Requested Image (${image}.jpg) does not exist on the server.`);
                return;
            }

            if(fs.existsSync(newImage)){
                resolve(path.resolve(newImage));
                return;
            }

            sharp(sourceImage)
            .resize(width, height)
            .jpeg({ mozjpeg: true })
            .toBuffer()
            .then( async (data) => {
                if(!fs.existsSync(cachedImagesDir)){
                    fs.mkdirSync(cachedImagesDir);
                };
                await fsPromises.writeFile(newImage, data);
                resolve(path.resolve(newImage));
            })
            .catch( err => {
                throw new Error(err.message);
            });
        }
        catch(err) {
            throw new Error(err.message);
            reject(err);
        }
    });
};



export = {
    resizeImage,
}