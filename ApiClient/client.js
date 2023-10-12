import axios from 'axios';

export class ApiClient {
    responseStatusCheck(responseObject) {
        if (responseObject.status >= 200 && responseObject.status < 300) {
            return responseObject;
        } else {
            throw new Error(responseObject.statusText);
        }
    }

    getRequest(url) {
        return axios.get(url).then(this.responseStatusCheck).catch((error) => {
            console.log(error);
        });
    }

    constructor() {
      this.apiKey = process.env.NEXT_PUBLIC_APIKEY;
      this.baseUrl = "https://api.openweathermap.org/data/2.5";
      console.log("API Key:", this.apiKey);
  }
  
  async getForecast(city) {
    
try {
    if (!this.apiKey || !this.baseUrl) {
        throw new Error("API configuration not set");
    }
    const url = `${this.baseUrl}/forecast?q=${city}&appid=${this.apiKey}&units=metric`;

    const response = await this.getRequest(url)

    return response.data;
} catch (error) {
    console.log(error)
}
    
}

}