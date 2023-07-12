module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('flights', [{
        "flightId": "123457",
        "companyName": "Air India",
        "source": "New Delhi",
        "destination": "Mumbai",
        "departureTime": "2023-07-20T10:00:00Z",
        "arrivalTime": "2023-07-20T14:00:00Z",
        "seat": 60,
        "price": 5000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "flightId": "789013",
        "companyName": "SpiceJet",
        "source": "Mumbai",
        "destination": "Delhi",
        "departureTime": "2023-07-21T10:00:00Z",
        "arrivalTime": "2023-07-21T14:00:00Z",
        "seat": 60,
        "price": 5500,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "flightId": "345679",
        "companyName": "Go First",
        "source": "Chennai",
        "destination": "Bangalore",
        "departureTime": "2023-07-22T10:00:00Z",
        "arrivalTime": "2023-07-22T14:00:00Z",
        "seat": 60,
        "price": 6000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "flightId": "987655",
        "companyName": "Vistara",
        "source": "Guwahati",
        "destination": "Kolkata",
        "departureTime": "2023-07-23T10:00:00Z",
        "arrivalTime": "2023-07-23T14:00:00Z",
        "seat": 60,
        "price": 6500,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "flightId": "123790",
        "companyName": "AirAsia",
        "source": "Bangalore",
        "destination": "Hyderabad",
        "departureTime": "2023-07-24T10:00:00Z",
        "arrivalTime": "2023-07-24T14:00:00Z",
        "seat": 60,
        "price": 7000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "flightId": "456988",
        "companyName": "IndiGo",
        "source": "Pune",
        "destination": "Chennai",
        "departureTime": "2023-07-25T10:00:00Z",
        "arrivalTime": "2023-07-25T14:00:00Z",
        "seat": 60,
        "price": 7500,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "flightId": "789457",
        "companyName": "Akasa Air",
        "source": "New Delhi",
        "destination": "Kolkata",
        "departureTime": "2023-07-26T10:00:00Z",
        "arrivalTime": "2023-07-26T14:00:00Z",
        "seat": 60,
        "price": 8000,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
    },
    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('flights', null, {});
    }
  };