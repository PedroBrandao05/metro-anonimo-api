/* eslint-disable @typescript-eslint/no-unused-vars */
import multer from "multer";
import path from "path";

const tempFolder = path.resolve(__dirname, '..', '..', '..', 'temp')

export default {
    directory: tempFolder,
    storage: multer.diskStorage({
        destination: tempFolder,
        filename(request, file, callback) {
            const hash = request.body.reportId
            const filename = `${hash}-${file.originalname}`
            return callback(null, filename)
        }
    })
}