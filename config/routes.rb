Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users

  get 'flavors/:flavor_id/reviews/new', to: 'homes#index'
  get 'regions/:id', to: 'homes#index'
  get 'flavors/:id', to: 'homes#index'
  
  namespace :api do 
    namespace :v1 do
      resources :regions, only: [:index, :show]
      resources :flavors, only: [:show] do
        resources :reviews, only: [:create]
      end
    end 
  end
end
