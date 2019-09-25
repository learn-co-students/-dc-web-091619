# this class is our interface with the tweets table
# = > ORM (Object Relational Mapper)

# class object (Tweet) represent our table
# each instance of this class represents a row
class Tweet
  ######## CLASS OBJECT DATA/BEHAVIOR

  def self.all
      ## some code to interact with our DB
      sql = "SELECT * from tweets;"

      rows = DB.execute(sql)
      array_of_instances = self.hashes_to_instances(rows)
      return array_of_instances
  end

  def self.hashes_to_instances(array_of_hashes)
      array_of_hashes.map do |tweet_hash|
          Tweet.new(tweet_hash)
      end
  end

  ######## INSTANCE OBJECTS DATA/BEHAVIOR
  attr_accessor :message, :username

  # Takes a hash as an argument
  # and sets the values of the instance variables
  # to the values of the corresponding keys
  def initialize(props={})
    @message = props['message']
    @username = props['username']
    @id = props['id']
  end

  def save
      sql = "INSERT INTO tweets (username, message) VALUES ( ? , ? );"
      # sql = "INSERT INTO tweets (username, message) VALUES ('Bruno'); DROP TABLE students;
      DB.execute(sql, self.username, self.message)
  end

end
