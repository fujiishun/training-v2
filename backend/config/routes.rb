Rails.application.routes.draw do
  # ログイン機能のルーティング
  mount_devise_token_auth_for 'Account', at: 'auth', controllers: {
    registrations: 'auth/registrations'
  }

  # ログインユーザー取得のルーティング
  namespace :auth do
    resources :sessions, only: %i[index]
  end

  namespace :api, format: :json do
    namespace :v1 do
      resources :users, only: [:index]
    end
  end
end
