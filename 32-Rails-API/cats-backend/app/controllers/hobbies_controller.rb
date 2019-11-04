class HobbiesController < ApplicationController
    def index 
        render json: Hobby.all
    end 

    def random
        render json: Hobby.all.sample
    end 
end

