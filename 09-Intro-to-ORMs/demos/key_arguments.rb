require('pry')

# a method with a set number of arguments
# will throw an ArgumentError if we don't pass in correct amount of args

def regular_method(x, y)
  # inside regular_method
  binding.pry
  return 1
end

# KEY ARGUMENTS allow us to get around ArgumentErrors
# by building a method
# that takes in a varying number of arguments

def key_args_method(hash_of_arguments)
  # inside key_args_method
  binding.pry
  return 1
end

binding.pry
0
