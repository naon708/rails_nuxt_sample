Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :tasks, only: :index

      post '/register', to: 'users#create'
      post '/login', to: 'sessions#create'
      # get '/show', to: 'users#show'
      resource :user, only: %i[show]

      # resource :mypage, only: %i[show update]
    end
  end
end
