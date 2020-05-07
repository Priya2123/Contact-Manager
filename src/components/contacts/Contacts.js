import React, { Component } from 'react'
import Contact from './Contact';
import {Consumer} from '../../Context';


class Contacts extends Component {

    // deleteContact = (id) => {
    //     const {contacts} = this.state;
    //     const newContacts = contacts.filter(contact => 
    //         contact.id !== id
    //     );
    //     this.setState({contacts: newContacts});//copy of the state without the one that we have deleted
    // };

    
    render() {
        return(
            <Consumer>
                {value => { 
                    const {contacts} = value;
                    return( 
            <React.Fragment>
              <h1 className="display-4 mb-2"><span className="text-danger">Contact</span> List</h1>
                {contacts.map(contact => (
                    <Contact
                    key={contact.id} 
                    contact={contact}
                    />
                    //  name={contact.name}
                    //  email={contact.email}
                    //  phone={contact.phone} />
                ))}
            </React.Fragment>
                    )
                }}
            </Consumer>
        );
       
}
}
export default Contacts;
