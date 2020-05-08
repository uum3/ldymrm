import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async (req, res) => {
  const {
    query: { id },
  } = req
  const pp = Number(id)
  const file = await prisma.file.findOne({
	where: { id: pp }
  })
  res.json(file)
}