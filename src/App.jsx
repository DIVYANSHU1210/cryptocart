import { useEffect, useState } from "react";
import Crypto from "./components/Crypto";

function App() {
  const [btc, setBtc] = useState(0);
  const [doge, setDoge] = useState(0);
  const [ripple, setRipple] = useState(0);
  const[total, setTotal] = useState(0);

  const [finalBtc, setFinalBtc] = useState(0);
  const [finalDoge, setFinalDoge] = useState(0);
  const [finalRipple, setFinalRipple] = useState(0);

  const [btcPrice, setBtcPrice] = useState(0);
  const [dogePrice, setDogePrice] = useState(0);
  const [ripplePrice, setRipplePrice] = useState(0);

  useEffect(()=>{
    setTotal((finalBtc + finalDoge + finalRipple).toFixed(2));
  }, [finalBtc , finalDoge , finalRipple])

  const handleBTC = () => {
    setFinalBtc(finalBtc + btc);
  };
  
  const handleDoge = () => {
    setFinalDoge(finalDoge + doge);
  };
  
  const handleRipple = () => {
    setFinalRipple(finalRipple + ripple);
  };

  const handleAmount = (value, price) => {
    return (value * price).toFixed(2);
  };
  return (
    <div>
      <div>
        <div className="btc">
          <Crypto
            name="BTC"
            price={25000}
            value={btc}
            setValueFunc={setBtc}
            clickFunc={handleBTC}
          ></Crypto>
        </div>
        <div className="doge">
          <Crypto
            name="DOGE"
            price={0.75}
            value={doge}
            setValueFunc={setDoge}
            clickFunc={handleDoge}
          />
        </div>
        <div className="ripple">
          <Crypto
            name="RIPPLE"
            price={1.5}
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
              <td>{handleAmount(finalBtc, 25000)}</td>
            </tr>
            <tr>
              <td>DOGE</td>
              <td>{finalDoge}</td>
              <td>{handleAmount(finalDoge, 0.75)}</td>
            </tr>
            <tr>
              <td>RIPPLE</td>
              <td>{finalRipple}</td>
              <td>{handleAmount(finalRipple, 1.5)}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={2}>
                  TOTAL
              </td>
              <td>
                {total}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

export default App;
