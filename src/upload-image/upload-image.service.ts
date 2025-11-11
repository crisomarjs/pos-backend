import { Injectable } from '@nestjs/common';
import { v2 as cloudinary } from 'cloudinary'
import { ClodunaryResponse } from './upload-image.response';
const streamifier = require("streamifier")


@Injectable()
export class UploadImageService {
    uploadFile(file : Express.Multer.File): Promise<ClodunaryResponse> {
        return new Promise<ClodunaryResponse>((resolve, reject) => {
            const uploadStream = cloudinary.uploader.upload_stream(
                (error, result) => {
                    if (error) return reject(error)
                    resolve(result!)

                }
            )
            streamifier.createReadStream(file.buffer).pipe(uploadStream)
        })
    }
}
