# Landing Page Demo

A Landing Page Demo for teaching.

The project is forked from [sorafm](https://github.com/all-in-aigc/sorafm)

## Credit to

- [Sora FM](https://sora.fm/) Sora AI Video Generator

## Quick Start

1. clone project

```shell
git clone https://github.com/linchen1987/sorafm.git
```

2. install dependencies

```shell
cd sorafm
pnpm install
```

3. init database

create your database use [local postgres](https://wiki.postgresql.org/wiki/Homebrew) or [vercel-postgres](https://vercel.com/docs/storage/vercel-postgres) or [supabase](https://supabase.com/)

create tables from sql at `data/install.sql`

4. set environmental values

put `.env.local` under root dir with values list below

```
POSTGRES_URL="postgres://USER:PASSWORD@HOST/DB"

WEB_BASE_URI="http://localhost:3000"
```

5. local development

```shell
pnpm dev --port 3000
```

open `http://localhost:3000` for preview

## Other Things

you can contact me at Twitter: https://twitter.com/linklin1987
