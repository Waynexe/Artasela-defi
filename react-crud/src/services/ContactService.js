import http from "../http-common";
const getAll = () => {
  return http.get("/users");
};
const get = id => {
  return http.get(`/users/${id}`);
};
const create = data => {
  return http.post("/users", data);
};
const update = (id, data) => {
  return http.put(`/users/${id}`, data);
};
const remove = id => {
  return http.delete(`/users/${id}`);
};
const removeAll = () => {
  return http.delete(`/users`);
};
const findByLname = lname => {
  return http.get(`/users?lname=${lname}`);
};
const ContactService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByLname
};
export default ContactService;