import {SET_PAGE, SET_DAYS} from './types'

  
  function set_page(pg){
    return { type: SET_PAGE, payload: pg}
  }
  function set_days(days){
    return { type: SET_DAYS, payload: days}
  }
  
  
  export { set_days, set_page }