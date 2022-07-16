import * as TYPES from '../../shared/constants/types'

export const getToken = (data: any) =>{
  return {
    type: TYPES.GET_TOKEN,
    payload: data,
  }
}
