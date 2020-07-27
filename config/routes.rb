Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

namespace :api do 
  namespace :v1 do
    resources :regions, only: [:index]
    resource :reviews, only: [:new, :create, :index, :show]
  end
end

 

end
