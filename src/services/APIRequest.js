import axios from "axios";
import UserTransformer from "../transformers/user.transformer";

const BASE_URL = "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json";

export default class APIRequest {
  getData = async () => {
    return await axios
      .get(BASE_URL)
      .then((res) => UserTransformer.transformMany(res.data))
      .catch((err) => {
        throw err.messege;
      });
  };
}
