const { passengerservice, driverservice } = require('./service')
const printBookingHistory = require('./lib/print-booking-history')

async function main() {
    const stefan = await driverservice.findBy('name', 'Stefan')
    const armagan = await passengerservice.findByName('Armagan')

    armagan.book(stefan, 'Kreuzberg', 'wannsee')
    passengerservice.update(armagan)

    printBookingHistory(armagan)

    console.log(await passengerservice.findBy('location', 'Mitte'))
}

main()
