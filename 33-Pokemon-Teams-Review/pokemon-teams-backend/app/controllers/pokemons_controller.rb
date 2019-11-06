class PokemonsController < ApplicationController
    def create 
        name = Faker::Name.first_name
        species = Faker::Games::Pokemon.name
        trainer_id = params[:pokemon][:trainer_id]
        pokemon = Pokemon.create(species: species, nickname: name, trainer_id: trainer_id)
        render json: pokemon
        
    end

    def destroy 
        pokemon = Pokemon.find(params[:id])
        pokemon.destroy
    end
end
