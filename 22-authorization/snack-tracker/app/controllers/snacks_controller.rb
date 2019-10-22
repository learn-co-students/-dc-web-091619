class SnacksController < ApplicationController

    before_action :find_snack, only: [:show, :edit, :update]
    before_action :authorized
    
    def home
    end

    def index
        @snacks = Snack.all
    end

    def show
        cookies["my_favorite"] = "chocolate chip"
        session["secret_favorite"] = "oatmeal raisin"
        cookies["last_visited"] = @snack.name
    end

    def new
        @snack = Snack.new
        render :new
    end

    def create
        @snack = Snack.new(snack_params)
        if @snack.valid?
            @snack.save
            redirect_to snack_path(@snack)
        else
            render :new
        end
    end

    def edit
        # test
    end

    def update
        @snack.update(snack_params)
        redirect_to snack_path(@snack)
    end

    def destroy
        Snack.destroy(params[:id])
        redirect_to snacks_path
    end

    private

    def find_snack
        @snack = Snack.find(params[:id])
    end

    def snack_params
        params.require(:snack).permit(:name, 
            :calories, :deliciousness, :retailer_id)
    end
end
