import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./DiaryList.css";
import Button from "./Button";

const sortOptionList = [
  {
    value: "latest",
    name: "최신순",
  },
  {
    value: "latest",
    name: "오래된순",
  },
];

const DiaryList = ({ data }) => {
  const navigate = useNavigate();
  const [sortType, setsortType] = useState("latest");
  const [sortedData, setSortedData] = useState([]);
  useEffect(() => {
    const compare = (a, b) => {
      if (sortType === "latest") {
        return Number(b.date) - Number(a.date);
      } else {
        return Number(a.date) - Number(b.date);
      }
    };

    const copyList = JSON.parse(JSON.stringify(data));
    copyList.sort(compare);
    setSortedData(copyList);
    // setSortedData(data);
  }, [data, sortType]);

  const onChangeSortType = (e) => {
    setsortType(e.target.value);
  };

  const onClickNew = () => {
    navigate("/new");
  };
  return (
    <div className="menu_wrapper">
      <div className="left_col">
        <select value={sortType} onChange={onChangeSortType}>
          {sortOptionList.map((it, idx) => (
            <option key={idx} value={it.value}></option>
          ))}
        </select>
      </div>
      <div className="right_col">
        <Button
          type={"positive"}
          text={"새일기 쓰기"}
          onClick={onClickNew}
        ></Button>
      </div>
    </div>
  );
};

export default DiaryList;
