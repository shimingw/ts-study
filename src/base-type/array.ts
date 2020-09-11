type person = {
  name: string
  age: number
}
type twoPersons = [person, person]

const person: person = {
  name: 'smw',
  age: 18,
}

const persons1: person[] = [person]

const person2: Array<person> = [person, person, person]

const twoPersons: twoPersons = [person, person]
