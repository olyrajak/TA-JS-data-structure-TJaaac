```js
let user = {
  name: "Arya",
  sibling: ["Robb", "Ryan", "John"],
};
let allBrothers = ["Robb", "Ryan", "John"];
let brothersCopy = user.sibling;
let usename = user.name;
let newUser = user;
```

1. Memory representation

- Create the memory representation of the above snippet on notebook.
- Take a photo/screenshot and add it to the folder `code`

To add this image here use ![name](./hello.jpg)

2. Answer the following with reason:

- `user == newUser;`
  <!-- //output True -->
  <!-- we assign the the value of user in newUser
  so the value of user and newUser Is same.

   -->
   <!-- output and reason -->

- `user === newUser;`
<!-- true
the value of user is been stored in newUser.
 -->
- `user.name === newUser.name;`
<!-- true
the value of user.name is been stored in newUser.name .
 -->
- `user.name == newUser.name;`
<!-- true
the value of user.name is been stored in newUser.name .
 -->
- `user.sibling == newUser.sibling;`
<!-- true
the value of user.sibling is been stored in newUser.sibling .
 -->
- `user.sibling === newUser.sibling;`
<!-- true
the value of user.sibling is been stored in newUser.sibling .
 -->
- `user.sibling == allBrothers;`
<!-- false
because they different memory location
 -->
- `user.sibling === allBrothers;`
<!-- false
because they different memory location
 -->
- `brothersCopy === allBrothers;`
<!-- false
because they different memory location
 -->
- `brothersCopy == allBrothers;`
<!-- false
because they different memory location
 -->

- `brothersCopy == user.sibling;`
<!-- true
the value of user.sibling has been same brothersCopy .
 -->
- `brothersCopy === user.sibling;`
<!-- true
the value of user.sibling has been same brothersCopy .
 -->
- `brothersCopy[0] === user.sibling[0];`
<!-- true
the value of user.sibling has been same brothersCopy .
 -->
- `brothersCopy[1] === user.sibling[1];`
<!-- true
the value of user.sibling has been same brothersCopy .
 -->
- `user.sibling[1] === newUser.sibling[1];`
<!-- true
the value of user.sibling has been same brothersCopy .
 -->
