# Node Cache Aside Example

Este projeto é um exemplo de implementação da arquitetura cache-aside utilizando Node.js, TypeScript, Redis e Axios. O sistema consome a API pública JSONPlaceholder para buscar dados de posts e utiliza o Redis para otimizar as requisições via cache.

## Estrutura do Projeto

```
node-cache-aside
├── src
│   ├── cache
│   │   └── memoryCache.ts 
│   ├── client
│   │   └── apiClient.ts
│   ├── controller
│   │   └── postController.ts
│   ├── service
│   │   └── postService.ts
│   ├── types
│   │   └── post.ts
│   └── index.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Instalação

1. Clone o repositório:
   ```sh
   git clone https://github.com/lucasrbordignon/cache-aside.git
   cd node-cache-aside
   ```

2. Instale as dependências:
   ```sh
   npm install
   ```

3. Certifique-se de ter o Redis instalado e em execução em sua máquina local na porta padrão (`localhost:6379`).

## Uso

1. Inicie o servidor:
   ```sh
   npm start
   ```

2. Acesse a API em `http://localhost:3000/api/posts/:id`, onde `:id` é o ID do post que você deseja buscar.

## Funcionamento

- O controlador `postController` expõe o endpoint `/api/posts/:id`.
- O serviço `postService` verifica se o post está disponível no cache Redis (`memoryCache.ts`).
- Se o post estiver no cache, ele é retornado imediatamente.
- Se não estiver, o serviço busca o post na API JSONPlaceholder, armazena no Redis e retorna para o usuário.

## Dependências

- [Express](https://expressjs.com/)
- [Axios](https://axios-http.com/)
- [Redis](https://redis.io/)
- [TypeScript](https://www.typescriptlang.org/)

## Contribuição

Sinta-se à vontade para contribuir com melhorias ou correções. Abra um pull request ou crie uma issue para discutir mudanças.

## Licença

Este projeto está licenciado sob a MIT License. Veja o arquivo LICENSE para mais detalhes.
