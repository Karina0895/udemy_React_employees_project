import {Component} from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form'

import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {name: "John", salary: 800, increase: true, id: 1},
        {name: "Alex", salary: 1500, increase: false, id: 2},
        {name: "Karyna", salary: 15000, increase: true, id: 3}
      ]
    }
  }

  deleteItem = (id) => {
    this.setState(({data}) => {
      return {
        data: data.filter(item => item.id !== id) //видаляємо елемент по якому клікаємо, формуємо новий масив
      }
    })
  }

  render () {
    return (
      <div className="app">
          <AppInfo/>

          <div className="search-panel">
              <SearchPanel/>
              <AppFilter/>
          </div> 

          <EmployeesList 
            data={this.state.data}
            onDelete={this.deleteItem}/>
          <EmployeesAddForm/>
      </div>
    );
  }
}

export default App;
