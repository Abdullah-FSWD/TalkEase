import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

import * as schema from "@/db/schema";

const sql = neon(process.env.DATABASE_URL!);

const db = drizzle(sql, { schema });

async function main() {
  try {
    console.log("Seeding database");

    await db.delete(schema.courses);
    await db.delete(schema.userProgress);
    await db.delete(schema.units);
    await db.delete(schema.lessons);
    await db.delete(schema.challenges);
    await db.delete(schema.challengeOptions);
    await db.delete(schema.challengeProgress);

    await db.insert(schema.courses).values([
      {
        id: 1,
        title: "Spanish",
        imageSrc: "/es.svg",
      },
      {
        id: 2,
        title: "Italian",
        imageSrc: "/it.svg",
      },
      {
        id: 3,
        title: "French",
        imageSrc: "/fr.svg",
      },
      {
        id: 4,
        title: "Crotian",
        imageSrc: "/hr.svg",
      },
    ]);

    await db.insert(schema.units).values([
      {
        id: 1,
        courseId: 1,
        title: "Unit 1",
        description: "Learn the basics of Spanish.",
        order: 1,
      },
    ]);

    await db.insert(schema.lessons).values([
      {
        id: 1,
        unitId: 1, // Unit 1 (Learn the basics...)
        order: 1,
        title: "Nouns",
      },
      {
        id: 2,
        unitId: 1, // Unit 1 (Learn the basics...)
        order: 2,
        title: "Verbs",
      },
      {
        id: 3,
        unitId: 1, // Unit 1 (Learn the basics...)
        order: 3,
        title: "Verbs",
      },
      {
        id: 4,
        unitId: 1, // Unit 1 (Learn the basics...)
        order: 4,
        title: "Verbs",
      },
      {
        id: 5,
        unitId: 1, // Unit 1 (Learn the basics...)
        order: 5,
        title: "Verbs",
      },
      {
        id: 6,
        unitId: 1, // Unit 1 (Learn the basics...)
        order: 6,
        title: "Verbs",
      },
      {
        id: 7,
        unitId: 1, // Unit 1 (Learn the basics...)
        order: 7,
        title: "Verbs",
      },
      {
        id: 8,
        unitId: 1, // Unit 1 (Learn the basics...)
        order: 8,
        title: "Verbs",
      },
      {
        id: 9,
        unitId: 1, // Unit 1 (Learn the basics...)
        order: 9,
        title: "Verbs",
      },
      {
        id: 10,
        unitId: 1, // Unit 1 (Learn the basics...)
        order: 10,
        title: "Verbs",
      },
      {
        id: 11,
        unitId: 1, // Unit 1 (Learn the basics...)
        order: 11,
        title: "Verbs",
      },
      {
        id: 12,
        unitId: 1, // Unit 1 (Learn the basics...)
        order: 12,
        title: "Verbs",
      },
    ]);

    await db.insert(schema.challenges).values([
      {
        id: 1,
        lessonId: 1, //Nouns
        order: 1,
        type: "SELECT",
        question: 'which one of these is the "the man"?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 1, // Which one of these is "the man"?
        imageSrc: "/man.svg",
        correct: true,
        text: "el hombre",
        audioSrc: "/es_man.mp3",
      },
      {
        challengeId: 1,
        imageSrc: "/woman.svg",
        correct: false,
        text: "la mujer",
        audioSrc: "/es_woman.mp3",
      },
      {
        challengeId: 1,
        imageSrc: "/robot.svg",
        correct: false,
        text: "el robot",
        audioSrc: "/es_robot.mp3",
      },
    ]);

    console.log("Seeding finished");
  } catch (error) {
    throw new Error("Failed to fetch database");
  }
}

main();
