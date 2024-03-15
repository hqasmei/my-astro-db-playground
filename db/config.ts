import { defineDb, defineTable, column } from "astro:db";

const Author = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    name: column.text(),
  },
});

const Comment = defineTable({
  columns: {
    authorId: column.text({ references: () => Author.columns.id }),
    content: column.text(),
    id: column.text({ primaryKey: true }),
  },
});

export default defineDb({
  tables: { Author, Comment },
});
