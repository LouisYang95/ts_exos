import {randomInt} from "crypto"
import {celsiusToFahrenheit} from './exo4'

const generateTestObj = (): number => {
    return randomInt(-100 , 100)
}

describe('Conversion Celsius to Farenheit', () => {
    it('should convert Celsius to Farenheit', async () => {
        const celsius = generateTestObj()

        console.log(celsius)
        const fahrenheit = celsiusToFahrenheit(celsius)
        console.log('fahrenheit', fahrenheit)
    })
})
