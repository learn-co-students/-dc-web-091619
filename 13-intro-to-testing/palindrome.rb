require 'pry'

class PalindromeChecker

    def is_palindrome?(str)
      raise ArgumentError unless str.is_a? String
      str.gsub!(/\s/, "")
      str.downcase!
      if str.length <= 1
        return true
      elsif str[0] == str[-1]
        shorter_string = str[1...-1]
        return is_palindrome?(shorter_string)
      else
        return false
      end
    end

end

