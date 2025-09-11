import prisma from "../src/database/database.connections";

async function main() {
  console.log("Inicializando seed...");

  let user = await prisma.user.findUnique({
    where: {
      email: "pikachu@system.com",
    },
  });
  if (!user) {
    user = await prisma.user.create({
      data: {
        name: "Pikachu da Silva",
        image: "https://www.ensino.eu/media/3kyh4vko/pokemon.jpg",
        email: "pikachu@system.com",
        password: "40028922",
      },
    });
    console.log(user);
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
