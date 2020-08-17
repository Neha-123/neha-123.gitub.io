import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import './App.css';

//INTERCEPTERS
axios.interceptors.request.use(
  config => {
    console.log('method from interceptors', config.method.toUpperCase());
    console.log('url from interceptors', config.url);
    return config;
  }, error => {
    return Promise.reject(error);
  });

//AXIOS GLOBAL
axios.defaults.headers.common['X-Auth-Token'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';



class App extends Component {

  getTodos = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(res => { console.log(res) })
      .catch(err => { console.log(err) });
    console.log('GET Request');
  }

  // POST REQUEST
  addTodo = () => {
    axios
      .post('https://jsonplaceholder.typicode.com/todos', {
        title: "New Todo",
        completed: false
      })
      .then(res => { console.log(res) })
      .catch(err => { console.log(err) });
    console.log('POST Request');
  }

  // PUT/PATCH REQUEST
  updateTodo = () => {

    //PUT Request -----------------------
    // axios
    // .put('https://jsonplaceholder.typicode.com/todos/2', {
    //   title: "New Todo with put",
    //   completed : false
    // })
    // .then(res => {console.log(res)})
    // .catch(err => {console.log(err)});

    //PATCH request -------------------------------
    axios
      .patch('https://jsonplaceholder.typicode.com/todos/3', {
        title: "New Todo with patch",
        completed: false
      })
      .then(res => { console.log(res) })
      .catch(err => { console.log(err) });

    console.log('PUT/PATCH Request');
  }

  // DELETE REQUEST
  removeTodo = () => {

    axios
      .delete('https://jsonplaceholder.typicode.com/todos/3')
      .then(res => { console.log(res) })
      .catch(err => { console.log(err) });
    console.log('DELETE Request');
  }

  // SIMULTANEOUS DATA
  getData = () => {

    axios
      .all([
        axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5'),
        axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
      ])
      .then(axios.spread((todos, post) => console.log(post)))
      // res => {
      // console.log(res[0]); 
      // console.log(res[1]);
      // })
      .catch(err => { console.log(err) });
    console.log('Simultaneous Request');
  }

  // CUSTOM HEADERS
  customHeaders = () => {

    const config = {
      headers: {
        'content-type': 'application/json',
        autherisation: 'some token'
      }
    }

    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title: 'new header',
      completed: false
    },
      config
    )
      .then(res => console.log(res))
      .catch(err => console.log(err));
    console.log('Custom Headers');
  }

  // TRANSFORMING REQUESTS & RESPONSES
  transformResponse = () => {

    const options = {
      method: 'post',
      url: 'https://jsonplaceholder.typicode.com/todos',
      data: {
        title: 'Hello World'
      },
      transformResponse: axios.defaults.transformResponse.concat(data =>
        data.title = data.title.toUpperCase())
    }

    axios(options).then(res => console.log(res));
    console.log('Transform Response');
  }

  // ERROR HANDLING
  errorHandling = () => {

    axios
      .get('https://jsonplaceholder.typicode.com/todoss')
      .then(res => { console.log(res) })
      .catch(err => {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        }
      });
      
    console.log('Error Handling');
  }

  // CANCEL TOKEN
  cancelToken = () => {
    console.log('Cancel Token');
  }




  render() {
    return (
      <div className="App">
        <h1>Axios Crash Course</h1>
        <div className="buttonClass">
          <Button variant="contained" color="primary" onClick={this.getTodos}>GET</Button>
          <Button variant="contained" color="primary" onClick={this.addTodo}>POST</Button>
          <Button variant="contained" color="primary" onClick={this.updateTodo}>PUT/PATCH</Button>
          <Button variant="contained" color="primary" onClick={this.removeTodo}>DELETE</Button>
          <Button variant="contained" color="primary" onClick={this.getData}>Sim Requests</Button>
          <Button variant="contained" color="primary" onClick={this.customHeaders}>
            Custom Headers
              </Button>
          <Button variant="contained" color="primary" onClick={this.transformResponse}>
            Transform
              </Button>
          <Button variant="contained" color="primary" onClick={this.errorHandling}>
            Error Handling
              </Button>
          <Button variant="contained" color="primary" onClick={this.cancelToken}>
            Cancel
              </Button>
        </div>

      </div>
    );
  }

}

export default App;
