import axios from "axios";
export default { 
    signup: function(data) {
        return axios.post("/api/signup", data);
    },
    login: function(data) {
        return axios.post("/api/login", data);
    },
    logout: function() {
        return axios.get("/api/logout");
    },
    // Userpage
    name: function(id) {
        return axios.get("/api/user/" + id);
    },
    //creates posts
    createPosts: function(data, id) {
        return axios.post("/api/posts/" + id, data);
    },
    //gets all posts
    getPosts:async function(data) {
        return await axios.get("/api/posts", data);
    },
    uploadPhotoPost: function(data, postId ){
        return axios.post("/api/upload/post/" + postId, data)
    },
    // Photo Upload
    uploadPhoto: function(data, id) {
        console.log(id)
        return axios.post("/api/upload/user/" + id, data);
    }, 
    //this is the front end post page 
    getSinglePost: async function(id) {
        return await axios.get("/api/posts/" + id)
    },
    // Bio 
    bio: function(data, id) {
        return axios.post("/api/bio/" + id, data);
    },
    // Bio Update
    bioGet: async function(data, id) {
        return axios.get("/api/bio/" + id);
    },
    //creates comment
    createComments: function(data, id, userId) {
    return axios.post(`/api/posts/${id}/${userId}/comments`, data);
    },
    //get post into PostPage
    postPull: function(data, id) {
        return axios.post("/api/postId/" + id);
    },
    getUser: async function(id){
        return await axios.get("/api/user/" + id);
    },
    updateLikes: async function(userId, postId){
        return await axios.post("/api/user/" + userId + "/like/" + postId)
    },
    removeLike: async function(userId, postId){
        return await axios.post("/api/user/" + userId + "/unlike/" + postId)
    },
    searchByTag: function(query){
        return axios.get("/api/post/tag/" + query);
    }
}

