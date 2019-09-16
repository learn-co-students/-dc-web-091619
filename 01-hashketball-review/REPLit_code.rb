#### Ruby Iterators ####


# why are there synonymous methods?
## make developers that are coming from different languages happy

# use the docs!
## memorizing iterators comes with time
## in the mean time, stay resourceful!


              # 5       5       4           6
our_array = ["hello", "world", "hola", "mundoo"]

# .each
  # returns the original array / hash
  each_return_value = our_array.each do |word|
    puts word.upcase
  end

# ----------------------------------------------------
# .map / .collect

  # the return value is the length as original array / hash

  # original array / hash is unchanged
  # returns a new array / hash with the result of the block
  map_return_value = our_array.map do |word|
    word.upcase
  end

# ----------------------------------------------------

# .select / .find_all
  # return a new hash / array
  # size of array depends on: what met our condition
  # returns the ALL items in the collection that meet
    # the criteria specified in the block
select_return_value = our_array.select do |word|
  word.length == 5
end

# ----------------------------------------------------

# .find / .detect
# returns the FIRST item in the collection that meets
  # the criteria specified in the block
find_return_value = our_array.find do |word|
  word.length == 5
end
