import { PrismaClient } from '@prisma/client'
import fs from "fs"
const prisma = new PrismaClient()
import hashids from '../../../../lib/hashid'
export default async (req, res) => {
    const {
      query: { id, filename },
    } = req
    const pp = hashids.decode(id)[0]
    const file = await prisma.file.findOne({
  	where: { id: pp }
    })

    const stat = fs.statSync(file.path)
    const fileSize = stat.size
    const range = req.headers.range
    console.log("hi")
    if (range) {
       const parts = range.replace(/bytes=/, "").split("-")
       const start = parseInt(parts[0], 10)
       const end = parts[1]
         ? parseInt(parts[1], 10)
         : fileSize-1
       const chunksize = (end-start)+1
       const file1 = fs.createReadStream(file.path, {start, end})
       const head = {
         'Content-Range': `bytes ${start}-${end}/${fileSize}`,
         'Accept-Ranges': 'bytes',
         'Content-Length': chunksize,
         'Content-Type': file.type,
       }
       res.writeHead(206, head);
       file1.pipe(res);
     } else {
       const head = {
         'Content-Length': fileSize,
         'Content-Type': file.type,
       }
       res.writeHead(200, head)
       fs.createReadStream(file.path).pipe(res)
     }
}
