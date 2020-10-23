import {gql,useQuery} from '@apollo/client';
import {GET_LOGGED_USER} from './query'

export const activeUser = () =>{
    const {data} =useQuery(GET_LOGGED_USER)
    return data?.user
}