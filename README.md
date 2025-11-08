# 🧪 Automação Web com Cypress – SauceDemo

## 🎯 Objetivo
Automatizar cenários de teste funcionais utilizando o **Cypress**, validando diferentes comportamentos do site **SauceDemo**.  

---

## 🧩 Funcionalidades Automatizadas

### 🔐 Login
- ✅ Login com credenciais válidas → redireciona para página de produtos  
- 🚫 Login com senha inválida → exibe mensagem de erro  
- 🔒 Login com usuário bloqueado → exibe mensagem *“user has been locked out”*  
- ⚠️ Login com campos vazios → impede login e realiza *assert* com a mensagem de erro exibida no front-end  

### 🛍️ Produtos
- ✅ Exibição da lista de produtos → todos os itens aparecem após login  
- 🔤 Ordenação A → Z → produtos em ordem alfabética crescente  
- 🔡 Ordenação Z → A → produtos em ordem alfabética decrescente  

### 🛒 Carrinho
- ➕ Adicionar 1 produto → contador do carrinho = 1  
- ➕➕ Adicionar 2 produtos → contador do carrinho = 2  
- ❌ Remover produto → carrinho atualiza corretamente  
- 👀 Visualizar carrinho → itens adicionados são exibidos  

### 💳 Checkout
- 🧾 Preencher dados válidos → avança para página de revisão  
- ⚠️ Campos vazios → exibe aviso de preenchimento obrigatório  
- 🎉 Finalizar compra → exibe mensagem *“Thank you for your order!”*  
- ↩️ Cancelar checkout → retorna para lista de produtos  

---

## 🧰 Tecnologias Utilizadas
- [Cypress](https://www.cypress.io/)

---

## 🚀 Como Executar o Projeto

1. **Clonar o repositório**
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   cd nome-do-repositorio
   ```

2. **Instalar as dependências**
   ```bash
   npm install
   ```

3. **Abrir o Cypress**
   ```bash
   npx cypress open
   ```

4. **Executar os testes**
   Escolha o teste desejado na interface do Cypress ou execute via terminal:
   ```bash
   npx cypress run
   ```

---