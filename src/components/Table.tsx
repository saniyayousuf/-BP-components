import React from 'react';
import '../App.css';


interface DataSourceItem {
  id: number;
  name: string;
  age: number;
  isStudent: boolean;
}

interface TableColumn {
  key: keyof DataSourceItem;
  heading: string;
}

interface DynamicTableProps {
  data: DataSourceItem[];
  columns: TableColumn[];
}

const DynamicTable: React.FC<DynamicTableProps> = ({ data, columns }) => {
  return (
    <table className='table table-striped table-bordered '>
      <thead>
        <h1 >Students Status</h1>
        <tr>
          {columns.map((column) => (
            <th key={column.key.toString()}>{column.heading}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            {columns.map((column) => (
              <td key={column.key.toString()}> {column.key === 'isStudent'
              ? item[column.key]
                ? 'Yes'
                : 'No'
              : item[column.key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DynamicTable;
