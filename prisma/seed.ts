import prisma from "../src/database/database.connections";
import generateHashPassword from "../src/modules/auth/utils/generate-hash-password";

async function main() {
  console.log("Inicializando seed...");

  const user = {
    name: "Pikachu da Silva",
    image: "https://www.ensino.eu/media/3kyh4vko/pokemon.jpg",
    email: "pikachu@system.com",
    password: generateHashPassword.execute("40028922"),
  };

  await prisma.user.upsert({
    where: {
      email: "pikachu@system.com",
    },
    create: user,
    update: {},
  });

  const cities = [
    { city: "São Paulo" },
    { city: "Rio de Janeiro" },
    { city: "Belo Horizonte" },
    { city: "Brasília" },
    { city: "Salvador" },
    { city: "Fortaleza" },
    { city: "Curitiba" },
    { city: "Manaus" },
    { city: "Recife" },
    { city: "Porto Alegre" },
    { city: "Belém" },
    { city: "Goiânia" },
    { city: "Guarulhos" },
    { city: "Campinas" },
    { city: "São Luís" },
  ];

  await prisma.location.createMany({ data: cities, skipDuplicates: true });

  console.log({ ...user, password: "40028922" });
  console.log("Cidades adicionadas:", cities);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
