import { useEffect, useState } from "react";
import Crypto from "./components/Crypto";

function App() {
  const [btc, setBtc] = useState(0);
  const [doge, setDoge] = useState(0);
  const [ripple, setRipple] = useState(0);

  const [finalBtc, setFinalBtc] = useState(0);
  const [finalDoge, setFinalDoge] = useState(0);
  const [finalRipple, setFinalRipple] = useState(0);

  const [total, setTotal] = useState(0);

  const btcPrice = 25000;
  const dogePrice = 0.75;
  const ripplePrice = 1.5;

  useEffect(() => {
    const totalAmount =
      finalBtc * btcPrice + finalDoge * dogePrice + finalRipple * ripplePrice;
    setTotal(totalAmount.toFixed(2));
  }, [finalBtc, finalDoge, finalRipple]);

  const handleBTC = () => {
    setFinalBtc(finalBtc + btc);
  };

  const handleDoge = () => {
    setFinalDoge(finalDoge + doge);
  };

  const handleRipple = () => {
    setFinalRipple(finalRipple + ripple);
  };

  return (
    <div>
      <div>
        <div className="btc">
          <Crypto
            name="BTC"
            price={btcPrice}
            value={btc}
            setValueFunc={setBtc}
            clickFunc={handleBTC}
          ></Crypto>
        </div>
        <div className="doge">
          <Crypto
            name="DOGE"
            price={dogePrice}
            value={doge}
            setValueFunc={setDoge}
            clickFunc={handleDoge}
          />
        </div>
        <div className="ripple">
          <Crypto
            name="RIPPLE"
            price={ripplePrice}
            value={ripple}
            setValueFunc={setRipple}
            clickFunc={handleRipple}
          ></Crypto>
        </div>
      </div>
      <div className="myCart">
        <h3>MY CART</h3>
        <table>
          <thead>
            <tr>
              <th>COIN</th>
              <th>QTY.</th>
              <th>AMOUNT</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>BTC</td>
              <td>{finalBtc}</td>
              <td>{(finalBtc * btcPrice).toFixed(2)}</td>
            </tr>
            <tr>
              <td>DOGE</td>
              <td>{finalDoge}</td>
              <td>{(finalDoge * dogePrice).toFixed(2)}</td>
            </tr>
            <tr>
              <td>RIPPLE</td>
              <td>{finalRipple}</td>
              <td>{(finalRipple * ripplePrice).toFixed(2)}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={2}>TOTAL</td>
              <td>{total}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

export default App;
