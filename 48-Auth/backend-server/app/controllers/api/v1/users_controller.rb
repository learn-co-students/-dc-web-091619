class Api::V1::UsersController < ApplicationController
  def index
    render json: User.all
  end

  def show 
    token = request.headers["Authorization"]
    payload = decode(token)
    user = User.find(payload["user_id"])
    render json: user
  end 
end
