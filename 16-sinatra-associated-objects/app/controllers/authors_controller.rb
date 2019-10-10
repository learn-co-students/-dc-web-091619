class AuthorsController < Sinatra::Base

    set :views, "app/views/authors"
    
    get "/authors" do 
        @authors = Author.all
        erb :index
    end

    get "/authors/new" do 

        erb :new
    end

    post "/authors" do
        author = Author.find_or_create_by(name: params[:name])
        params["book"].each do |book_hash|
            title = book_hash[:title]
            if !title.empty?
                Book.find_or_create_by(title: title, 
                                       snippet: book_hash[:snippet],
                                       author: author)
            end
        end
        redirect "/authors/#{author.id}"
    end

    get "/authors/:id" do
        @author = Author.find(params[:id])
        erb :show
    end

end