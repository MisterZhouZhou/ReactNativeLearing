const User = {
     name:'User',
     properties:{
       name: 'string', //name
       age: {type: 'int', optional: true}
     }
}

export default {
  schema:[User],
}
