import axios from 'axios';

const BASE_URL = "https://api.thingiverse.com"

class ThingiverseApi {
    static async request(endpoint, paramsOrData = {}, verb = "get") {
      let auth = JSON.parse(window.localStorage.getItem('persist:root')).auth
      let access_token = JSON.parse(auth).access_token
      
    // paramsOrData._token = token

      
      //( for now, hardcode token for "testing"
      // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc" +
      // "3RpbmciLCJpc19hZG1pbiI6ZmFsc2UsImlhdCI6MTU1MzcwMzE1M30." +
      // "COmFETEsTxN_VfIlgIKw0bYJLkvbRQNgO1XCSE8NZ0U");
  
      console.log("API Call:", endpoint, paramsOrData, verb);
  
      try {
        return (await axios({
          method: verb,
          url: `${BASE_URL}/${endpoint}`,
          headers: {"Authorization" : 'Bearer ' + access_token},
          [verb === "get" ? "params" : "data"]: paramsOrData})).data;
          // axios sends query string data via the "params" key,
          // and request body data via the "data" key,
          // so the key we need depends on the HTTP verb
      }
  
      catch(err) {
        console.error("API Error:", err.response);
        let message = err.response.data.message;
        throw Array.isArray(message) ? message : [message];
      }
    }

    static async getAll(handle,days=7){
      let res = await this.request('search',{
        page:1,
        per_page:30,
        sort: 'popular',
        posted_after: `now-${days}d`,
        type: 'thing'
      })
      console.log(res)
      return res
      // https://www.thingiverse.com/search?page=2&per_page=20&sort=popular&posted_after=now-30d&type=things&q=
    }

    static async getCategories(){
      let res = await this.request('categories')
      return res
    }

    static async getFeatured(){
      let res = await this.request('search',{"is_featured":1})
      return res
    }

    static async getLikes(){
      let res = await this.request(`users/marcoh1012/likes`)
      return res
    }

    static async getModel(id){
      let res = await this.request(`things/${id}`)
      return res
    }

    static async likeModel(id){
      //add like to model
      let res = await this.request(`things/${id}/likes`,{}, 'post')
      return res
    }

    static async unlikeModel(id){
      //unlike a model that was already liked.
      let res = await this.request(`things/${id}/likes`, {},'delete')
      return res
    }

    static async getFiles(id){
      //get all files from the model
      let res = await this.request(`things/${id}/files`)
      return res
    }

    static async getComments(id){
      //get all comments from model
      let res = await this.request(`things/${id}/comments`)
      return res
    }

    static async postComment(id, comment){
      //post comment on model
      let res = await this.request('comments/',{"body":comment, 'target_type': "thing",'target_id': parseInt(id)}, "post")
      console.log(res)
      return res
    }
  }

  export default ThingiverseApi