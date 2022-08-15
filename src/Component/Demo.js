import React from 'react';
//import logo from './logo.svg';
import Title from './Title';
import Control from './Control';
import Form from './Form';
import List from './List';
import {filter, includes, orderBy as funcOrderBy, remove, reject} from 'lodash';
/* import Direction from '../Router/Direction'; */
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
//const uuidv4 = require('uuid/v4');
import { getDatabase , ref, onValue , set, push , child , get , update} from "firebase/database";
import { collection, query, getDocs, deleteDoc } from "firebase/firestore"; 

class Demo extends React.Component {
  //state có thể đem ra ngoài constructor được
  // state = { 
  //   items     : [],
  //   isShowForm: false,
  //   strSearch :'',
  //   orderBy   :'name',
  //   orderDir  :'asc',
  //   isSelected: null 
  // };
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { 
      items     : [],
      isShowForm: false,
      strSearch :'',
      orderBy   :'name',
      orderDir  :'asc',
      isSelected: null
    };
    //bind đối tượng this cho từng function
    this.handleToggleForm = this.handleToggleForm.bind(this);
    this.closeForm        = this.closeForm.bind(this);
    this.handleSearch     = this.handleSearch.bind(this);
    this.handleSort       = this.handleSort.bind(this);
    this.handleDelete     = this.handleDelete.bind(this);
    this.handleSubmit     = this.handleSubmit.bind(this);
    this.handleEdit       = this.handleEdit.bind(this);
  }
  /* componentWillUnmount() {
    let items = JSON.parse(localStorage.getItem('product'));
    this.setState({
      items:items,
    });
  } */
  UNSAFE_componentWillMount() {
    let items = JSON.parse(localStorage.getItem('product'));
    //dung api
    /* axios
      .get('https://azshops.herokuapp.com/api/mst/category?parentId=1')
      .then((response) => {
        if(response.data.data!=[]){
          this.setState({
            items:response.data.data,
          });
        }
        else{
          this.setState({
            items:items,
          });
        }
      })
      .catch((error) => {
        console.log('error', error)
      }); */

      //dung firebase
      const db = getDatabase();
      let array = [];
      const starCountRef = ref(db, 'data');
      onValue(starCountRef, (snapshot) => {
        //datafirebase = JSON.parse(JSON.stringify(snapshot.val()))
        array = [];
        snapshot.forEach((child) => {
          //array.push(child.val());
          
          if(JSON.parse(JSON.stringify(snapshot.val()))!=[]){
            var item = {
              key : child.key,
              id : child.val().id,
              name : child.val().name,
              parentId : child.val().parentId
            }
            array.push(item);
            this.setState({
              items:array
            });
          }
          else{
            this.setState({
              items:items,
            });
          }
        });
      });
      localStorage.setItem('product', JSON.stringify(array));
    //end dung firebase
    }
  handleSubmit(item){
    /* let {items} = this.state;
    let id      = null;
    if(item.id !==''){
      items = reject(items, { id: item.id });
      id = item.id;
    }else{
      id = uuidv4();
    }
    items.push({
      id    : id,
      name  : item.name,
      size  : +item.size
    })
    this.setState({
      items:items,
      isShowForm: false
    });
    localStorage.setItem('product', JSON.stringify(items)); */

    //firebase
    const db = getDatabase();
    //let id      = null;
    const items = ref(db, 'data/');
    //const items = doc(collection(db, "data"));
    console.log(item, item.key);
    if(item.id != ''){
      //let id      = null;
      var updates = {
        name: item.name,
        id: item.id,
        parentId : +item.size
      }
      update(ref(db, 'data/' + item.key), updates)
      .then(() => {
        // Data saved successfully!
        alert('Edit data successfully!');
      })
      .catch((error) => {
        // The write failed...
        alert('The edit failed...');
      });
      //await updateDoc(items, item);
    } else{
      var id = uuidv4();
      const newitem = push(items);
      set(newitem, {
        name: item.name,
        id: id,
        parentId : +item.size
      })
      .then(() => {
        // Data saved successfully!
        alert('Data saved successfully!');
      })
      .catch((error) => {
        // The write failed...
        alert('The write failed...');
      });
    }
    this.setState({
      //items:items,
      isShowForm: false
    });
    localStorage.setItem('product', JSON.stringify(items));
  }
  handleEdit(item){
    this.setState({
      itemSelected: item,
      isShowForm: true
    })
  }
  handleDelete(id, key){
    /* let items = this.state.items;
    remove(items,(item)=>{
      return item.id === id;
    });
    this.setState({
      items:items
    });
    localStorage.setItem('product', JSON.stringify(items)); */

    //dung firebase
    
    
    const db = getDatabase();
    const items = ref(db, 'data/');
    const updates={
      id: null,
      parentId : null,
      name: null
    }
    this.setState({
      items:items,
      isShowForm: false
    });
    update(ref(db, 'data/' + key), updates)
    .then(() => {
      // Data saved successfully!
      alert('Delete successfully!');
    })
    .catch((error) => {
      // The write failed...
      alert('The delete failed...');
    });
    localStorage.setItem('product', JSON.stringify(items));
  //end dung firebase
  }
  handleSort(orderBy, orderDir){
  //handleSort = (orderBy, orderDir) => {}
  //cách viết theo kiểu arrow function, nếu dùng cách này thì không cần bind đối tượng this cho từng function ở constructor
    this.setState({
      orderBy : orderBy,
      orderDir:orderDir
    });
  }
  handleToggleForm(){
  //handleToggleForm = () => {}
  //cách viết theo kiểu arrow function, nếu dùng cách này thì không cần bind đối tượng this cho từng function ở constructor
    this.setState({
      isShowForm: !this.state.isShowForm,
      itemSelected: null
    })
  }
  handleSearch(value){
    this.setState({
      strSearch:value
    });
  }
  closeForm(){
    this.setState({
      isShowForm: false
    })
  }
  render() {
    let elmForm     = null;
    let itemsOrigin = (this.state.items !== null) ? [...this.state.items] : [];
    /* this.setState({
      items : array
    }); */
    
    //let itemsOrigin = (this.state.items !== null) ? array : []; //dung firebase
    let items       = [];
    let {orderBy, orderDir, isShowForm, strSearch, itemSelected} = this.state;

    //Search
    items = filter(itemsOrigin, (item) => {
      //return includes(item.name.toLowerCase(), strSearch.toLowerCase());
      return includes(item.name, strSearch);
    });
    
    //Sort
    items = funcOrderBy(items, [orderBy], [orderDir]);

    if(isShowForm){
      elmForm=<Form
        itemSelected={itemSelected}
        onClickSubmit={this.handleSubmit}
        onclickCancel={this.closeForm}
      />;
    }
    return (
      <div>
        {/* <Direction/> */}
        <Title/>
        <hr/>
        <Control 
          orderBy={orderBy}
          orderDir={orderDir}
          onClickSearchGo={this.handleSearch}
          onClickSort={this.handleSort}
          onClickAdd={this.handleToggleForm}
          isShowForm={isShowForm}
        />
        { elmForm }
        <h3>List product</h3>
        <List 
          onClickEdit={this.handleEdit}
          onClickDelete={this.handleDelete}
          items={items}
        />
      </div>
    );
  }
}

export default Demo;
