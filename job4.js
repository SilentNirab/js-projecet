function findAddress(obj) {
    const street = obj.street || '__';
    const house = obj.house || '__';
    const society = obj.society || '__';
  
    const output = `Street: ${street}\nHouse: ${house}\nSocity: ${society}`;
    return output;
}
  
  const sampleObj = {
    street:"",
    house:"15A",
    society:"EarthPerfect"
  }
    
  const result = findAddress(sampleObj);
  console.log(result);