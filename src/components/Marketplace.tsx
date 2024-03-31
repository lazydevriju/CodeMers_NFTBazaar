import React, { useState } from "react";
import nft1 from "../../public/Images/nft1.png";
import nft2 from "../../public/Images/nft2.png";
import nft3 from "../../public/Images/nft3.png";
import nft4 from "../../public/Images/nft4.png";
import nft5 from "../../public/Images/nft5.png";
import nft6 from "../../public/Images/nft6.png";
import nft7 from "../../public/Images/nft7.png";
import nft8 from "../../public/Images/nft8.png";
import nft9 from "../../public/Images/nft9.png";
import nft10 from "../../public/Images/nft10.png";

const Marketplace = () => {
  const [isFirstActive, setIsFirstActive] = useState(true);

  const handleToggle = () => {
    setIsFirstActive((prevState) => !prevState);
  };

  const tableData1 = [
    {
      img: nft1,
      collection: "athszn",
      price: "<0.01 ETH",
      volume: "12 ETH",
    },
    {
      img: nft2,
      collection: "Persona",
      price: "0.29 ETH",
      volume: "346 ETH",
    },
    {
      img: nft3,
      collection: "mfers",
      price: "0.71 ETH",
      volume: "370 ETH",
    },
    {
      img: nft4,
      collection: "Mutant Ape Yacht Club",
      price: "2.22 ETH",
      volume: "839 ETH",
    },
    {
      img: nft5,
      collection: "end of sartoshi-eos",
      price: "0.03 ETH",
      volume: "5 ETH",
    },
  ];

  const tableData2 = [
    {
      img: nft6,
      collection: "RG Bytes",
      price: "0.58 ETH",
      volume: "106 ETH",
    },
    {
      img: nft7,
      collection: "DeGods",
      price: "1.95 ETH",
      volume: "276 ETH",
    },
    {
      img: nft8,
      collection: "A.N.I.M.O",
      price: "0.08 ETH",
      volume: "11 ETH",
    },
    {
      img: nft9,
      collection: "CLONE-X",
      price: "0.53 ETH",
      volume: "83 ETH",
    },
    {
      img: nft10,
      collection: "Azuki Elementals",
      price: "0.47 ETH",
      volume: "54 ETH",
    },
  ];

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <div style={{ marginTop: "-25px", marginLeft: "50px"}}>
        <button
          style={{ backgroundColor: isFirstActive ? "#423f3f" : "#252121", width: "100px", height: "50px", borderRadius: "5px", color: "#ffff"}}
          onClick={handleToggle}
        >
          Trending
        </button>
        <button
          style={{ backgroundColor: isFirstActive ? "#252121" : "#423f3f", width: "90px", height: "55px", borderRadius: "5px", marginLeft: "-10px", color: "#ffff" }}
          onClick={handleToggle}
        >
          Top
        </button>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: "50px",
        }}
      >
        <table style={{ marginLeft: "50px" }}>
          <thead>
            <tr>
              <th
                style={{
                  paddingLeft: "40px",
                  fontWeight: "lighter",
                  fontFamily: "sans-serif",
                  color: "#b9b0b0",
                  borderBottom: "1px solid #b9b0b0",
                }}
              >
                Rank
              </th>
              <th
                colSpan="2"
                style={{
                  paddingLeft: "0px",
                  fontWeight: "lighter",
                  fontFamily: "sans-serif",
                  color: "#b9b0b0",
                  borderBottom: "1px solid #b9b0b0",
                }}
              >
                Collection
              </th>
              <th
                style={{
                  paddingLeft: "0px",
                  fontWeight: "lighter",
                  fontFamily: "sans-serif",
                  color: "#b9b0b0",
                  borderBottom: "1px solid #b9b0b0",
                }}
              >
                Floor Price
              </th>
              <th
                style={{
                  paddingLeft: "20px",
                  fontWeight: "lighter",
                  fontFamily: "sans-serif",
                  color: "#b9b0b0",
                  borderBottom: "1px solid #b9b0b0",
                }}
              >
                Volume
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData1.map((item, index) => (
              <tr key={index} style={{ paddingBottom: "10px" }}>
                <td
                  style={{
                    paddingLeft: "0px",
                    fontSize: "1rem",
                    fontFamily: "Arial",
                    color: "#fff",
                    paddingTop: "60px",
                  }}
                >
                  <button>{index + 1}</button>
                </td>
                <td
                  style={{
                    paddingLeft: "20px",
                    fontSize: "1rem",
                    fontFamily: "Arial",
                    color: "#fff",
                    paddingTop: "60px",
                  }}
                >
                  <img
                    src={item.img.src}
                    alt=""
                    style={{
                      width: "50px",
                      height: "50px",
                      marginRight: "10px",
                    }}
                  />
                </td>
                <td
                  style={{
                    fontSize: "1rem",
                    fontFamily: "Arial",
                    color: "#fff",
                    paddingTop: "60px",
                  }}
                >
                  <button>{item.collection}</button>
                </td>
                <td
                  style={{
                    paddingLeft: "80px",
                    fontSize: "1rem",
                    fontFamily: "Arial",
                    color: "#fff",
                    paddingTop: "60px",
                  }}
                >
                  <button>{item.price}</button>
                </td>
                <td
                  style={{
                    paddingLeft: "20px",
                    fontSize: "1rem",
                    fontFamily: "Arial",
                    color: "#fff",
                    paddingTop: "60px",
                  }}
                >
                  <button>{item.volume}</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <table style={{ marginLeft: "140px" }}>
          <thead>
            <tr>
              <th
                style={{
                  paddingLeft: "40px",
                  fontWeight: "lighter",
                  fontFamily: "sans-serif",
                  color: "#b9b0b0",
                  borderBottom: "1px solid #b9b0b0",
                }}
              >
                Rank
              </th>
              <th
                colSpan="2"
                style={{
                  paddingLeft: "0px",
                  fontWeight: "lighter",
                  fontFamily: "sans-serif",
                  color: "#b9b0b0",
                  borderBottom: "1px solid #b9b0b0",
                }}
              >
                Collection
              </th>
              <th
                style={{
                  paddingLeft: "0px",
                  fontWeight: "lighter",
                  fontFamily: "sans-serif",
                  color: "#b9b0b0",
                  borderBottom: "1px solid #b9b0b0",
                }}
              >
                Floor Price
              </th>
              <th
                style={{
                  paddingLeft: "20px",
                  fontWeight: "lighter",
                  fontFamily: "sans-serif",
                  color: "#b9b0b0",
                  borderBottom: "1px solid #b9b0b0",
                }}
              >
                Volume
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData2.map((item, index) => (
              <tr key={index} style={{ paddingBottom: "10px" }}>
                <td
                  style={{
                    paddingLeft: "0px",
                    fontSize: "1rem",
                    fontFamily: "Arial",
                    color: "#fff",
                    paddingTop: "60px",
                  }}
                >
                  <button>{index + 1}</button>
                </td>
                <td
                  style={{
                    paddingLeft: "20px",
                    fontSize: "1rem",
                    fontFamily: "Arial",
                    color: "#fff",
                    paddingTop: "60px",
                  }}
                >
                  <img
                    src={item.img.src}
                    alt=""
                    style={{
                      width: "50px",
                      height: "50px",
                      marginRight: "10px",
                    }}
                  />
                </td>
                <td
                  style={{
                    fontSize: "1rem",
                    fontFamily: "Arial",
                    color: "#fff",
                    paddingTop: "60px",
                  }}
                >
                  <button>{item.collection}</button>
                </td>
                <td
                  style={{
                    paddingLeft: "80px",
                    fontSize: "1rem",
                    fontFamily: "Arial",
                    color: "#fff",
                    paddingTop: "60px",
                  }}
                >
                  <button>{item.price}</button>
                </td>
                <td
                  style={{
                    paddingLeft: "20px",
                    fontSize: "1rem",
                    fontFamily: "Arial",
                    color: "#fff",
                    paddingTop: "60px",
                  }}
                >
                  <button>{item.volume}</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Marketplace;
