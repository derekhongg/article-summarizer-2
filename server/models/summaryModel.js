const axios = require("axios");

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const summarizeArticle = async (url) => {
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/engines/davinci-codex/summarize",
      {
        prompt: `summarize the following article:\n${url}`,
        temperature: 0.7,
        max_tokens: 60,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${OPENAI_API_KEY}`,
        },
      }
    );

    const summary = response.data.choices[0].text;

    return summary;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to summarize article");
  }
};

module.exports = { summarizeArticle };