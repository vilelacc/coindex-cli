import axios from "axios";

class FetchData {
  static async fetchDataFromApi(endpoint, params = {}) {
    try {
      const response = await axios.get(
        `https://economia.awesomeapi.com.br${endpoint}`,
        { params }
      );
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  }

  static async last(currencyCode) {
    return FetchData.fetchDataFromApi(`/last/${currencyCode}`);
  }

  static async daily(currencyCode, numberOfDays) {
    return FetchData.fetchDataFromApi(
      `/json/daily/${currencyCode}/${numberOfDays}`
    );
  }

  static async sqm(currencyCode, amount) {
    return FetchData.fetchDataFromApi(`/json/daily/${currencyCode}/${amount}`);
  }
}

export default FetchData;
