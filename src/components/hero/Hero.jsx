import React, { useState } from 'react';
import './Hero.css';
import Paginator from '../paginator/Paginator';
import download from './download.png'


export default function Hero() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10); 

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    
  };

  const [reports, setReports] = useState([
    { timestamp: new Date(), name: 'Report 1' },
    { timestamp: new Date(), name: 'Report 2' },
    { timestamp: new Date(), name: 'Report 3' },
    { timestamp: new Date(), name: 'Report 4' },
    { timestamp: new Date(), name: 'Report 5' },
    { timestamp: new Date(), name: 'Report 6' },
    { timestamp: new Date(), name: 'Report 7' },
    { timestamp: new Date(), name: 'Report 8' },
    { timestamp: new Date(), name: 'Report 9' },
    { timestamp: new Date(), name: 'Report 10' },
    { timestamp: new Date(), name: 'Report 11' },
    { timestamp: new Date(), name: 'Report 12' },
    { timestamp: new Date(), name: 'Report 13' },
    { timestamp: new Date(), name: 'Report 14' },
    { timestamp: new Date(), name: 'Report 15' },
    { timestamp: new Date(), name: 'Report 16' },
    { timestamp: new Date(), name: 'Report 17' },
    
]);

  const handleDownload = (report) => {
    report.timestamp = new Date().toLocaleString();
    setReports([...reports]);
    window.open('https://example.com/sample.pdf');
  };

  const handleItemsPerPageChange = (event) => {
    const selectedItemsPerPage = parseInt(event.target.value, 10);
    setItemsPerPage(selectedItemsPerPage);
    setCurrentPage(1); // Reset to the first page when changing items per page
  };

  // Calculate the start and end index of the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentReports = reports.slice(startIndex, endIndex);

  return (
    <div>
      <div className='header'>
        <div className='row'>
          <div className='column column-title'>Date</div>
          <div className='column column-title'>Report Name</div>
          <div className='column column-title'>Download</div>
        </div>
        {currentReports.map((report, index) => (
          <div className='row' key={index}>
            <div className='column'>      
                <div>{new Date(report.timestamp).toLocaleDateString().split('/').join('.')}</div>
                <div className='time'>{new Date(report.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }).toUpperCase()}</div>
            </div>
            <div className='column'>{report.name}</div>
            <div className='column'>
              <button onClick={() => handleDownload(report)}><img src={download}/></button>
            </div>
          </div>
        ))}
      </div>

    
      <div className='footer'>
        <Paginator 
            currentPage={currentPage}
            totalPages={Math.ceil(reports.length / itemsPerPage)}
            onPageChange={handlePageChange}
            className='paginator'
        />
        <div className='records'>
            <p>Rows per page  </p>
            <select className='option' value={itemsPerPage} onChange={handleItemsPerPageChange}>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
            </select>
            </div>
        </div>
    </div>
  );
}
