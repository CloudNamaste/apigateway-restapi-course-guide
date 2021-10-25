
# POST REQUEST 
```
#set($inputRoot = $input.path('$'))
{
"first_name" : "$inputRoot.first_name",
"last_name" : "$inputRoot.last_name",
"address" : "$inputRoot.address",
"email" : "$inputRoot.email",
"course" : "$inputRoot.course",
"operation" : "$input.params('operation')"
}
```

# GET REQUEST 
```
{
"email" : "$input.params('email')",
"course" : "$input.params('course')",
"operation" : "$input.params('operation')"
}
```

# GET RESPONSE

```
#set($inputRoot = $input.path('$'))
#if($inputRoot.containsKey('Item'))
    {
    "fullName" : "$inputRoot.Item.firstName $inputRoot.Item.lastname",
    "address" : "$inputRoot.Item.address",
    "email" : "$inputRoot.Item.email",
    "result " : "$inputRoot.Item.firstName $inputRoot.Item.lazstname has subscribed to $inputRootItem.course course"
    }
#else
    "Subscriber Not Found !!"
#end
```



# PUT REQUEST
```

#set($inputRoot = $input.path('$'))
{
"first_name" : "$inputRoot.first_name",
"last_name" : "$inputRoot.last_name",
"address" : "$inputRoot.address",
"email" : "$inputRoot.email",
"course" : "$inputRoot.course",
"operation" : "$input.params('operation')"
}
```

# DELETE REQUEST
```
{
"email" : "$input.params('email')",
"course" : "$input.params('course')",
"operation" : "$input.params('operation')"
}
```
