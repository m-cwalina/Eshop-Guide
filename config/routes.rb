Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  get 'pages/home'
  get '/dashboard', to: 'pages#dashboard'
  get '/friend', to: 'users#friends'
  get '/export', to: 'users#export_csv_file'

  resources :users, only: %i[edit update]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
