import React from 'react'
import Contacts from '../../contacts.json'


const styles = {
    height: '50px',
    width: '50px',
}


const newArr = []


for(let i = 0; i < 5; i++) {
    const randomIndex = Math.floor(Math.random() * Contacts.length)
    newArr.push(Contacts[randomIndex]);
}

export default class contactInfo extends React.Component {
constructor(props) {
    super(props);
     this.state = {
        contactList: newArr,
    }
    // this.addRandomContact = this.addRandomContact.bind(this)

}

// checkIfExists = () =>{
//     const randomIndex = Math.floor(Math.random() * Contacts.length)

//     newArr.filter((contact) => {
//         if(Contacts[randomIndex].id === contact.id){
//             console.log('exists')
//         }
//     })
// }

   
addRandomContact =  () => {
    const randomIndex = Math.floor(Math.random() * Contacts.length)
    const newContact = Contacts[randomIndex]
    const contactExists = newArr.some(users =>
        users.id === newContact.id);
    if(!contactExists){
        newArr.push(newContact);
        this.setState({
            contactList: newArr,
        })
    } else{
        return new Error({error:'User exists'})
    }
}

sortByName = () => {
     newArr.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
    this.setState({
        contactList: newArr,
    })
}

sortByPopularity = () => {
    newArr.sort((a, b) => a.popularity - b.popularity) 
    this.setState({
        contactList: newArr,
    })
}

deleteContact = (id) => {
  const contactNew = this.state.contactList;
  const contactIndex = contactNew.findIndex((item) => item.id === id)
  contactNew.splice(contactIndex, 1)

  this.setState({
      contactList: contactNew,
  })
    
}

    render() {
        return (
            <div>
                <h1>Contacts</h1>
                <button type="button" onClick={this.addRandomContact}>
                    Add Contact
                </button>
                <button type="button" onClick={this.sortByPopularity}>
                    Sort By Popularity
                </button>
                <button type="button" onClick={this.sortByName}  >
                    Sort By Name
                </button>
                <table>
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Popularity</th>
                    </tr>
                    {this.state.contactList.map((contact)=>(
                        <tr>
                            <td><img src={contact.pictureUrl} style={styles} /></td>
                            <td>{contact.name}</td>
                            <td>{contact.popularity}</td>
                            <button onClick={() => this.deleteContact(contact.id)}>
                                Delete
                            </button>
                        </tr>
                    ))}
                    <tr>
                        <td></td>
                    </tr>
                </table>

               
            </div>

        )
    }
}
