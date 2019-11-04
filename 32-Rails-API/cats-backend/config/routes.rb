Rails.application.routes.draw do
  get '/hobbies', to: 'hobbies#index'
  get '/randomHobby', to: 'hobbies#random'
  get '/cats', to: 'cats#index'
  get '/catHobbies', to: 'cat_hobbies#index'
  post '/cats', to: 'cats#create'
  delete '/cats/:id', to: 'cats#destroy' 
  patch '/cats/:id', to: 'cats#update'
end

	