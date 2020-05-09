import { PrismaClient } from '@prisma/client'
import hashids from '../../../lib/hashid'

const prisma = new PrismaClient()

export default async (req, res) => {
  const {
    query: { id },
  } = req
  console.log(hashids.decode(id)[0]);
  const pp = hashids.decode(id)[0]
  console.log(pp)
  const file = await prisma.file.findOne({
	where: { id: pp }
  })
  console.log({...file, id: pp});
  res.json({...file, id})
}