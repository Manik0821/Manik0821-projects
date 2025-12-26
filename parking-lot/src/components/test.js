const lotmap = [
    { id: "A1", spotType: "Car",   parkedStatus: true },
    { id: "B1", spotType: "Bike",  parkedStatus: false },
    { id: "C1", spotType: "Car",   parkedStatus: false },
    { id: "D1", spotType: "Truck", parkedStatus: true }
  ];
  
  document.getElementById("checkBtn").addEventListener("click", () => {
    const vehicle = document.getElementById("vehicle").value;
  
    // find first available spot
    const spot = lotmap.find(
      s => s.spotType === vehicle && s.parkedStatus === false
    );
  
    const result = document.getElementById("result");
    if (spot) {
      result.textContent = `First available ${vehicle} spot: ${spot.id}`;
    } else {
      result.textContent = `No ${vehicle} spots available.`;
    }
    console.log(result);
  });
  