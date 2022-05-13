import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const post = await prisma.post.create({
        data: {
            title: 'Types of relations',
            tags: {
                create: [
                    { tag: { create: { name: 'dev' } } },
                    { tag: { create: { name: 'prisma' } } },
                ],
            },
        },
    })

    console.log({ post });

    const posts = await prisma.post.findMany({
        include: { tags: { include: { tag: true } } },
    });

    console.log('posts', JSON.stringify(posts));
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
