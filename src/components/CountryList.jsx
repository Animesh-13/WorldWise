import CountryItem from "./CountryItem";
import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";
import { useCity } from "../contexts/CitiesContext";

function CountryList() {
  const { cities, isLoading } = useCity();
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message messsage="Add your first city by clicking on a city on the map" />
    );

  const Country = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);

  return (
    <ul className={styles.countryList}>
      {Country.map((country) => (
        <CountryItem country={country} />
      ))}
    </ul>
  );
}

export default CountryList;
