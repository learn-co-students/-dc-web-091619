# One to Many Relationships

## Review - Let's build Twitter!
 - Or... at least the Minimum Viable Product(MVP) aka Skateboard
 - https://i.pinimg.com/originals/18/11/c7/1811c7266a60cf87b8765de2a4c99edc.jpg
 - Our User should have many tweets: @tweets = []
 - But what if we want our tweets to be more robust?

## Objectives

* Implement one object to many objects relationship
  * One User has many Tweets
  * One Tweet belongs to a User
* Demonstrate single source of truth
* Infer type of method (class or instance) through naming conventions
* Practice passing custom objects as arguments to methods

## Deliverables

#### Code a Little Test a Little
#### Test Driven Development

* Create a User class. The class should have these methods:
  X `#initialize` which takes a username and have a reader method for the username
  X `#tweets` that returns an array of Tweet instances
  X `#post_tweet` that takes a message, creates a new tweet, and adds it to the user's tweet collection
* Create a Tweet class. The class should have these methods:
  X `#initialize` which takes a message and have a reader method for the message
  X `#message` that returns a string
  X `#user` that returns an instance of the user class
  X `.all` that returns all the Tweets created.
  X `#username` that returns the username of the tweet's user