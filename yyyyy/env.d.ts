declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    AGENTS_DOMAIN: string
    AGENTS_PORT: string
    YYYYY_DOMAIN: string
    YYYYY_PORT: string
    // Virtual Machine
    VIRTUAL_MACHINE_DOMAIN: string
    VIRTUAL_MACHINE_SSH_PORT: string
    VIRTUAL_MACHINE_ROOT_USERNAME: string
    VIRTUAL_MACHINE_ROOT_PASSWORD: string
    VIRTUAL_MACHINE_FUJIE_USERNAME: string
    VIRTUAL_MACHINE_FUJIE_PASSWORD: string
    VIRTUAL_MACHINE_DAO77777_USERNAME: string
    VIRTUAL_MACHINE_DAO77777_PASSWORD: string
    VIRTUAL_MACHINE_DEPLOY_USERNAME: string
    VIRTUAL_MACHINE_DEPLOY_PASSWORD: string
    // Database
    SUPABASE_ANON_KEY: string
    SUPABASE_SERVICE_KEY: string
    POSTGRES_CONNECTION: string
    // Frontend
    FRONT_END_DOMAIN: string
  }
}