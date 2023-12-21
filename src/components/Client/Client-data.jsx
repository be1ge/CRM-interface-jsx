import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Client.module.css';
import { useTable } from 'react-table';

function Data() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        if (data.length === 0) {
            setIsLoading(true);
            try {
                const response = await axios.get(
                    'http://localhost:3000/api/client'
                );
                setData(response.data);
                console.log(response.data);
            } catch (error) {
                setErrorMessage('Failed to fetch data');
            }
            setIsLoading(false);
        }
    };

    const columns = React.useMemo(
        () => [
            {
                Header: 'ID',
                accessor: 'id'
            },
            {
                Header: 'Title',
                accessor: 'title', // accessor is the "key" in the data
            },
            {
                Header: 'Content',
                accessor: 'content', // accessor is the "key" in the data
            },
        ],
        []
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data });

    return (
        <>
            {isLoading ? (
                <div>Loading...</div>
            ) : errorMessage ? (
                <div>{errorMessage}</div>
            ) : (
                <table {...getTableProps()} className={styles.table}>
                    <thead>
                        {headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column) => (
                                    <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {rows.map((row) => {
                            prepareRow(row);
                            return (
                                <tr {...row.getRowProps()}>
                                    {row.cells.map((cell) => {
                                        return (
                                            <td {...cell.getCellProps()}>
                                                {cell.render('Cell')}
                                            </td>
                                        );
                                    })}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            )}
        </>
    );
}

export default Data;