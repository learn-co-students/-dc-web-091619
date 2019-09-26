require 'bundler/setup'
Bundler.require
require 'sinatra/activerecord/rake'
# 
require_relative '../lib/author.rb'
require_relative '../lib/book.rb'

# setting up the database connection (old way)
# DB = SQLite3::Database.new("db/library.db")

ActiveRecord::Base.establish_connection(
  adapter: 'sqlite3',
  database: "db/library.db"
)

ActiveRecord::Base.logger = Logger.new(STDOUT)
