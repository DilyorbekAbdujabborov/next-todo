-- Supabase → SQL Editor'da bir marta ishga tushiring.
-- Alohida "todo_app" sxemasi: nextjs-dashboard-edu'dagi Prisma
-- bu jadvalni "begona" deb o'chirib yubormasligi uchun.
create schema if not exists todo_app;

create table if not exists todo_app.todos (
  id         serial primary key,
  user_id    int not null references public.users(id) on delete cascade,
  text       text not null,
  completed  boolean not null default false,
  created_at timestamptz not null default now()
);
