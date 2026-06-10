# VORBE — Base Cadastral

Interface web para gerenciamento da base cadastral do município, desenvolvida em React + TypeScript + Vite.

## 🚀 Funcionalidades

- **Listagem de imóveis**: tabela com filtros por aba (Base cadastral / Motor de cálculo), busca por matrícula/endereço e paginação.
- **Excluir base**: modal de confirmação segura (exige digitar "EXCLUIR"). Após a exclusão exibe a tela de Empty State com toast de confirmação.
- **Upload de arquivo**: botão de upload na tela de Empty State. Exibe tela de carregamento por 3 segundos e redireciona para a listagem com toast de sucesso.
- **Toasts animados**: notificações de feedback com barra de progresso automática (5s).

## 🛠️ Tecnologias

- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [TailwindCSS v4](https://tailwindcss.com/)

## 📦 Instalação e uso

```bash
# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build de produção
npm run preview
```

## 📁 Estrutura principal

```
src/
├── components/
│   └── generated/
│       ├── LoadedItemList.tsx   # Tela principal com a tabela de imóveis
│       ├── EmptyState.tsx       # Tela de estado vazio (sem dados importados)
│       └── LoadingAnimation.tsx # Tela de carregamento durante o upload
├── App.tsx
└── main.tsx
```

## 🔄 Fluxo de navegação

```
Tela com tabela (LoadedItemList)
    │
    ├─► [Excluir base] ──► Modal de confirmação ──► EmptyState + Toast "Base excluída"
    │                                                      │
    │                                               [Upload de arquivo]
    │                                                      │
    └────────────────────────────────────────── LoadingAnimation (3s)
                                                           │
                                                  Tela com tabela + Toast "Dados carregados"
```

## 📝 Licença

Projeto privado — uso interno VORBE.
