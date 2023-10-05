import "./App.css";
import Login from "./pages/Login/Login";
import PoolGames from "./pages/PoolGames/PoolGames";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contestcreation from "./pages/PoolGames/Contestcreation";
import { Provider } from "react-redux";
import PoolMatch from "./pages/PoolGames/PoolMatch";
import Contests from "./pages/PoolGames/Contests";
import OnAirContests from "./pages/PoolGames/OnAirContests";
import PrizeDistribution from "./pages/PoolGames/PrizeDistribution/PrizeDistribution";
import Bottesting from "./pages/PoolGames/Bottesting";
import StockList from "./pages/Marketplace/StockList";
import StockInfo from "./pages/Marketplace/StockInfo";
import PlayerStockStat from "./pages/PlayerStock";
import Manager from "./components/Manager";

function App() {
  return (
    // <Provider>
    <BrowserRouter>
      <Routes>
        <Route exact path="" element={<Login />} />
        <Route exact path="/prizemodels" element={<PrizeDistribution />} />
        <Route exact path="/pool" element={<Manager />}>
          <Route path="" element={<PoolGames />} />
          <Route exact path="onAir" element={<OnAirContests />} />
          <Route exact path="onAir/contestId" element={<Bottesting />} />
          <Route exact path="contest" element={<Contestcreation />} />
          <Route exact path="match/:id" element={<PoolMatch />} />
        </Route>
        <Route exact path="/marketplace" element={<Manager />}>
          <Route path="" element={<StockList />} />
          <Route path="stock" element={<PlayerStockStat />} />
        </Route>
      </Routes>
    </BrowserRouter>
    // </Provider>
  );
}

export default App;
