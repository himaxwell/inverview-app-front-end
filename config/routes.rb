Rails.application.routes.draw do
  root to: "pages#root"

  namespace :api do
    namespace :v1 do
      resources :conferences, only: [:index, :create, :destroy, :update]
    end
  end
end
