class BooksController < Sinatra::Base

    set :views, "app/views/books"
    set :method_override, true

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
        title = params[:title]
        author_id = params[:author]
        snippet = params[:snippet]
        @book = Book.create(title: title, author_id: author_id, snippet:snippet)
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

end