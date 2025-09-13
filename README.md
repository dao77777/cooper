# Cooper

## Tec

- Frontend: Next.js
- Backend: Go Frame
- DB: Postgres
- Vector: Pg-vector

## 数据库设计

**Chat**
- content
- type: Enum(User, LLM, Tool)
- createdAt
- topic: timestamp + text

**User**
- username
- password

## 流程设计

**对话流程**: TODO

## Document Ref

[MCP Official](https://modelcontextprotocol.io/docs/getting-started/intro)