require('pry')

# classes are used to package related DATA + BEHAVIOR together
# private methods allow for
# some of that data / behavior to
# only be accessible from inside the class itself

class Base

  def call
    return "from public method"
  end

  private
  def private_call
    return "from private method"
  end

end

instance = Base.new()

binding.pry
0
