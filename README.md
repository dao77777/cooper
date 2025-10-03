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

- chore
- feat
- doc
- fix
- refactor

## Database Design

**general**
- id
- createdAt
- updatedAt

**user**
- username: string
- password: string
- phone: string
- email: string
- avatar: string
- nickname: string

**chat**
- userId: string
- summary: string

**chat_knowledge_own**
- chatId: string
- knowledgeId: string

**chatMessage**
- chatId: string
- prevId: string
- type: 'USER' | 'LLM'
- content: json

**chatMessage_knowledge_own**
- chatMessageId: string
- knowledgeId: string

**knowledge**
- userId: string
- content: string
- vector: embbeding

## Api Design

Controller
- `/auth`
  - `Post signup`: public
    - In
      - username: string(min:5, max:20)
      - password: string(min: 5, max: 20)
    - Out: token
    - Error
      - 400: {field} format invalid, must be {format}
      - 409: username already exists
  - `Post login`: public
    - In: json
      - username: string
      - passowrd: string
    - Out: token
    - Error
      - 401: authenticate failed
      - 404: username does not exists, please signup first
      - 429: too many request, please try again later
    - rateLimit: 3/min
  - `Put password`
    - In: json
      - password: string
      - newPassword: string(min: 5, max: 20)
    - Error
      - 400, {field} format invalid, must be {format}
      - 401, authenticate failed, please login first
      - 401, password is not correct
      - 429, too many request, please try again later
    - rateLimit: 3/min
- `/user`
  - `Put info`
    - In
      - avatar?: string(url)
      - nickname?: string(min: 1, max: 20)
    - Error
      - 400: {field} format invalid, must be {format}
      - 401: authenticate failed, please login first
- `/object`
  - `Get temporary-credential`
    - In
    - Out: TencentSTS
    - Error
      - 401, authenticate failed, please login first
- `/ai`
  - `Get chat/list`
  - `Post chat`
  - `Delete chat/:id`
  - 
  - `Get chat/:id/knowledge/list`
  - `Post chat/:id/knowledge`
  - `Delete chat/:id/knowledge/:id`
  - 
  - `Get chat/:id/chat-message/list`
  - `Post chat/:id/chat-message`
    - In
      - `chatMessage-knowledge` // TODO
  - `Post chat/:id/chat-message/retry`
  - 
  - `Post knowledge`
  - `Delete knowledge/:id`

## Flow Design

**Dialogue Flow**: TODO

## Document Ref

[MCP Official](https://modelcontextprotocol.io/docs/getting-started/intro)

[Eino](https://www.cloudwego.io/docs/eino/)

## Other

```bash
## .env load
if [ -f ~/.env ]; then
  export $(grep -v '^#' ~/.env | xargs)
fi
```

- [ ] cache, artifacts concept
- [ ] how to manage binary service in linux server
- [ ] choose a plan to solve cicd problem: cnb.cool, github ??, gitlab

Auto video generate 

- Ability
  - Query
    - Text search
    - Image search
    - Video search
    - Link download
    - Map search
    - Social Media 
  - Transform
    - Text2Image(DALLE3)
    - Image2Image
    - Image2Text
    - OCR
    - Video2Text
    - Text2Video(Cpacut)
    - Text2Text
  - Display
    - Charts
  - Knowledge(RAG)
    - Local: PDF, TXT, DOC, DOCX 
    - Online: we can specify  update frequency
    - How to segment
    - How to search
  - Memory
    - Chat history
    - Long-term memory
  - File system
  - Version manage 
  - Publish to other platform 
  - SCheduled task


Response data format
- code
- msg
- data

# 

- [ ] 英国暴乱
- [ ] 政治经济学, 1844经济学哲学手稿
- [ ] AI
- [ ] 设计, 包豪斯
- [ ] 函数式
- [ ] 英语, Nix, Shell, Go(GoFrame)
- [ ] 文档化

GoFrame
- [ ] 如何在GoFrame的规范路由中返回单值
- [ ] 如何在路由中添加元信息并在middleware中拿到
- [ ] 错误处理