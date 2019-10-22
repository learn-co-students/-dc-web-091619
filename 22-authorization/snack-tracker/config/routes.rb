Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get "/", to: "snacks#home", as: "home"
  get "/login", to: "sessions#login"
  post "/login", to: "sessions#process_login"
  get "/logout", to: "sessions#logout"
  resources :snacks
  resources :retailers, except: [:destroy]
  resources :users, only: [:new, :create]
end
