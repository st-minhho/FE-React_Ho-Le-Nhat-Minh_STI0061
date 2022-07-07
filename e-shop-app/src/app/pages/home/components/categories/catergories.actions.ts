import * as TYPES from '../../../../shared/types'

export const filterProduct = (categories: any) =>{
  return {
    type: TYPES.FILTER_PRODUCT,
    payload: categories,
  }
}
