Rails.application.routes.draw do
  mount_devise_token_auth_for 'Account', at: 'auth'
  namespace :api, format: :json do
    namespace :v1 do
      resources :users, only: [:index]
    end
  end
end
