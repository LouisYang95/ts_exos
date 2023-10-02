import axios from 'axios';

export async function getUserSummary(userId: number) {
    try{
        const data = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
        if(data){
            return `${data.data.name} (${data.data.username}) - ${data.data.email}`
        }else{
            return 'User not found'
        }
    }catch(error: any){
        throw Error('User not found')
    }
}

getUserSummary(1).then(r => console.log(r))
