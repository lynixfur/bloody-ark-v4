import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ClusterSelector = () => {

    const [options, setOptions] = useState([]);
    const [loading, setLoading] = useState(true); // Manage loading state

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const toggleDropdown = () => setIsOpen(!isOpen);

    // Fetch default option from the API
    useEffect(() => {
        const fetchDefaultOption = async () => {
          try {
            const response = await axios.get('/api/hub/cluster_selector');
            const fetchedOptions = response.data.clusters; // Adjust based on API response format
    
            setOptions(fetchedOptions);
    
            // Set default option if not already set
            if (!selectedOption && fetchedOptions.length > 0) {
              const defaultOption = fetchedOptions[0].name;
              setSelectedOption(defaultOption);
              localStorage.setItem('selectedOption', defaultOption);
            }
          } catch (error) {
            console.error('Error fetching default option:', error);
          } finally {
            setLoading(false);
          }
        };
    
        fetchDefaultOption();
      }, [selectedOption]);

    const handleOptionClick = (option: any) => {
        setSelectedOption(option);
        setIsOpen(false);

        // Set Clientside Cluster
        localStorage.setItem('activeClusterHub', option);
    };

    return (
        <>
           {options.length > 0 && (<><div className="relative inline-block text-left mb-3 px-5 w-full">
            <button
                className="w-full bg-[#2b2b2b] border border-gray-600 text-white px-4 py-2 shadow-md hover:bg-blue-600 focus:outline-none"
                onClick={toggleDropdown}
            >
                <div className='flex items-center justify-center font-semibold'>
                    <i className={"fa-solid fa-circle text-green-600 text-xs mr-2"} /> {selectedOption || 'Select an option'}
                </div>
            </button>
            {isOpen && (
                <ul className="absolute mt-2 w-full bg-[#2b2b2b] border border-gray-600 shadow-lg z-10">
                    {options.map((option: any, index) => (
                        <li
                            key={index}
                            className="px-4 py-2 cursor-pointer hover:bg-gray-950"
                            onClick={() => handleOptionClick(option.name)}
                        >
                            {option.name}
                        </li>
                    ))}
                </ul>
            )}
        </div></>)}
        </>
    );
};

export default ClusterSelector;
