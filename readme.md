**Install**

```
npm install @partially-applied/whitespace 
```

**How to Use**

```livescript

whitespace = require '@partially-applied/whitespace'

whitespace 1 # " "
whitespace 2 # "  " 
whitespace 5 # "     " [1]
whitespace 5 # "     " returns cached string from [1]

```


