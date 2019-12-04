class Api::V1::AuthController < ApplicationController

  def fake_create # POST /api/v1/login
    user = User.find_by({username: params[:username], password: params[:password]})
    #user is an instance or user is nil
    if user 
      render json: {
        message: "successful login",
        authenticated: true,
        user: user
      }
    else 
      render json: {
        message: "invalid username or password",
        authenticated: false
      }
    end 
  end

  def create # POST /api/v1/login
    user = User.find_by({username: params[:username]}).authenticate(params[:password])
    #user is an instance or user is nil
    if user 
      payload = {user_id: user.id}
      render json: {
        message: "successful login",
        authenticated: true,
        user: user,
        token: encode(payload)
      }, status: :accepted
    else 
      render json: {
        message: "invalid username or password",
        authenticated: false
      }, status: :unauthorized
    end 
  end

end
