import React from 'react';
import { useParams } from 'react-router-dom';
import formatId from '../helpers/formatId';

const DetailOrderTable = () => {
  const { id } = useParams();
  return (
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
    </table>
  );
};

export default DetailOrderTable;
