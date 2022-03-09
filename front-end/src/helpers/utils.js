export function cnpjMask(value) {
    return value
      .replace(/\D+/g, '')
      .replace(/(\d{2})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1/$2')
      .replace(/(\d{4})(\d)/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1')
}

export function getNumbers(value) {
    return value.replace(/\D/g, '');
}

export function phoneMask(value) {

    value=value.replace(/\D/g,""); //Remove tudo o que não é dígito
    value=value.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
    value=value.replace(/(\d)(\d{4})$/,"$1-$2"); //Coloca hífen entre o quarto e o quinto dígitos
    return value;
}

export function formatField(value) {
  const offQuotes = value.replace(/("|')/g, '');
  return offQuotes.split('.')[1];
}
