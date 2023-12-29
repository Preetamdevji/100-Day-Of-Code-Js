// Provide an example of using optional chaining within a loop to access a potentially missing property of an object.
const users = [
    { id: 1, name: 'Eshwer', address: { city: 'America' } },
    { id: 2, name: 'Sanjesh', address: null },
    { id: 3, name: 'Preetam' }
  ];
  
  for (const user of users) {
    const city = user?.address?.city;
    if (city !== undefined) {
      console.log(`${user.name}'s city: ${city}`);
    } else {
      console.log(`${user.name} has no city information.`);
    }
  }
  