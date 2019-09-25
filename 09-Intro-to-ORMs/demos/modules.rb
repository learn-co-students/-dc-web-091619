require('pry')

# Modules are used to package classes together
# Creating an additional layer of encapsulation
# Allows each module can have same-named classes!

module Module1
  class Base

    def self.call
      return "in Module1::Base"
    end

  end
end

module Module2
  class Base

    def self.call
      return "in Module2::Base"
    end

  end
end


# Module2::Base.call
binding.pry
0
