import "./Stylesheet.css";
import axios from "axios";
import Logger from "../../../Middleware/Logger";
import { useState } from "react";

const Home = () => {
  const [shortURL, setShortURL] = useState("");
  const handleSubmit = async () => {
    const url = document.getElementById("url").value;
    console.log(url);

    if (!url) {
      Logger({
        stack: "frontend",
        level: "debug",
        package: "component",
        message: "No url found",
      });

      return;
    }

    Logger({
      stack: "frontend",
      level: "debug",
      package: "component",
      message: "URL SUBMITTED",
    });

    // const response = await axios.post(
    //   "/getShortLink",
    //   JSON.stringify({ url: url })
    // );

    // setShortURL(response.data);

    setShortURL({ shortLink: "shortlink", expiry: "2025-01-01" });
  };

  return (
    <div className="screen">
      <header> URL SHORTENER </header>
      <main>
        <div>
          <p>Enter the URL</p>
          <input id="url" name="url" placeholder="Enter the URL" /> <br />
          <button onClick={handleSubmit}>Submit</button>
          <br />
          {shortURL ? (
            <>
              <span>{shortURL.shortLink}</span>
              <span>{shortURL.expiry}</span>
            </>
          ) : (
            ""
          )}
        </div>
      </main>
    </div>
  );
};

export default Home;
