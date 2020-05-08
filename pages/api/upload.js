import formidable from 'formidable';
import { PrismaClient } from '@prisma/client'
import * as mkdirp from 'mkdirp'


const prisma = new PrismaClient()



const uploadDir = './uploads'

mkdirp.sync(uploadDir)

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async (req, res) => {
  const form = new formidable({maxFileSize: 500 * 1024 * 1024});
  form.uploadDir = "./uploads";
  form.parse(req, async (err, fields, { file: data }) => {
	  console.log(err);
		const {name, path, type, size} = data
		const mtime = "12"
		console.log(data);
		const file = await prisma.file.create({data: {name, path, type, size, mtime}});
		console.log(data);
		console.log(file);
		res.json(file);
  });
};