Rails.application.routes.draw do
  # localhost:3000/api/v1/

  namespace :api do
    namespace :v1 do
      get '/profile', to: 'users#show'

      resources :users, only: [:index] #route only used for testing/debugging

      post '/fakelogin', to: 'auth#fake_create' #1. build out fake auth

      post '/login', to: 'auth#create'


    end
  end
end
