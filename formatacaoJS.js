function formatPhone(value) {
  var maxLength = 11;
  value = String(value || ""); // Garante que seja uma string válida
  value = value.replace(/\D/g, ""); // Remove tudo que não for número

  if (value.length > maxLength) {
    value = value.slice(0, maxLength); // Trunca o valor ao limite máximo
  }

  return value.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
}

function formatCpfCnpj(value) {
  value = String(value || "").replace(/\D/g, ""); // Remove tudo que não for número

  if (value.length > 14) {
    value = value.slice(0, 14); // Garante no máximo 14 números
  }

  if (value.length <= 11) {
    // CPF (000.000.000-00)
    return value.replace(/(\d{3})(\d{3})(\d{3})(\d{0,2})/, "$1.$2.$3-$4");
  } else {
    // CNPJ (00.000.000/0000-00)
    return value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{0,2})/, "$1.$2.$3/$4-$5");
  }
}

function formatOnlyCpf(value) {
  const maxLength = 14;
  value = String(value || "").replace(/\D/g, ""); // Remove tudo que não for número

  // Aplica a máscara de CPF
  value = value.replace(/(\d{3})(\d)/, "$1.$2");
  value = value.replace(/(\d{3})(\d)/, "$1.$2");
  value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

  if (value.length > maxLength) {
    value = value.slice(0, maxLength); // Trunca o valor ao limite máximo
  }

  return value;
}

function formatCep(value) {
  const maxLength = 9; // Formato correto do CEP é "00000-000"
  value = String(value || "").replace(/\D/g, ""); // Remove tudo que não for número

  if (value.length > maxLength) {
    value = value.slice(0, maxLength); // Trunca o valor ao limite máximo
  }

  return value.replace(/(\d{5})(\d{0,3})/, "$1-$2"); // Mantém o formato correto do CEP
}

function formatarNumeroRe(value) {
  value = String(value || "").replace(/\D/g, ""); // Remove tudo que não for número
  value = value.slice(0, 6); // Garante no máximo 6 caracteres
  return `re${value}`;
}

// Aplicando as formatações
data.txtNUMBER = formatPhone(data.txtNUMBER);
data.txtRE = formatarNumeroRe(data.txtRE);
