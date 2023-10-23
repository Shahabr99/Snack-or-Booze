import axios from "axios";

const BASE_API_URL = "http://localhost:5000";

/* 
  json-server will give you CRUD endpoints on snacks and drinks.
  Here we've provided you with a single action to get all drinks.

  You'll need to add to this class as you build features for the app.
*/

class SnackOrBoozeApi {

  // Get the snacks from the database
  static async getSnacks() {
    const result = await axios.get(`${BASE_API_URL}/snacks`);
    return result.data;
  }

  // Gets the drinks from the database
  static async getDrinks() {
    const res = await axios.get(`${BASE_API_URL}/drinks`);
    return res.data;
  }
}

export default SnackOrBoozeApi;
