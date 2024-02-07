const printBookinghistory = require('../print-booking-history');

test('prints passenger bookings when a passenger has abooking', () => {
  // initialization
  const passenger = {
    name: 'Armagan',
    bookings: [{
      passenger: { name: 'Armagan' },
      driver: { name: 'Stefan' },
      origin: 'Kreuzberg',
      destination: 'Neukolin'
    }]
  }
  const consoleSpy = jest.spyOn(console, 'log')

  // test
  printBookinghistory(passenger)

  // assertions
  expect(consoleSpy).toHaveBeenCalledWith('Armagan booked Stefan to travel from Kreuzberg to Neukolin')
  
  // teardown
  consoleSpy.mockRestore()
})

test('prints warning message when a passenger has no bookings', () => {
  // initialization
  const passenger = {
    name: 'Armagan',
    bookings: []
  }
  const consoleSpy = jest.spyOn(console, 'log')

  // test
  printBookinghistory(passenger)

  // assertions
  expect(consoleSpy).toHaveBeenCalledWith('Armagan has no bookings yet')
  
  // teardown
  consoleSpy.mockRestore()
})
