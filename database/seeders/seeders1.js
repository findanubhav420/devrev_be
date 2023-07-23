module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('flights', [
        {
          "flightId": "567801",
          "companyName": "Air India",
          "source": "New Delhi",
          "destination": "Mumbai",
          "departureTime": "2023-07-27T10:00:00Z",
          "arrivalTime": "2023-07-27T14:00:00Z",
          "seat": 60,
          "price": 5000,
          "createdAt": "2023-07-23T08:00:00Z",
          "updatedAt": "2023-07-23T08:00:00Z"
        },
        {
          "flightId": "112233",
          "companyName": "SpiceJet",
          "source": "Mumbai",
          "destination": "Delhi",
          "departureTime": "2023-07-27T10:30:00Z",
          "arrivalTime": "2023-07-27T14:30:00Z",
          "seat": 60,
          "price": 5500,
          "createdAt": "2023-07-23T08:00:00Z",
          "updatedAt": "2023-07-23T08:00:00Z"
        },
        {
          "flightId": "445566",
          "companyName": "Go First",
          "source": "Chennai",
          "destination": "Bangalore",
          "departureTime": "2023-07-27T11:00:00Z",
          "arrivalTime": "2023-07-27T15:00:00Z",
          "seat": 60,
          "price": 6000,
          "createdAt": "2023-07-23T08:00:00Z",
          "updatedAt": "2023-07-23T08:00:00Z"
        },
        {
          "flightId": "778899",
          "companyName": "Vistara",
          "source": "Guwahati",
          "destination": "Kolkata",
          "departureTime": "2023-07-28T10:15:00Z",
          "arrivalTime": "2023-07-28T14:15:00Z",
          "seat": 60,
          "price": 6500,
          "createdAt": "2023-07-23T08:00:00Z",
          "updatedAt": "2023-07-23T08:00:00Z"
        },
        {
          "flightId": "334455",
          "companyName": "AirAsia",
          "source": "Bangalore",
          "destination": "Hyderabad",
          "departureTime": "2023-07-28T11:30:00Z",
          "arrivalTime": "2023-07-28T15:30:00Z",
          "seat": 60,
          "price": 7000,
          "createdAt": "2023-07-23T08:00:00Z",
          "updatedAt": "2023-07-23T08:00:00Z"
        },
        {
          "flightId": "556677",
          "companyName": "IndiGo",
          "source": "Pune",
          "destination": "Chennai",
          "departureTime": "2023-07-29T10:00:00Z",
          "arrivalTime": "2023-07-29T14:00:00Z",
          "seat": 60,
          "price": 7500,
          "createdAt": "2023-07-23T08:00:00Z",
          "updatedAt": "2023-07-23T08:00:00Z"
        },
        {
          "flightId": "889900",
          "companyName": "Akasa Air",
          "source": "New Delhi",
          "destination": "Kolkata",
          "departureTime": "2023-07-29T11:30:00Z",
          "arrivalTime": "2023-07-29T15:30:00Z",
          "seat": 60,
          "price": 8000,
          "createdAt": "2023-07-23T08:00:00Z",
          "updatedAt": "2023-07-23T08:00:00Z"
        },
        {
          "flightId": "123456",
          "companyName": "Air India",
          "source": "Mumbai",
          "destination": "Goa",
          "departureTime": "2023-08-15T12:30:00Z",
          "arrivalTime": "2023-08-15T14:00:00Z",
          "seat": 60,
          "price": 4500,
          "createdAt": "2023-07-23T08:00:00Z",
          "updatedAt": "2023-07-23T08:00:00Z"
        },
        {
          "flightId": "234567",
          "companyName": "SpiceJet",
          "source": "Kolkata",
          "destination": "Bengaluru",
          "departureTime": "2023-08-15T09:00:00Z",
          "arrivalTime": "2023-08-15T12:00:00Z",
          "seat": 60,
          "price": 5600,
          "createdAt": "2023-07-23T08:00:00Z",
          "updatedAt": "2023-07-23T08:00:00Z"
        },
        {
          "flightId": "345678",
          "companyName": "Go First",
          "source": "Delhi",
          "destination": "Hyderabad",
          "departureTime": "2023-08-16T14:00:00Z",
          "arrivalTime": "2023-08-16T17:00:00Z",
          "seat": 60,
          "price": 5800,
          "createdAt": "2023-07-23T08:00:00Z",
          "updatedAt": "2023-07-23T08:00:00Z"
        },
        {
          "flightId": "456789",
          "companyName": "IndiGo",
          "source": "Chennai",
          "destination": "Kolkata",
          "departureTime": "2023-08-16T11:30:00Z",
          "arrivalTime": "2023-08-16T14:30:00Z",
          "seat": 60,
          "price": 5400,
          "createdAt": "2023-07-23T08:00:00Z",
          "updatedAt": "2023-07-23T08:00:00Z"
        },
        {
          "flightId": "567890",
          "companyName": "Air India",
          "source": "Bengaluru",
          "destination": "Delhi",
          "departureTime": "2023-08-17T10:00:00Z",
          "arrivalTime": "2023-08-17T14:00:00Z",
          "seat": 60,
          "price": 6000,
          "createdAt": "2023-07-23T08:00:00Z",
          "updatedAt": "2023-07-23T08:00:00Z"
        },
        {
          "flightId": "678901",
          "companyName": "Vistara",
          "source": "Goa",
          "destination": "Mumbai",
          "departureTime": "2023-08-17T11:15:00Z",
          "arrivalTime": "2023-08-17T14:15:00Z",
          "seat": 60,
          "price": 5900,
          "createdAt": "2023-07-23T08:00:00Z",
          "updatedAt": "2023-07-23T08:00:00Z"
        },
        {
          "flightId": "789012",
          "companyName": "Akasa Air",
          "source": "Hyderabad",
          "destination": "Chennai",
          "departureTime": "2023-08-18T10:30:00Z",
          "arrivalTime": "2023-08-18T14:30:00Z",
          "seat": 60,
          "price": 5700,
          "createdAt": "2023-07-23T08:00:00Z",
          "updatedAt": "2023-07-23T08:00:00Z"
        },
        {
          "flightId": "890123",
          "companyName": "SpiceJet",
          "source": "Mumbai",
          "destination": "Kolkata",
          "departureTime": "2023-08-18T12:00:00Z",
          "arrivalTime": "2023-08-18T15:00:00Z",
          "seat": 60,
          "price": 6200,
          "createdAt": "2023-07-23T08:00:00Z",
          "updatedAt": "2023-07-23T08:00:00Z"
        },
        {
          "flightId": "901234",
          "companyName": "Go First",
          "source": "Delhi",
          "destination": "Bengaluru",
          "departureTime": "2023-08-19T09:30:00Z",
          "arrivalTime": "2023-08-19T12:30:00Z",
          "seat": 60,
          "price": 5800,
          "createdAt": "2023-07-23T08:00:00Z",
          "updatedAt": "2023-07-23T08:00:00Z"
        }
      ]
      );
    },
    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('flights', null, {});
    }
  };