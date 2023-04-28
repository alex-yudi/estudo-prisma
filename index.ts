import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {

    await prisma.usuarios.create({
        data: {
            nome: 'Teste',
            email: 'teste@tes.com',
            senha: 'sadasd'
        }
    })

    const allUsers = await prisma.usuarios.findMany()
    console.log(allUsers)
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