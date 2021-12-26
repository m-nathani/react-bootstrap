import { API_ENDPOINT_VERSION } from 'constants/app';
import HttpRequest from 'utils/http-request';

class TodoApi extends HttpRequest {
  constructor() {
    super(`${API_ENDPOINT_VERSION}/todo`);
  }

  fetchTodos = (config) => this.fetch(`/`, config);

  fetchTodoById = (todoId, config) => this.fetch(`/${todoId}`, config);

  postTodo = (todoId, data) => this.create(`/${todoId}`, data);

  patchTodo = (todoId, data) => this.patch(`/${todoId}`, data);

  updateTodo = (todoId, data) => this.update(`/${todoId}`, data);

  deleteTodo = (todoId) => this.remove(`/${todoId}`);
}

export default new TodoApi();
