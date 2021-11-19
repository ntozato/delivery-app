import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import formatId from '../helpers/formatId';
import api from '../api/index';

const DetailOrderTable = () => {
  const { id } = useParams();
  const [isFetched, setIsFetched] = useState(false);
  const [saleData, setSaleData] = useState({});
  console.log(saleData);

  const getSaleAndSaveInState = async () => {
    const { data } = await api.getSale(id);
    setSaleData(data);
    setIsFetched(!isFetched);
  };

  const renderTable = () => (
    <table>
      <tr>
        <th>
          PEDIDO
          {' '}
          {formatId(id)}
        </th>
        <th>vendedor</th>
        <th>data</th>
        <th>status</th>
        <th>marcação</th>
      </tr>
    </table>);

  useEffect(() => {
    getSaleAndSaveInState();
    // eslint-disable-next-line
  }, []);

  return (
    isFetched
      ? renderTable() : <h1>Loading</h1>);
};

export default DetailOrderTable;
