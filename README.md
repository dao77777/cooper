# Cooper

## Cooperation

- Code: [Github](https://github.com/)
- Graph: [Excalidraw](https://excalidraw.com/)

## CICD

[Github actions workflow](https://docs.github.com/en/actions): https://docs.github.com/en/actions
- Make tencent server a github runner
- Write a file `/.github/workflows/deploy.yml`
- Github actions will use docker to deploy project on my self-hosted github runner

Supabase: 0.5GB database size limit for free plan
- Project URL: https://tazbxhcenftqutkltoax.supabase.co

Virtual Machine Domain: https://cooper-vm.dao77777.space/
- ip: 150.158.158.227
- user: root, ubuntu(tencent builtin), lighthouse(tencent builtin), dao77777, fujie

Frontend: https://cooper.dao77777.space/, deployed on vercel

Agents: https://cooper-agents.dao77777.space/

Yyyyy: https://cooper-yyyyy.dao77777.space/

Nginx: reverse proxy

Certbot: Certificate auto renew

## Tec

- Frontend: Next.js
  - Style: Tailwind
  - Component: Shadcn
  - Form: React Hook Form
  - Animate: Framer motion
  - Async State: React Query
  - Icon: Lucide React
- Backend: Go Frame
  - AI-SDK: Eino
- DB: Postgres
  - Provider: supabase, tencent???
- Vector: Pg-vector

## Project Structure

Frontend Name: xxxxx

## Commit Lint

- feat: 代表feature
- doc: 代表文档
- fix: 代表修bug
- refactor: 代表重构

## Database Design

**Chat**
- content
- type: Enum(User, LLM, Tool)
- createdAt
- topic: timestamp + text

**User**
- username
- password

## Flow Design

**Dialogue Flow**: TODO

## Document Ref

[MCP Official](https://modelcontextprotocol.io/docs/getting-started/intro)

[Eino](https://www.cloudwego.io/docs/eino/)
