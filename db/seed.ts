import { db, Author, Comment } from "astro:db";

export default async function ()
{
  await db
    .insert(Author)
    .values( [ { id: "1", name: "Hosna"} ]);
  
  await db
    .insert(Comment)
    .values([{ authorId: "1", content: "Enjoy!",id:"fasdfasdf"}]);
}
