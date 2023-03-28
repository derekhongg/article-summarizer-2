import axios from "axios";
import Summary from "../views/Summary";

const getSummary = async (url, setSummary) => {
  try {
    const response = await axios.post("http://localhost:5000/summarize", {
      url,
    });

    setSummary(response.data.summary);
  } catch (error) {
    console.log(error);
  }
};

export { getSummary };