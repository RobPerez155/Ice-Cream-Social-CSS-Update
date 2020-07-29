Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get 'flavors/:flavor_id/reviews/new', to: 'homes#index'
  get 'regions/:id', to: 'homes#index'
  

  namespace :api do 
    namespace :v1 do
      resources :regions, only: [:index, :show]
      resources :flavors, only: [:show] do
        resources :reviews, only: [:new, :create]
      end
    end
    
  end
end
