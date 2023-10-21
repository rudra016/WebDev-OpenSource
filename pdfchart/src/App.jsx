import React, { useRef} from 'react';
import './App.css';
import { Button } from '@progress/kendo-react-buttons';
import { PDFExport } from '@progress/kendo-react-pdf';
import CrimeGraph from './components/CrimeGraph'; // Import the CrimeGraph component

const PDF = () => {
  const pdfExportComponent = useRef(null);
  
  const handleExportWithComponent = () => {
    pdfExportComponent.current.save();
  };

  
  return (
    <div id="example">
      {/* <div className="box wide hidden-on-narrow"> */}
        <div className="box-col">
          <Button primary={true} onClick={handleExportWithComponent} className='p-2 m-6 text-white bg-black rounded-md'>
            Download PDF
          </Button>
        </div>
      {/* </div> */}
      <div className="page-container hidden-on-narrow">
        <PDFExport ref={pdfExportComponent}>
          <div className={`pdf-page size-a4`}>
            <div className="inner-page">
              <div className='flex justify-between'>
                <span>
                  <h1 className='font-bold'>US-Crime Report</h1> 
                </span>
                <span className="text-xs font-extrabold p-2">Murder and Nonnegligent Manslaughter rate in the United States</span>
              </div>

              {/* Blur Effect */}
              <div className='glassmorphism flex justify-center py-5 px-4 my-4'>
                <button className='blue_gradient px-3 py-1 mx-2 rounded-xl text-white'>Only Focus on Crime Graph</button>
              </div>
              <div className='glassmorphism flex justify-center py-5 px-4 my-4'>
                <button className='blue_gradient px-3 py-1 mx-2 rounded-xl text-white'>Only Focus on Crime Graph</button>
              </div>
              <div className='glassmorphism flex justify-center py-5 px-4 my-4'>
                <button className='blue_gradient px-3 py-1 mx-2 rounded-xl text-white'>Only Focus on Crime Graph</button>
              </div>

              <div className='flex flex-row'>
                <img src="images/location.png" alt="location" className='object-contain' width={16} height={16}/>
                <span className='font-bold ml-1'>Crime
                </span>
              </div>
                <div className='divide-y divide-blue-700'></div>

              {/* pdf footer */}
              <div className="pdf-footer flex justify-between p-2 mt-6 mb-4 mx-3">
                <span className='text-blue-600 font-extrabold text-xs'>
                Report Genereted on September 26, 2023
                </span>
                <span className='text-black font-extrabold text-xs'>
                Murder Report | Page 1 of 25
                </span>
              </div>

              {/* PDF Chart via API Endpoint */}
              <div className="pdf-chart mb-6">
                {/* Include the CrimeGraph component here */}
                <CrimeGraph />
              </div>
              
            </div>
          </div>
        </PDFExport>
      </div>
    </div>
  );
};

export default PDF;
