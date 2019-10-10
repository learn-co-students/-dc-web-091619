Book.destroy_all
Author.destroy_all

GoogleBooks::Adapter.new("Roald Dahl").fetch_books
GoogleBooks::Adapter.new("Frank Herbert").fetch_books
GoogleBooks::Adapter.new("Agatha Christie").fetch_books