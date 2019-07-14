import * as firebase from 'firebase';
import sagar from '../comp/sagar';
import moment from 'moment'
var firebaseConfig = {
    apiKey: "AIzaSyA6FfiH6RqybbUo_UdqCbajt6epi0RyM1A",
    authDomain: "budget-app-43b6b.firebaseapp.com",
    databaseURL: "https://budget-app-43b6b.firebaseio.com",
    projectId: "budget-app-43b6b",
    storageBucket: "",
    messagingSenderId: "939523702249",
    appId: "1:939523702249:web:c38e453c96b1521c"
  };
  firebase.initializeApp(firebaseConfig);
  const database=firebase.database()
export{firebase,database as default}
 /* firebase.database().ref('expenses').on('value',(snapshot)=>{
    const expenses=[];
    snapshot.forEach((child)=>{
      expenses.push({
        id:child.key,
        ...child.val()
      })

    })
    console.log(expenses);
  })



firebase.database().ref('expenses/-LjfAQGmFIP0kxQtPvX7').remove()


  
 firebase.database().ref().set({name:'harwinder',
age:26,
job:{title:'software-manager',
company:'amazon'

},
location:{city:'mukerian',
    village:'trs'

}

}).then(()=>{
    console.log('data is saved!')
}).catch((error)=>{
    console.log('error:',error)
})
firebase.database().ref('age').set(28);
firebase.database().ref('location/city').set('tanda');

firebase.database().ref('attributes').set({
    height:'6.2 inches',
    weight:96
}).then(()=>{
    console.log('data!')
}).catch((error)=>{
    console.log('error is:',error)
});
firebase.database().ref().update({
  age:39,
  'job/company':'google'

})

firebase.database().ref('age')
.remove()
  .then(function() {
    console.log("Remove succeeded.")
  })
  .catch(function(error) {
    console.log("Remove failed: " + error.message)
  });*/