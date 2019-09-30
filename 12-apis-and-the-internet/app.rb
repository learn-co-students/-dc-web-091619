require 'rest-client'
require 'json'
require 'pry'

GOOGLE_BOOKS_API_BASE_URL = "https://www.googleapis.com/books/v1/volumes?q="


def welcome_user
    puts "Welcome to binding.fly's Super Book Searcher"
end 

def get_search_terms
    puts "What would you like to search for?"
    search_terms = gets.chomp
end

def validate_search_terms(search_terms)
    if search_terms[/[a-zA-Z0-9\s]+/] == search_terms
        return search_terms
    else
        puts "you may only enter letters and numbers and spaces"
        return nil
    end
end

def build_url(search_terms)
    url = GOOGLE_BOOKS_API_BASE_URL + search_terms
end

def get_book_info(url)
    response = RestClient.get(url)
    JSON.parse(response.body)
end

def format_authors(authors)
    if authors
        authors.join(" & ")
    else
        return "Anonymous"
    end
end

def print_results(response)
    response["items"].each do |book_info|
        title = book_info["volumeInfo"]["title"]
        authors = format_authors(book_info["volumeInfo"]["authors"])
        puts "#{title} by #{authors}"
        puts "********************\n\n"
    end
end

def run 
    welcome_user
    search_terms = nil
    while !search_terms
        search_terms = validate_search_terms(get_search_terms)
    end

    url = build_url(search_terms)
    response = get_book_info(url)
    print_results(response)


end

run
