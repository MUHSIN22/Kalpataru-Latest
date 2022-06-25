import React from 'react';
import Pagination from 'react-bootstrap/Pagination';
import './pagination.css'
export default function App() {
return (
    <div className="pagination">
	<Pagination>
		<Pagination.Prev />
		<Pagination.Ellipsis />
		<Pagination.Item>{3}</Pagination.Item>
		<Pagination.Item>{4}</Pagination.Item>
		<Pagination.Item>{5}</Pagination.Item>
		<Pagination.Ellipsis />
		<Pagination.Next />
	</Pagination>
    </div>
);
}
