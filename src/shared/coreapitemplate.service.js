import Axios from "axios";

export default class RestResource {
  async getMainItems() {
    var mainitems = [];

    await Axios.get("https://coreapitemplate.azurewebsites.net/api/MainItems")
      .then(res => {
        mainitems = res.data;
      })
      .catch(error => {
        console.warn("Error reading mainitems");
      });
    return mainitems;
  }
}
