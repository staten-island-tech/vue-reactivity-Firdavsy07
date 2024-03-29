import { reactive } from 'vue'

const characterList = []
const character = [
  {
    name: 'Agent Venom',
    threat: 4,
    faction: ['Guardians of the Galaxy, SHIELD, Web Warriors'],
    dataSheetFront: '../public/Venom1.png',
    dataSheetBack: '../public/Venom2.png',
    id: 0
  },
  {
    name: 'Amazing Spiderman',
    threat: 5,
    faction: ['Defenders', 'Web Warriors'],
    dataSheetFront: '../public/Spiderman1.png',
    dataSheetBack: '../public/Spiderman2.png',
    id: 1
  },
  {
    name: 'Doctor Strange',
    threat: 5,
    faction: ['Convocation', 'Defenders', 'Midnight Sons'],
    dataSheetFront: '../public/DoctorStrange1.jpg',
    dataSheetBack: '../public/DoctorStrange2.jpg',
    id: 2
  },
  {
    name: 'Iron Man',
    threat: 3,
    faction: ['Avengers', 'SHIELD'],
    dataSheetFront:
      'https://s3.us-west-2.amazonaws.com/assets.acrossthebifrost.com/001/1/iron_man_healthy_revised.png',
    dataSheetBack:
      'https://s3.us-west-2.amazonaws.com/assets.acrossthebifrost.com/001/1/iron_man_injured_revised.png',
    id: 3
  },
  {
    name: 'Magneto',
    threat: 6,
    faction: ['Brotherhood', 'Cabal'],
    dataSheetFront:
      'https://s3-us-west-2.amazonaws.com/assets.acrossthebifrost.com/042/1/magneto_healthy.jpg',
    dataSheetBack:
      'https://s3-us-west-2.amazonaws.com/assets.acrossthebifrost.com/042/1/magneto_injured.jpg',
    id: 4
  }
]
const roster = reactive([])
console.log(character)

export { roster }
export { character }
export { characterList }
