import { int, integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const postsTable = sqliteTable("posts", {
  id: text('id').primaryKey(),
  title: text('title').notNull(),
  slug: text('slug').notNull().unique(),
  excerpt: text('excerpt').notNull(),
  author: text('author').notNull(),
  coverImageUrl: text('cover_image').notNull(),
  content: text('content').notNull(),
  isPublished: integer('isPublished', { mode: 'boolean' }).notNull(),
  createdAt: text('created_at').notNull(),
  updatedAt: text('updated_at').notNull(),
});

export type PostsTableSelectModel = typeof postsTable.$inferSelect;
export type PostsTableInsertModel = typeof postsTable.$inferInsert;
