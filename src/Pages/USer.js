import React, { useState } from "react";
import Header from "../Components/Header";
import { useEffect } from "react";

function USer() {
	  const [storedData, setStoredData] = useState('');
	
	  useEffect(() => {
		const storedValue = localStorage.getItem('All');
		if (storedValue) {
		  setStoredData(storedValue);
		}
	  }, []);
	
	  
	
	

	  return (
		<div>
		  <p>Stored Data: {storedData}</p>
		</div>
	  );
	}

export default USer;
