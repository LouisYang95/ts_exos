import { randomInt, randomBytes } from 'crypto'
import {sortByDate} from './exo2'

interface Subject {
    id: number,
    name?: string,
    created_at?: string | Date,
}

interface Obj {
    [key: string]: Subject
}

const generateTestObj = (n: number) => {
    const testObj: Obj = {}
    for (let i = 0; i < n; i++) {
        const isoTime = new Date(randomInt(1691102965811, 1696102965811)).toISOString()
        testObj[isoTime] = {
            id: i,
            name: randomBytes(5).toString('hex')
        }
    }
    return testObj
}

describe('sortByDate', () => {
    it('should make code sort by date in DESC', async () => {
        const obj = generateTestObj(4)
        console.log(obj)
        const sortedTab = sortByDate(obj)
        console.log('tab', sortedTab)
    })
    it('should make code sort by date in ASC', async () => {
        const obj = generateTestObj(4)
        console.log(obj)
        const sortedTab = sortByDate(obj, true)
        console.log('tab', sortedTab)
    })
})
