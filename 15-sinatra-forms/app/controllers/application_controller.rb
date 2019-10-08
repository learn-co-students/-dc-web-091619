class ApplicationController < Sinatra::Base

    set :views, "app/views"
    set :method_override, true

    get "/" do 
        erb :home
    end

    get "/books" do 
        @books = Book.all
        erb :index
    end

    get "/books/new" do 
        #loads blank form
        erb :new
    end

    get "/books/:id" do 
        id = params[:id]
        @book = Book.find(id)
        erb :show
    end

    post "/books" do 
        # binding.pry
        title = params[:title]
        author = params[:author]
        snippet = params[:snippet]
        @book = Book.create(title: title, author: author, snippet:snippet)
        redirect "/books/#{@book.id}"
        # redirect "http://www.google.com"
    end

    get "/books/:id/edit" do
        @book = Book.find(params[:id])
        erb :edit
    end

    patch "/books/:id" do 
        @book = Book.find(params[:id])
        @book.update(title: params[:title],
                     author: params[:author],
                     snippet: params[:snippet])
        redirect "/books/#{@book.id}"
    end

    delete "/books/:id" do 
        @book = Book.find(params[:id])
        @book.destroy
        redirect "/books"
    end

    # get "/funtimes/:first_number/:second_number/:third_number" do
    #     @first = params[:first_number].to_i
    #     @second = params[:second_number].to_i
    #     @third = params[:third_number].to_i
    #     erb :do_now
    # end

end
