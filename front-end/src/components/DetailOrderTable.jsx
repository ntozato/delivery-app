import React from 'react';
import formatId from '../helpers/formatId';

const DetailOrderTable = () => {
    return (
        <table>
            <tr>
                <th>pedido</th>
                <th>vendedor</th>
                <th>data</th>
                <th>status</th>
                <th>marcação</th>
            </tr>
        </table>
    )
};

export default DetailOrderTable;
