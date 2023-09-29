Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  get 'pages/home'
  get '/dashboard', to: 'pages#dashboard'
  get '/friend', to: 'users#friends'
  get '/export', to: 'users#export_csv_file'
  get '/profile/edit', to: 'users#edit', as: 'edit_profile'
  patch '/profile/update', to: 'users#update', as: 'update_profile'
end
