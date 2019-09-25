require('pry')

# CONSTANTS are conventionally written in all-caps

EXAMPLE_CONSTANT = "I am a constant"

$example_variable = "I am a variable"

# but the real requirement is that the first letter be capitalized

def some_method
  # puts EXAMPLE_CONSTANT
  puts $example_variable
end

binding.pry
0
