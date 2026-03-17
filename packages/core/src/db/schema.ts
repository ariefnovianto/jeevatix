import { pgTable, text, timestamp, integer, uuid } from 'drizzle-orm/pg-core';

export const events = pgTable('events', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: text('name').notNull(),
  description: text('description').notNull(),
  date: timestamp('date').notNull(),
  location: text('location').notNull(),
  imageUrl: text('image_url'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const ticketCategories = pgTable('ticket_categories', {
  id: uuid('id').defaultRandom().primaryKey(),
  eventId: uuid('event_id').references(() => events.id).notNull(),
  name: text('name').notNull(),
  price: integer('price').notNull(),
  totalStock: integer('total_stock').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const userTickets = pgTable('user_tickets', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: text('user_id').notNull(),
  ticketCategoryId: uuid('ticket_category_id').references(() => ticketCategories.id).notNull(),
  status: text('status').notNull().default('PENDING'), // PENDING, PAID, CANCELED
  purchasedAt: timestamp('purchased_at').defaultNow().notNull(),
});
