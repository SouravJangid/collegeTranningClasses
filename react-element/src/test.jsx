function Test() {
    const calculate = (operation) => {
      const radiusElement = document.getElementById("radius");
      const heightElement = document.getElementById("height");
      const resultElement = document.getElementById("result");
      const errorElement = document.getElementById("error");
  
      const radius = radiusElement.value;
      const height = heightElement.value;
  
      // Clear any previous errors
      errorElement.innerText = "";
  
      // Validation for radius
      if (!radius || radius <= 0) {
        errorElement.innerText = "Please enter a valid radius greater than 0.";
        return;
      }
  
      // Validation for height (only for cone and cylinder)
      if (operation !== "sphere" && (!height || height <= 0)) {
        errorElement.innerText = "Please enter a valid height greater than 0.";
        return;
      }
  
      const num1 = parseFloat(radius);
      const num2 = parseFloat(height);
  
      let volume = 0;
      switch (operation) {
        case 'cone':
          volume = (1 / 3) * Math.PI * Math.pow(num1, 2) * num2;
          break;
        case 'cylinder':
          volume = Math.PI * Math.pow(num1, 2) * num2;
          break;
        case 'sphere':
          volume = (4 / 3) * Math.PI * Math.pow(num1, 3);
          break;
        default:
          volume = 0;
      }
  
      resultElement.value = volume.toFixed(2); // Set result with 2 decimal places
    };
  
    return (
      <>
        <h1 style={{ textAlign: 'center', color: '#333', fontSize: '24px' }}>Volume Calculator</h1>
        <div style={{ maxWidth: '300px', margin: '0 auto', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
          <label style={{ fontWeight: 'bold' }}>Radius:</label>
          <input
            type="number"
            id="radius"
            placeholder="Enter radius"
            style={{ marginLeft: '10px', padding: '5px', borderRadius: '4px', border: '1px solid #ccc', width: '100%' }}
          />
          <br /><br />
          <label style={{ fontWeight: 'bold' }}>Height (for cone and cylinder):</label>
          <input
            type="number"
            id="height"
            placeholder="Enter height"
            style={{ marginLeft: '10px', padding: '5px', borderRadius: '4px', border: '1px solid #ccc', width: '100%' }}
          />
          <br /><br />
  
          {/* Error message element */}
          <div id="error" style={{ color: 'red', marginBottom: '10px' }}></div>
  
          <label style={{ fontWeight: 'bold' }}>Volume:</label>
          <input
            type="text"
            id="result"
            readOnly
            style={{ marginLeft: '10px', padding: '5px', borderRadius: '4px', border: '1px solid #ccc', width: '100%', backgroundColor: '#f9f9f9' }}
          />
          <br /><br />
          <div style={{ textAlign: 'center' }}>
            <button
              onClick={() => calculate("cone")}
              style={{
                padding: '10px 20px',
                marginRight: '10px',
                backgroundColor: '#4CAF50',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              Cone
            </button>
            <button
              onClick={() => calculate("cylinder")}
              style={{
                padding: '10px 20px',
                marginRight: '10px',
                backgroundColor: '#2196F3',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              Cylinder
            </button>
            <button
              onClick={() => calculate("sphere")}
              style={{
                padding: '10px 20px',
                backgroundColor: '#FF9800',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              Sphere
            </button>
          </div>
        </div>
      </>
    );
  }
  
  export default Test;
  