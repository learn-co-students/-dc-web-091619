# Intro to ORMs (Object Relational Mappers)
---
### Introduce app as it stands (demo)
- problem: the app lacks data persistence
- solution: using a database!

### Explore the codebase
- environment.rb
    * constants demo
    * modules demo
- Tweet.rb
    * key arguments demo
    * default arguments demo
- TweetsApp.rb
    * separation of concerns: this class deals with user-interface
    * model (Tweet.rb) responsible for tweet CRUD

### Lets tackle adding persistence
- schema for tweets
    * tweets table!
    * based on the Tweet class, what should the table look like?
    * is there anything that needs to be added to our instances to represent the row fully?

### ORM
- Object-Oriented way to represent our database table
    * (encapsulate *Data* & *CRUD Behavior*)
- the whole table --> represented by the Class object (`Tweet`)
- each row of the table --> represented by an instance of the class

### Build out CRUD functionality
- Read
    * seed the twitter.db
    * build out `Tweet.all` & have it return instances
    * build out `Tweet.find` if time allows
    * *explain ORM diagram*
- Create
    * build `#save` method
    * build against SQL injection
    * update #<Tweet> @id
- Update
    * edit the `#save` method
    * if this #<Tweet> is new, then INSERT ---- else UPDATE
- Destroy
    * build out `#destroy`
    * build out `Tweet.destroy` if time allows
