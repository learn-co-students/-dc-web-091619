require('pry')

# a method with a set number of arguments
# will throw an ArgumentError if we don't pass in correct amount of args

def regular_method(x, y)
  # inside regular_method
  binding.pry
  return 1
end

# DEFAULT ARGUMENTS allow us to get around ArgumentErrors
# by building a method
# that has defaults for arguments, if none passed in

def default_args_method(x = "default x")
  # inside default_args_method
  binding.pry
  return 1
end

binding.pry
0
