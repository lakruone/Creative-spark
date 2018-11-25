import React from 'react';

class Profile extends React.Component {
  constructor(props) {
     super(props);
     this.state = {
         items: [],
         isLoaded: false
     }
 }
 componentDidMount() {
     fetch('https://localhost:5000/user')
         .then(res => res.json())
         .then(json => {
             this.setState({
                 isLoaded: true,
                 items: json
             })
         });
 }
 render() {
     var { isLoaded, items } = this.state;
     if (!isLoaded) {
         return <div>Loading...</div>;
     }
     return (
         <div classname="App">

          prifile loaded
         </div>
     );
 }

}
export default Profile;
