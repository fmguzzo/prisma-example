import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // const newUser = await prisma.user.create({
  //   data: {
  //     name: 'Victoria Del Pozo',
  //     email: 'victoria@gmail.com'
  //   }
  // })
  // await prisma.user.create({
  //   data: {
  //     name: 'Alice',
  //     email: 'alice@prisma.io',
  //     posts: {
  //       create: { title: 'Hello World' },
  //     },
  //     profile: {
  //       create: { bio: 'I like turtles' },
  //     },
  //   },
  // })
  const users = await prisma.user.findMany({where: {id: {gt: 0}}})
  console.log(users)

}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })