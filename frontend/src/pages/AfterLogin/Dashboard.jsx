import { Box, Select } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import BarChart from "../../Components/dashboard/BarChart";
import { PiChart } from "../../Components/dashboard/PieChart";
import axios from "axios";
const Dashboard = () => {
  let token = localStorage.getItem("login_token");
  const [data, setData] = useState([]);
  const [project, setProject] = useState([]);
  let getData = async () => {
    await axios
      .get("https://clockify-api1.herokuapp.com/task", {
        headers: { authorization: `Bearer ${token}` },
      })
      .then((res) => (console.log(res.data), setData(res.data)));
  };

  const handleProject = (name) => {
    let sortedProject = data.filter((el) => el.name == name);
    setProject(sortedProject);
  };

  useEffect(() => {
    getData();
  }, [project]);

  return (
    <div>
      <Box w="82vw" bg="#e4eaee" pt="2rem">
        <h1>Dashboard</h1>
        <Select
          placeholder="Select option"
          onChange={(e) => handleProject(e.target.value)}
        >
          {data.map((el) => (
            <option key={el._id} value={el.name}>
              {el.name}
            </option>
          ))}
        </Select>
        <BarChart data={project} />
        <PiChart data={project} />
      </Box>
    </div>
  );
};

export default Dashboard;
