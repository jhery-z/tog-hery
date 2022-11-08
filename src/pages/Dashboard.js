import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table } from 'antd';

const Dashboard = () => {
  const [gridData, setGridData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadData()
}, []);

  const loadData = async () => {
    setLoading(true);
    const response = await axios.get("https://jsonplaceholder.typicode.com/comments");
    setGridData(response.data);
    setLoading(false);
  };

  console.log("gridData", gridData);

  const modifiedData = gridData.map(({body, ...item}) => ({
    ...item,
    key: item.id,
    Comment: body,
  }));

  const columns = [
    {
    title: "ID",
    dataIndex: "id"
  },
    {
    title: "Name",
    dataIndex: "name",
    align: "center",
    editable: true
  },
    {
    title: "Email",
    dataIndex: "email",
    align: "center",
    editable: true
  }
];

  console.log("modifiedData", modifiedData);

  return (
    <div>
      <Table
      columns={columns}
      dataSource={modifiedData}
      bordered
      loading={loading}
      />
    </div>
  )
}

export default Dashboard
