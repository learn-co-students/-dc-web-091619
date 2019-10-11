Rails.application.routes.draw do
  
  
  get '/pets', to: "pets#index"
  get '/pets/:id', to: "pets#show"
  get '/cats', to: "cats#index"

end
