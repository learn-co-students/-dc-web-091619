require_relative "../palindrome.rb"

describe "PalindromeChecker" do 

    let (:pal_checker) {PalindromeChecker.new}

    it "returns true when input is 'madam'" do 
        expect(pal_checker.is_palindrome?('madam')).to be(true)
    end

    it "returns true when input is 'abba'" do 
        expect(pal_checker.is_palindrome?('abba')).to be(true)
    end

    it "returns false when input is 'banana'" do 
        expect(pal_checker.is_palindrome?('banana')).to be(false)
    end

    it "ignores capitalization and returns true for 'Tacocat'" do 
        expect(pal_checker.is_palindrome?("Tacocat")).to be(true)
    end

    it "ignores spaces and returns true for 'taco cat'" do 
        expect(pal_checker.is_palindrome?('taco cat')).to be(true)
    end

    it "raises an ArgumentError if input is not a string" do 
        expect{pal_checker.is_palindrome?({"a": 1})}.to raise_error ArgumentError

    end

    
end