import React from 'react'
import './App.css';
import contacts from './contacts.json'
import Contact from "./components/Contact"
class App extends React.Component {
  state = {
    contactData:  contacts 
  }
   
  
  // getContactData = (contactData) =>{
  //   return contactData.map((contact, index) => {
  //     return (
  //       <div>
  //           <tr>
  //           <td key={contact.name}><p>{contact.name}</p></td>
  //         </tr>
  //         <tr>
  //           <td key={contact.popularity}><p>{contact.popularity}</p></td>
  //         </tr>
  //         <tr>
  //           <td key={contact.picture}> <img className="profImg" src={contact.pictureUrl}></img></td>
  //         </tr>
  //       </div>
  //     )
  // })
  // }
  
  render (){
    return (
      <div className="App">
      {/* <table>
           <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
        {this.getContactData(this.state.contactData)}
      </table> */}
      <Contact/>
      </div>
    )
  }


}

export default App;
