import React, { useState, useEffect } from "react";
import axios from "axios";

function Filtre(props) {
  const [allTypes, setAllTypes] = useState([]);

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/type/`).then(({ data }) => {
      setAllTypes(data.results);
    });
  }, []);

  return (
    <div>
      <label className="labelFiltre">Pick a first type </label>
      <select
        className="selectFiltre"
        name="type1"
        onChange={props.filtreHandleChange}
      >
        <option value="">-----</option>
        {allTypes &&
          allTypes
            .filter((type) => {
              return type.name !== ("unknown" && "shadow");
            })
            .map((type, i) => (
              <option key={i} value={type.name}>
                {type.name}
              </option>
            ))}
      </select>
      <label className="labelFiltre">Pick a second type </label>
      <select
        className="selectFiltre"
        name="type2"
        onChange={props.filtreHandleChange}
      >
        <option value="">-----</option>
        {allTypes &&
          allTypes
            .filter((type) => {
              return type.name !== ("unknown" && "shadow");
            })
            .map((type, i) => (
              <option key={i} value={type.name}>
                {type.name}
              </option>
            ))}
      </select>
    </div>
  );
}

export default Filtre;

/*import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./GetCamera.css";

const GetCamera = ({ resource }) => {
  const [webcam, setWebcam] = useState({});
  const [countryList, setList] = useState([]);
  const [countryId, setCountryId] = useState("US");
  const [index, setIndex] = useState(0);
  const [nombreCam, setNombreCam] = useState(1);

  useEffect(() => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    axios
      .get(
        `https://api.windy.com/api/webcams/v2/list?show=countries&key=${API_KEY}`
      )
      .then(({ data }) => {
        setList(data.result.countries);
      });
    axios
      .get(
        `https://api.windy.com/api/webcams/v2/list/country=US/limit=1?show=webcams:image,location,player&key=${API_KEY}`
      )
      .then(({ data }) => {
        setWebcam(data.result.webcams[0]);
      });
  }, []);

  useEffect(() => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    axios
      .get(
        `https://api.windy.com/api/webcams/v2/list/country=${countryId}/limit=15000?show=webcams:image,location,player&key=${API_KEY}`
      )
      .then(({ data }) => {
        setNombreCam(data.result.webcams.length);
        const getCam = () => {
          setWebcam(data.result.webcams[index]);
        };
        getCam();
      });
  }, [countryId, index]);

  return (
    <div className="teleContainer">
      {webcam.player && (
        <div className="television">
          <hr />
          <iframe
            className="screen"
            id="myCam"
            title="myCam"
            src={webcam.player.lifetime.embed + "?autoplay=1"}
            allowFullScreen={true}
            alt="webcam"
          />
          <p className="camTitle">{webcam.title}</p>
        </div>
      )}

      <div className="telecommande">
        <label className="PickACountry">
          <div className="power"></div>
          Pick a country{" "}
        </label>
        <select
          className="ui dropdown"
          onChange={(event) => setCountryId(event.target.value)}
        >
          {countryList
            .sort((country1, country2) => {
              return country2.count - country1.count;
            })
            .map((list, i) => (
              <option key={i} value={list.id}>
                {list.name} ({list.count} webcams)
              </option>
            ))}
        </select>
        <hr />
        <input
          type="button"
          value="Random !"
          className="button ui"
          onClick={() =>
            setIndex(Math.floor(Math.random() * Math.floor(nombreCam)))
          }
        />
      </div>
    </div>
  );
};

export default GetCamera;*/
