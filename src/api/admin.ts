import  { req } from '@/api/axios'

export const login = async (pswd: string) => {
    const body = {
        'password': pswd
    }
    try {
        const json = await req.post(`admin/login`, body)
        return json.data.token
    } catch (err) { return false }
    
}

export const getEvents = async (authToken: string) => {
    try {
        const config = {
            headers: {
                'Authorization': `Token ${authToken}`
            }
        }
        const json = await req.get(`admin/events`, config)
        return json.data.events
    } catch (err) { return false }
    
}