let total = 0;

    function showDogInfo(name, breed, fees) {
      alert(`Dog's Name: ${name}\nBreed: ${breed}\nAdoption Fees: $${fees}`);
    }

    function addToTotal(fees) {
      total += fees;
      alert(`Total adoption fees: $${total}`);
    }