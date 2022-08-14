import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Connect the client
  await prisma.$connect()

  await prisma.user.create({
    data: {
      name: 'Test name 2',
      email: 'fake@example.com',
      password: 'password'
    },
  })


  const allUsers = await prisma.user.findMany()

  console.dir(allUsers, { depth: Infinity })
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })