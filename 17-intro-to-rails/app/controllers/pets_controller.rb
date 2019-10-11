class PetsController < ApplicationController

    # get '/pets' do 
    #     @pets = Pet.all
    #     erb :index
    # end

    # index action
    def index
        @pets = Pet.all
    end

    # show action
    def show
        @pet = Pet.find(params[:id])
        # render 'show'
    end
end
