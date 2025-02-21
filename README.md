# 📌 Formatadores de Dados em JavaScript  

Este repositório contém funções para formatação de dados comuns, como telefone, CPF, CNPJ, CEP e números de registro.  

## 📜 **Descrição**  

Este código fornece funções JavaScript para padronizar a entrada de dados e melhorar a experiência do usuário ao preencher formulários. Ele garante que os valores sejam formatados corretamente e evita inserções inválidas.  

## 🚀 **Funções Implementadas**  

🔹 **`formatPhone(value)`** → Formata números de telefone no padrão brasileiro: **(XX) XXXXX-XXXX**  
🔹 **`formatCpfCnpj(value)`** → Formata CPF (**XXX.XXX.XXX-XX**) ou CNPJ (**XX.XXX.XXX/XXXX-XX**) automaticamente com base no tamanho da entrada  
🔹 **`formatOnlyCpf(value)`** → Formata apenas CPF no padrão **XXX.XXX.XXX-XX**  
🔹 **`formatCep(value)`** → Formata CEP no padrão **XXXXX-XXX**  
🔹 **`formatarNumeroRe(value)`** → Formata números de registro, garantindo no máximo 6 caracteres e adicionando o prefixo `"re"`  

## ⚙️ **Uso**  

Basta chamar a função passando o valor a ser formatado:  

```javascript
const formattedPhone = formatPhone("11987654321"); 
console.log(formattedPhone); // (11) 98765-4321

const formattedCpf = formatCpfCnpj("12345678901");
console.log(formattedCpf); // 123.456.789-01

const formattedCep = formatCep("01001000");
console.log(formattedCep); // 01001-000
```

## 📌 **Detalhes Técnicos**  

- Remove caracteres não numéricos antes de aplicar a formatação  
- Limita a quantidade de caracteres para evitar entradas inválidas  
- Diferencia automaticamente entre CPF e CNPJ  
- Pode ser aplicada diretamente em formulários para padronização automática  
