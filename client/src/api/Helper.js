import axios from "axios";
export const Search = async (query) => {
    const appId="84746cf1";
    const appKey="1ef83f5ecffaf873034ebc81c51bd299";
    try {
      let response = await axios.get(`https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}`);
       response=response.data.hits;
       console.log(response);
      return response;
    } catch (error) {
      console.error('Error fetching recipes', error);
    }
  };
