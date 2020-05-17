import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async country => {
  let flexibleUrl = url;
  if (country) {
    flexibleUrl = `${url}/countries/${country}`;
  }
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate }
    } = await axios.get(flexibleUrl);
    return {
      confirmed,
      recovered,
      deaths,
      lastUpdate
    };
  } catch (error) {}
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);
    const newData = data.map(d => ({
      confirmed: d.confirmed.total,
      deaths: d.deaths.total,
      date: d.reportDate
    }));
    return newData;
  } catch (error) {}
};

export const fetchCountries = async () => {
  try {
    const {
      data: { countries }
    } = await axios.get(`${url}/countries`);
    return countries.map(country => country.name);
  } catch (error) {}
};
