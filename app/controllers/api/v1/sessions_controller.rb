class Api::V1::SessionsController < ApplicationController
  include JwtAuthenticator

  def create
    @user = User.find_by(name: params[:name])
    if @user&.authenticate(params[:password])
      # jwtの発行
      jwt_token = encode(@user.id)
      # レスポンスヘッダーにトークンを設定
      # response.headers['X-Authentication-Token'] = jwt_token
      render json: { token: jwt_token, response: [response.status, response.message, response.headers] }
    else
      # render json: { error: 'ニックネームまたはパスワードが誤っています', status: 401 }
      raise UnableAuthorizationError.new("ログインIDまたはパスワードが誤っています。")
    end
  end
end
