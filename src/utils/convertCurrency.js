const API_KEY = "fdf4362fd5e8c91b34801b7b";

export async function ConvertCurrency(
  fromCurrenyValue,
  toCurrencyValue,
  inputCurrency
) {
  try {
    const fetchUrl = `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${fromCurrenyValue.currencyType}/${toCurrencyValue.currencyType}/${inputCurrency}`;
    const response = await fetch(fetchUrl);

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
    throw new Error("please check your internet connection");
  }
}
