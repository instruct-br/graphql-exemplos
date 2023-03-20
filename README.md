# GraphQL

Repositório com alguns exemplos de uso de GraphQL mostrados durante a apresentação "GraphQL - Uma breve introdução".

## Configuração

Instale os pacotes do repositório com [pnpm](https://pnpm.io/):
```
pnpm i
```

Não tem pnpm? Se estiver usando uma versão recente do Node.js (>= 16.x), instale através do corepack:
```
corepack enable
corepack prepare pnpm@latest --activate
```

Para versões mais antigas do Node.js consulte a [documentação de instalação](https://pnpm.io/installation).

## Execução

### Mock

Para subir o server de "mock" execute:
```
pnpm run mock
```

E acesse `http://localhost:4001/graphql` em um browser.

O server de mock simula uma implementação de um server GraphQL gerando valores a partir das definições de tipos e operações no arquivo com o SDL `schema.graphql`.

### Server

Para subir o servidor Apollo em modo de desenvolvimento execute:
```
pnpm run server
```

E acesse `http://localhost:4000/` em um browser para rodar consultas no playground do Apollo.

### Codegen

O projeto também está configurado para gerar código a partir das definições no arquivo com o SDL. No exemplo deste repositório são geradas as tipagens para implementar resolvers em um server de GraphQL. Dessa forma é possível validar que os resolvers implementados retornam objetos com os tipos esperados em tempo de build.

Para atualizar os tipos gerados execute:
```
pnpm run generate
```

OBS: os arquivos gerados na pasta `__generated__` são ignorados na visualização de mudanças em um PR na interface do GitHub.
