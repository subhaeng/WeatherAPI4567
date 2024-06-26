import Card from './Components/Card';
import Input from './Components/Input';
import Button from './Components/Button';
import { useWeather} from './Context/Weathercon';
import './App.css'
function App() {
  const weather = useWeather();
  console.log(weather);
  return (
    <div className='App'>
      <h1>Weather API</h1>
      <Input />
      <Button onClick={weather.fetchData} value="SEARCH" />
      <Card />
    </div>
  );
}
export default App;
